---
date: '2019-09-04'
title: "[프로그래머스] 스킬 체크 Level 2 - 도전 3"
description: 
tags: ['알고리즘', '코딩 테스트']
---

### 문제 1: 다음 큰 숫자
숫자 n보다 크면서 2진수 변환 시 1의 개수가 n의 2진수 변환과 같은 수들 중 가장 작은 수 구하기
- ex. 78 (1001110) => 결과: 83 (1010011)
- ex. 15 (1111) => 결과: 23 (10111)

#### 내가 푼 방법
시간복잡도 O(logN * loglogN), 공간복잡도 O(log N)
1. 먼저 주어진 숫자를 2진수 문자열 형태로 변환
2. 문자열 끝에서부터 '01' 패턴을 찾아 그 순서를 뒤집기
    - 만들어진 2진수 문자열이 0을 포함하지 않을 수 있으므로, 임의로 문자열 제일 앞에 '0' 붙여놓고 시작하기
3. 뒤집은 패턴 뒤의 숫자들을 오름차순으로 정렬
4. 마지막으로 이렇게 만들어진 숫자를 다시 10진수로 변환하여 반환

#### 내가 작성한 코드
```cpp
int solution(int n) {
    string s = "0" + toBinary(n);   
    for (int i = s.length() - 2; i >= 0; i--) {
        if (s[i] == '0' && s[i+1] == '1') {
            swap(s[i], s[i+1]);
            sort(s.begin() + i + 2, s.end());
            break;
        }
    }
    int answer = toDecimal(s);
    return answer;
}
// 도움함수: 10진법 -> 2진법
string toBinary(int n) {
    string s = "";
    while (n > 0) {
        s += to_string(n % 2);
        n /= 2;
    }
    reverse(s.begin(), s.end());
    return s;
}
// 도움함수: 2진법 -> 10진법
int toDecimal(string s) {
    int sum = 0;
    int place = 1;
    for (int i = s.length() - 1; i >= 0; i--) {
        if (s[i] == '1') {
            sum+= place;
        }
        place *= 2;
    }
    return sum;
}
```

#### 모범 답안과 비교
시간복잡도 O(nlogn), 공간복잡도 O(1)
- 그냥 n보다 큰 수를 차례대로 체크하여 1의 개수가 같은 경우 반환
- 도움 함수로 2진수로 변환했을 때의 1의 개수 카운트하기
```cpp
int solution(int n) {
    int answer = n + 1;
    int count = getCount(n);
    while (true) {
        if (getCount(answer) == count) break;
        answer++;
    }
    return answer;
}
// 도움 함수: 2진수로 변환했을 때 1의 개수 카운트
int getCount(int n) {
    int count = 0;
    while (n > 0) {
        if (n % 2 == 1) count++;
        n /= 2;
    }
    return count;
}
```

### 문제 2: 큰 수 만들기
주어진 숫자에서 k개의 자리를 제거했을 때 가장 큰 수가 되는 숫자 구하기
- ex. 1924 , k=2 -> 결과: 94
- ex. 1231234, k=3 -> 결과: 3234
- ex. 4177252841, k=4 -> 결과: 775841

#### 내가 푼 방법
시간복잡도 O(n^(n-k))
1. 주어진 문자열의 길이가 n일 때, (n-k) 자리를 채워나가는 방식 (이하 need = n-k로 이해하기)
    - 1번째 문자를 구할 때, 적어도 (need-1)개의 자리는 필요하기 때문에 일단 뒤에 그만큼을 남겨둔 범위 (0 ~ n-k+1) 내에서 가장 큰 숫자 찾아 해답 문자열에 추가
    - 그 뒤 2번째 문자도 마찬가지로 (need-2)개의 자리를 남겨둔 범위 내에서 가장 큰 숫자를 찾아 해답 문자열에 추가
    - 그 뒤 need 자리를 채우는 모든 문자까지 가장 큰 숫자를 찾아 해답 문자열을 채워나가기
2. 재귀 방식으로 구현하였다

결국 범위를 설정해두고서 계속 그 범위 내에서 가장 큰 숫자 (n-k)개를 찾고, 각 숫자의 자리를 기준으로 범위를 매번 새로 업데이트해나가는 방식이라고 할 수 있다.

