---
title: Duplicate keys when operating hashmap through multi threads
date: 2024-03-20
category: Development
tags: [Java, Multi-thread]
---

```kotlin
import java.util.stream.Collectors

val lst = (1..2).toList()

(1..10000).forEach {
    val mm = mutableMapOf<String, Int>()
    lst.parallelStream()
        .map {
            mm.put("k", it)
        }
        .collect(Collectors.toList())

    if (mm.size != 1) {
        println(mm)
        println(mm.size)
    }
}
```
