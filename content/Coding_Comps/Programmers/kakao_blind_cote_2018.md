---
date: '2019-09-06'
title: "[프로그래머스] 카카오 블라인드 코딩테스트 기출 2018"
description: 
tags: ['알고리즘', '코딩 테스트']
---

### 문제 1: 오픈채팅방

### 문제 2: 실패율

### 문제 3: 후보키

### 문제 4: 무지의 먹방 라이브

```cpp
int solution(vector<int> food_times, long long k) {
    int answer = 0;
    queue<pair<int, int>> q;
    int sum = 0;
    for (int i = 1, n = food_times.size(); i <= n; i++) {
        q.push(make_pair(i, food_times[i - 1]));
        sum += food_times[i-1];
    }
    if (k >= sum) {
        return -1;
    }
    while (k--) {
        int number = q.front().first;
        int left = q.front().second - 1;
        q.pop();
        if (left > 0) {
            q.push(make_pair(number, left));
        }
    }
    return q.front().first;
}
```

### 문제 5: 길 찾기 게임

### 문제 6: 매칭 점수

### 문제 7: 블록 게임