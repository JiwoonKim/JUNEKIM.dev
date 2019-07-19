---
date: '2019-07-18'
title: "[프로그래머스] 스킬 체크 Level 2"
description: 
tags: ['알고리즘', '코딩 테스트']
---

### 문제 1: 짝 제거
주어진 문자열에서 짝(연속으로 반복된 두 문자)이 더 이상 없을 때까지 계속 제거해나갔을 때, 남는 문자가 없으면 1을, 있으면 0을 반환하기
 - ex. "baabaa" 
    - "baabaa" > "bbaa" > "aa" > ""
    - => 1 반환

#### 문제풀이

#### 코드
```cpp
#include <iostream>
#include<string>
using namespace std;
// 짝 제거 함수 코드 짜기
int solution(string s) {
    // 문자열이 존재하는 동안
    while (s != "") {
        // 반복되는 짝을 찾기 (문자열에서의 첫 인덱스)
        int repeat_index = -1;
        for (int i = 0, n = s.length() - 1; i < n; i++) {
            if (s[i] == s[i + 1]) {
                repeat_index = i;
                break;
            }
        }
        // 짝이 문자열이 존재하지 않는다면, 짝 제거 실패 
        if (repeat_index == -1) {
            return 0;
        }
        // 짝 존재하면, 짝 제거하여 문자열 업데이트
        else {
            s = s.erase(repeat_index, 2);
        }
    }
    // 짝 제거로 문자열을 모두 제거 성공
    return 1;
}
```

#### 문제 분석

### 문제 2: 기능 배포
다수의 기능들의 진행현황과 진행속도가 각각 배열로 주어졌을 때, 각 기능들이 배포되는 개수 구하기 (기능은 진행이 100인 경우에만 배포가 가능하며, 앞에서부터 순서대로만 배포될 수 있기 때문에 뒤에 기능이 더 빨리 완료된다고 하더라도 앞에 기능이 완료되는 날에 같이 배포된다)
- ex. 진행현황 {93, 30, 55}, 진행속도 {1, 30, 5}
    - 진행되어야 할 양 (100 - 진행현황): {7, 70, 45}
    - 완료될 때까지 걸리는 날짜 (진행할 양 / 진행속도): {7, 3, 9}
    - 배포되는 날짜: 7일 째 - 2개, 9일째 - 1개
    - => {2, 1} 반환

#### 문제풀이

#### 코드
```cpp
#include <string>
#include <vector>
#include <cmath>
#include <iostream>
using namespace std;
// 기능 배포 함수 코드 짜기
vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer;
    // 각 기능마다 며칠 뒤에 배포가 이루어지는지 계산하기
    vector<int> days(progresses.size());
    for (int i = 0, n = days.size(); i < n; i++) {
        int progress_left = (100 - progresses[i]);
        float day_left = (float) progress_left / (float) speeds[i];
        days[i] = (int) ceil(day_left);
    }
    // 배포되는 날짜들과 해당 날짜에 배포될 기능 개수 구하기
    int d_day = days[0];
    int count = 1;
    for (int i = 1, n = days.size(); i <= n; i++) {
        // 정보 입력 그리고 새로운 배포날짜 업데이트
        if (i == n || days[i] > d_day) {
            answer.push_back(count);
            d_day = days[i];
            count = 1;
        } else {
            count++;
        }
    }
    return answer;
}
```

#### 문제 분석

### 결과
- 첫 번째 문제: 모든 테스트 케이스를 통과하는 코드 30분 안에 작성
    - But 시간 초과로 효율성 테스트 통과 실패
- 두 번째 문제: 모든 테스트 케이스를 통과하는 코드 20분 안에 작성
- 나머지 10분 동안 첫 번째 문제 다시 풀려고 노력