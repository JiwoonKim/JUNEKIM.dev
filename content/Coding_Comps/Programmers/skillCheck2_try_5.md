---
date: '2019-09-06'
title: "[프로그래머스] 스킬 체크 Level 2 - 도전 5 (통과)"
description: 
tags: ['알고리즘', '코딩 테스트']
---

### 문제 1: 다음 큰 숫자
- 이미 풀어본 적이 있는 문제이므로 생략 (스킬체크 level 2 - 도전 3 참고)

### 문제 2: JadenCase 문자열 만들기
주어진 문자열을 JadenCase로 변환하기 (JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열이다)

#### 내가 푼 방법
시간복잡도 O(n), 공간복잡도 O(1)
1. 문자열의 각 문자를 체크하여 단어의 시작점인지 아닌지를 체크
    - 먼저 문자열 제일 앞의 문자를 단어의 시작점으로 초기화
    - 공백(' ') 문자가 올때마 단어의 시작점을 그 다음 문자로 업데이트
2. 동시에 해당 문자가 시작점이고 소문자라면, 대문자로 변환
3. 동시에 해당 문자가 시작점이 아니고 대문자라면, 소문자로 변환

#### 내가 작성한 코드
```cpp
string solution(string s) {
    int start = 0;
    // 문자열의 각 문자를 순환하며 시작점 업데이트하고 변환시키기
    for (int i = 0, n = s.length(); i < n; i++) {
        // 공백을 기준으로 시작점 업데이트하기
        if (s[i] == ' ') {
            start = i + 1;
            continue;
        }
        // 문자가 시작점이면, 대문자로 변환
        if (i == start && (s[i] >= 97 && s[i] < 97 + 26)) {
            s[i] = s[i] - 32;
        }
        // 문자가 시작점이 아니라면, 소문자로 변환
        if (i != start && (s[i] >= 65 && s[i] < 65 + 26)) {
            s[i] = s[i] + 32;
        }
    }
    return s;
}
```

#### 모범 답안과 비교

### 결과 및 후기
첫 번째 문제와 두 번째 문제 모두 풀고 드디어 __합격__ 했다!
- 첫 번째 문제는 그저께 봤던 문제라서 사실 당황하면서 '이래도 되나..?'라는 생각이 들었다. 해답을 기억하고 있어서 그대로 맞추어서 넣으니 5분만에 풀었다.
- 두 번째 문제도 비교적 쉬운 문제여서 25분만에 풀고 통과했다 (스스로 첫번째 문제가 너무 쉬웠으니 무조건 30분 제한 안에 두 번째 문제를 풀어야만 통과했다고 생각하기로 했었다. 다행히 시간 내에 풀고 통과했다!!)
    - 사실 처음에는 문자열에서 단어를 일일이 파싱하고 각 단어마다 JadenCase로 변환하여 그걸 다시 이어붙이는 방식으로 코드를 진행하다가, 다시 이어붙였을 때 또 일일이 공백을 중간 중간에 넣어야 하는 불편함이 들어 코드를 다 삭제하고 다시 짰었다. 결국 위에 작성한 풀이 방법대로 한 번에 문자열을 돌며 시작점을 업데이트하고 시작점인지 아닌지를 기준으로 변환을 진행하는 방식으로 문제를 풀었다.
    -  중간에 toupper()와 tolower() 함수들을 어떻게 사용하는 지 몰라 결국 직접 변환하는 코드를 짰지만...그래도 결국에는 풀렸으니까 괜찮다고 생각한다.

### What I learned
- 문득 드는 생각은 __코딩 테스트도 운빨이 작용한다__ 는 생각이다. 첫 번째 문제에서 해답을 기억하고 있는 문제가 나와서 속으로 많이 당황을 했었는데, 사실 생각해보면 실전 코딩 테스트에서도 내가 어제 봤던 문제가 나올 수도 있지 않은가... 물론, 그렇지 않을 경우도 있겠지만, 그래도 비슷하게 아는 문제가 나오면 상대적으로 쉽게 문제를 풀 수도 있는 것이니까 너무 죄책감을 가지지 않고 스킬 체크 level 2를 통과했다고 생각하기로 했다. 거기다 내가 풀이 정리를 꼼꼼하고 성실하게 계속 하지 않았다면, 이 문제도 맞추지 못했을지도 모르니까 결국에는 내 노력이 통했다고도 생각하기로 했다.
- 비록 5번째 도전이었지만, 끝까지 계속 부딪혀서 결국에는 통과했다!!