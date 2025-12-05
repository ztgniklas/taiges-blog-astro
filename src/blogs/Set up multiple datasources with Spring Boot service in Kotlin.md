---
title: Set up multiple datasources with Spring JPA in a Spring Boot service
category: "Development"
date: 2025-05-22
featured: true
---

### Introduction

In a Spring Boot service, it is easy to configure a single datasource. You don't even need to set it up programmatically. Just fill in necessary application properties and Spring Boot will do all the configuration work for you.

However, in some cases, we need multiple datasources co-existing at the same time. This cannot be done through auto configuration of Spring Boot. In this tutorial, we are going to take 3 steps to transfer a Spring Boot service from 1 datasource to 2 datasources.

### Step 1: One datasource with Spring Boot auto configuration

Initialize a Spring Boot project from Spring Initializr. We use version 2.7.18 which is compatible with JDK 11. Another necessary dependencies are adopted as below:

```gradle
plugins {
	id 'org.springframework.boot' version '2.7.18'
	id 'io.spring.dependency-management' version '1.1.4'
	id 'org.jetbrains.kotlin.jvm' version '1.9.23'
	id 'org.jetbrains.kotlin.plugin.spring' version '1.9.23'
	// used for make all kotlin classes open so that dont require no arg constructor
	id 'org.jetbrains.kotlin.plugin.jpa' version "2.0.0-Beta5"
}
...
dependencies {
	implementation 'org.springframework.boot:spring-boot-starter-web'
	implementation 'com.fasterxml.jackson.module:jackson-module-kotlin'
	implementation 'org.jetbrains.kotlin:kotlin-reflect'
	implementation 'org.postgresql:postgresql:42.4.1'
	implementation group: 'org.springframework.boot', name: 'spring-boot-starter-data-jpa', version: '2.7.18'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```

Set datasource related properties in application.properties under resources folder. In this example, we set up a CockroachDB connection:

```shell
spring.datasource.url=jdbc:postgresql://cockroach-cluster-url/roach_data?sslmode=verify-full
spring.datasource.username=xxx
spring.datasource.password=xxx
spring.datasource.driver-class-name=org.postgresql.Driver
```

You can also define these in application.yml:

```yml
spring:
  datasource:
    url: jdbc:postgresql://cockroach-cluster-url/roach_data?sslmode=verify-full
    username: xxx
    password: xxx
    driver-class-name: org.postgresql.Driver
```

Next, we will do some code work. Firstly, we create a DAO entity mapping the object we are fetching from the table. In this example, we have a table accounts of which the schema is:

```sql
CREATE TABLE accounts (id INT PRIMARY KEY , name STRING, balance DECIMAL);
```

Thus, we create corresponding entity class:

```kotlin
@Entity
@Table(name = "accounts")
data class Account(
        @Id
        @Column(name = "id")
        var id: Int,

        @Column(name = "name")
        var name: String,

        @Column(name = "balance")
        var balance: Double
)
```

And Repository interface:

```kotlin
@Component
interface AccountRepository : JpaRepository<Account, Int> {

    @Query("SELECT a.* FROM accounts a WHERE a.id = :id", nativeQuery = true)
    fun findAccountById(id: Int): Account?

    @Query("SELECT DISTINCT a.* FROM accounts a WHERE a.name LIKE concat('%',:name,'%')", nativeQuery = true)
    fun searchAccountsByName(name: String): List<Account>?
}
```

You can also set up a controller with an endpoint in order to conveniently test the access to the DB:

```kotlin
@RestController
@RequestMapping("/accounts")
class AccountController(private val accountRepository: AccountRepository) {

    @GetMapping("/{id}")
    fun getAccountById(@PathVariable id: Int): Account? {
        return accountRepository.findAccountById(id)
    }
}
```

By doing all above, we have successfully set up a Spring Boot service with one datasource.

### Step 2: Switch to programmatic configuration

Spring Boot automatically reads DB configuration from spring.datasource.* in the configuration file. However, it is not possible to configure multiple datasources with auto configuration. Therefore, we need to configure current datasource manually. In the following, we will use application.properties but things are the same for application.yml.

Firstly, replace the spring datasource configuration with the following:

```shell
app.datasource1.jdbcUrl=jdbc:postgresql://some-url
app.datasource1.username=xxx
app.datasource1.password=xxx
app.datasource1.driverClassName=org.postgresql.Driver
```

Basically, you can use whatever names you want to name the fields app, datasource1. 

Create a configuration class to configure the datasource manually:

```kotlin
@Configuration
@PropertySource("classpath:application.properties")
@EnableJpaRepositories(
        basePackages = ["com.path.to.repository"],
        entityManagerFactoryRef = "accountEntityManager",
        transactionManagerRef = "accountTransactionManager"
)
class PersistenceAccountAutoConfiguration {

    @Autowired
    private lateinit var env: Environment

    @Bean
    @Primary
    @ConfigurationProperties("app.datasource1")
    public fun accountDataSource(): DataSource {
        return DataSourceBuilder.create().build()
    }

    @Bean
    @Primary
    public fun accountEntityManager(): LocalContainerEntityManagerFactoryBean {
        return LocalContainerEntityManagerFactoryBean().apply {
            dataSource = accountDataSource()
            jpaVendorAdapter = HibernateJpaVendorAdapter()
            setJpaPropertyMap(mapOf("hibernate.dialect" to env.getProperty("hibernate.crdb_dialect"), "hibernate.show_sql" to true))
            setPackagesToScan("com.path.to.repository")
        }
    }

    @Bean
    @Primary
    public fun accountTransactionManager(): PlatformTransactionManager {
        return JpaTransactionManager().apply {
            entityManagerFactory = accountEntityManager().`object`
        }
    }
}
```

Change app.datasource1 and com.path.to.repository corresponding to the config in your own project. By spinning up the service, you should see exactly the same behavior as before. The only difference is that the datasource is now manually configured instead of being managed by Spring Boot.

### Step 3: Configure second datasource

Add the connection properties of the second datasource to application.properties:

```shell
app.datasource2.jdbcUrl=jdbc:postgresql://some-url
app.datasource2.username=xxx
app.datasource2.password=xxx
app.datasource2.driverClassName=org.postgresql.Driver
```

Create a configuration class for the second datasource just like the first one. Do not forget to change to @ConfigurationProperties("app.datasource2") for the DataSource bean and basePackages accordingly.

After Creating DAO and Repositories for the second datasource, and maybe a new endpoint in the controller, you should be able to access data from the second datasource while the first datasource is still working as before.

### Additional notes

If you use application.yml, you might need to implement a PropertySourceFactory to parse the properties in application.yml, and then specify it in the @PropertySource annotation.