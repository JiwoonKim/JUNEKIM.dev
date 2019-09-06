---
date: '2019-09-05'
title: "[프로그래머스] 스킬 체크 Level 2 - 도전 4"
description: 
tags: ['알고리즘', '코딩 테스트']
---

### 문제 1: 폰켓몬
중복이 허용되는 숫자 배열에서 1/2의 숫자만 고를 수 있을 때, 최대로 고를 수 있는 다른 종류의 숫자의 개수를 구하기
- ex. [3, 1, 2, 3] -> 종류 3개 중 2개 고르기 => 결과: 2
- ex. [3, 3, 3, 2, 2, 4] -> 종류 3개 중 3개 고르기 => 결과: 3
- ex. [3, 3, 3, 2, 2, 2] -> 종류 2개 중 3개 고르기 => 결과: 3

#### 내가 푼 방법
시간복잡도 O(n), 공간복잡도 O(n)
1. 주어진 숫자 배열에서 숫자 종류의 개수 세기
2. (배열의 크기 / 2)하여 고르는 개수 구하기
3. 종류의 개수와 고르는 개수를 비교하여 최대로 골라지는 종류의 개수 구하기
    - (종류의 개수 >= 고르는 개수)일 경우, 고를 수 있는 개수만큼 전부 다른 걸로 고를 수 있기 때문에 고르는 개수를 그대로 반환
    - (종류의 개수 < 고르는 개수)일 경우, 아무리 많이 골라도 결국 종류의 개수만큼만 고를 수 있기 때문에 종류의 개수를 그대로 반환

#### 내가 작성한 코드
```cpp
int solution(vector<int> nums) {
    // 종류의 개수 세기
    unordered_set<int> categories;
    for (int num : nums) {
        categories.insert(num);
    }
    // 고르는 개수 구하기
    int num_categories = categories.size();
    int num_picks = nums.size() / 2;
    // 종류의 개수와 고르는 개수 비교
    if (num_categories >= num_picks) {
        return num_picks;
    } else {
        return num_categories;
    }
}
```

### 문제 2: 가장 큰 수
숫자 배열이 주어졌을 때, 이 숫자들을 이어붙여 만들 수 있는 가장 큰 수를 구하기
- ex. [6, 10, 2] => 결과: "6210"
- ex. [3, 30, 34, 5, 9] => 결과: "9534330"

#### 내가 푼 방법
1. 배열의 각 숫자를 문자열 형태로 변환하여 저장
2. 문자열 형태의 숫자들을 특별한 내림차순으로 정렬
    - 기본적으로는 문자열의 내림차순을 따른다 (ex. "9" > "34" > "3")
    - 단, 길이가 다른 부분에서 0이 어이지는 숫자의 경우 더 작은 숫자로 간주한다 (ex. "3" > "30")
3. 내림차순으로 정렬된 숫자들을 차례대로 이어붙인 문자열 반환

#### 내가 작성한 코드
```cpp
// 숫자를 문자열로 변환하여 내림차순으로 정렬하기
string solution(vector<int> numbers) {
    string answer = "";
    vector<string> nums;
    for (int num : numbers) {
        nums.push_back(to_string(num));
    }
    sort(nums.begin(), nums.end(), cmp);
    for (string num : nums) {
        answer += num;
    }
    return answer;
}
// 도움 함수: 특별하게 내림차순을 적용하는 비교함수
bool cmp(const string &u, const string &v) {
    if (u.length() == v.length()) {
        return u > v;
    }
    else if (u.length() < v.length()) {
        int len = u.length();
        string sub = v.substr(0, len);
        if (u == sub) {
            if (v[len] == '0') return true;
            return false;
        }
        return u > sub;
    } 
    else {
        int len = v.length();
        string sub = u.substr(0, len);
        if (v == sub) {
            if (u[len] == '0') return false;
            return true;
        }
        return sub > v;
    }
}
```

#### 모범 답안과 비교
시간복잡도 O(N log N), 공간복잡도 O(1)
- 위와 같이 풀었을 경우 구멍이 뚫린 것마냥 오류가 나는 경우가 파다하다 ([틀리기 쉬운 테스트 케이스 참고](https://stroot.tistory.com/114))
- 그렇기 때문에 다른 방식으로 비교함수를 구현하여 정렬해야만 한다 (두 수를 문자열 형태로 이어붙였을 때, 더 큰 수가 나오게끔 정렬)
- 또한, [0, 0, 0]과 같은 특수 경우도 예외 처리를 해야 한다 ("000"이 아니라 "0"을 반환해야 함)
```cpp
// 도움 함수: 두 수를 문자열 형태로 이어붙여 비교
bool cmp(const int& u, const int& v) {
    string first = to_string(u) + to_string(v);
    string back = to_string(v) + to_string(u);
    return (first > back);
}
// 
string solution(vector<int> numbers) {
    // 위 비교함수를 바탕으로 내림차순으로 정렬
    string answer = "";
    sort(numbers.begin(), numbers.end(), cmp);
    for (int num : numbers) {
        answer += to_string(num);
    }
    // 만약 앞에 0이 오는 예외의 경우, 0 반환 
    if (answer[0] == '0') {
        answer = "0"
    }
    return answer;
}
```

### 결과 및 후기
첫 번째 문제를 빠르게 풀고 넘어왔으나, 두 번째 문제의 테스트 케이스를 통과하는 해답을 작성하지 못해 63.6점으로 __불합격__ 했다.
- 두 번째 문제에서 단순히 숫자들을 문자열로 변환하여 조금 특별한 내림차순으로 풀면 되는 줄 알았는데, 그렇게 했을 경우 틀리는 테스트 케이스가 굉장히 많다. 정렬 방식을 바꾸어야만 했고 더불어서 생각지 못한 예외의 경우가 있었다.

### What I learned
- 문제가 풀리지 않는 것 같으면, __문제를 작은 단위로 잘라서 생각해볼 것__!
    - ex. 두 번째 문제에서 [3, 34, 30]이 주어졌을 때 숫자들의 각 자리를 일일이 비교하기보다는 주어진 문제에서 이어붙이라고 한 것을 그대로 실행해볼 것! [3, 34]로 단위를 잘랐을 때, 이어붙였을 때의 더 큰 것을 찾는 문제로 생각하여 점점 문제를 확장해나가보자!
- __문제의 힌트는 문제 안에 있다!__ 문제를 다시 찬찬히 읽고 어떻게 나아갈지를 잘 생각해보자! 또 예외의 경우들은 주어진 문제의 명제, 그리고 가능한 조건들 안에 있으니 잘 생각해보고 만들자!!