#### 내가 작성한 코드
사실 시간 내에 코드를 한 자도 적지 못했다...ㅠㅜ (뒤늦게라도 푼 방법은 다음과 같다)
```cpp
string findMaxSubsequence(string number, int start, int end, int k) {   
    string s = "";
    // base case
    if (start > end || k == 0) {
        return s;
    }    
    // recursive case
    int max_index = start;
    for (int i = start; i <= end - k + 1; i++) {
        if (number[i] > number[max_index]) {
            max_index = i;
        }
    }
    s = number.substr(max_index, 1) + findMaxSubsequence(number, max_index + 1, end, k - 1); 
    return s;
}
string solution(string number, int k) {
    int len = number.length();
    string answer = findMaxSubsequence(number, 0, len - 1, len - k);
    return answer;
}
```

#### 모범 답안과 비교
시간복잡도 O(n*k)
- 사실 해결 방법은 내가 생각한 방법이 맞았으나, 구현 방식에 차이가 있었다.
- 재귀 방식으로 구현하기보다는 반복적으로 구현한 방식이다. 
```cpp
string solution(string number, int k) {
    string answer = "";
    // 주어진 숫자에서 k개를 뺀 숫자의 각 자리 구하기
    int need = number.length() - k;
    int cur_index = 0;
    for (int i = need; i > 0; i--) {
        // 범위 내에서 가장 큰 숫자 찾아 정답에 추가
        int max_index = cur_index;
        for (int j = cur_index, n = number.length(); j < n - i + 1; j++) {
            if (number[j] - '0' > number[max_index] - '0') {
                max_index = j;
            }
        }
        answer += number[max_index];
        // 현재 추가한 숫자의 인덱스를 기준으로 범위 재설정
        cur_index = max_index + 1;
    }
    return answer;
}
```

### 결과 및 후기
첫 번째 문제와 두 번째 문제 모두 제 시간 안에 해답을 찾지 못해 결국 17점으로 __불합격__ 했다.
- 첫 번째 문제는 풀기는 했지만 처음에 진법 변환이 나와 당황하고, 풀이도 효율성 테스트를 통과하지 못했었다.
    - 2진수로 변환하는 방식을 제대로 기억하고 있나 하고 당황했었다. 다행히 2진수로 변환하고 다시 10진수로 변환하는 코드는 어려움없이 작성할 수 있었다.
    - 하지만 풀이를 작성했음에도 불구하고, 효율성 테스트를 통과하지 못했다. 다시 차근차근 생각하고 모범 답안과도 비교해보니, 아마 문제는 공간복잡도에 있던 것이 아닐까 싶다.
- 두 번째 문제는 처음에 이해를 잘못하여 결국 코드 조차 작성하지 못했다. 
    - 처음에 숫자의 각 자리를 내림차순으로 정렬하면 되는 줄 알았는데, 알고보니 각 자리의 숫자의 순서를 유지하면서 제거해야 하는 문제임을 깨닫고 뒤늦게 다른 해결방법을 찾기 시작했다.
    - 나중에 다시 풀어보았는데도 재귀함수로 구현을 했기 때문에 어떤 테스트 케이스에서는 시간초과로 실패가 뜨기도 했다 (결국 효율성 문제...)
    - 같은 풀이방법을 재귀 대신 반복함수로 구현 을 해보니 정확성과 효율성에서 모두 통과했다.

### What I learned
- 문제를 차근차근 이해하여 __요점을 파악하자__. 그래서 정말 필요한 코드를 작성할 수 있도록 하자. 
    - 괜히 1번 문제에서 했던 것처럼 문자열로 변환했다가 다시 또 변환하는 과정이 굳이 없어도 되는데 한 것처럼...
- 문제를 찬찬히 이해하며 제대로 파악하고, __가능하면 반복 방식으로 구현__ 하여 효율성이 좋은 코드를 제출하도록 하자.
    - 저번에 백트래킹으로 애를 먹은 적이 있어, 재귀 방식으로 구현하는데 집착을 한 것 같다. 정확하게 어떤 경우에 재귀함수가 필요하고, 어떤 경우에는 반복함수가 필요한지 제대로 이해하고 사용하자.