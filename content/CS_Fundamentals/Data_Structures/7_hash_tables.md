---
date: '2019-09-21'
title: "[자료구조] ??. 해시 테이블"
description: Data Structures in C++ - Hash Tables 정리
tags: ['자료구조', 'Cpp']
---
> 문자 배열인 문자열 소개

### 문자열 (String)


use `unordered_multiset` to insert and erase duplicate keys (1-1. 완주하지 못한 선수)
    - use `iterator` to erase only one and not all duplicate keys
    - use `unordered_map` instead if need to count number of duplicates: (key, count)
        - bcuz duplicate keys are iterated separately in multiset