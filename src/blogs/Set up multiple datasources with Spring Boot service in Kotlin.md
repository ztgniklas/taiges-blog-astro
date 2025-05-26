## Set up multiple datasources with Spring JPA in a Spring Boot service

### Introduction

In a Spring Boot service, it is easy to configure a single datasource. You don't even need to set it up programmatically. Just fill in necessary application properties and Spring Boot will do all the configuration work for you.

However, in some cases, we need multiple datasources co-existing at the same time. This cannot be done through auto configuration of Spring Boot. In this tutorial, we are going to take 3 steps to transfer a Spring Boot service from 1 datasource to 2 datasources.

### Step 1: One datasource with auto configuration

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

The anotations are self evident, so we won't take more time explaining here.

