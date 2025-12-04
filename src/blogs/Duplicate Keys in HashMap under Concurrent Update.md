---
title: Duplicate Keys in HashMap under Concurrent Update
category: "Development"
date: 2025-03-20
---

### Background

I met this weird issue during work. It took me quit a while to debug to realize duplicate keys could exist in a map! It might sound obvious since everyone learned this in textbooks, but I was still a little shocked that one day it finally occurred in real life.


### Reproduce

The issue is pretty transient. No guarantee you will see duplicate keys every time you run the code. Here is a simple code in Kotlin to reproduce the issue:

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

You will find sometimes the size of mm is not 1, which is impossible theoretically. 

### Solution

1. Use ConcurrentHashMap instead of HashMap which is thread-safe.
2. Do not update the map concurrently if possible.
