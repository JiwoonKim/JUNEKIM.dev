---
date: '2019-08-19'
title: "[프로그래머스] 스킬 체크 Level 2 - 도전 2"
description: 
tags: ['알고리즘', '코딩 테스트']
---

### 문제 1: 소수 만들기
주어진 숫자들 중 3개의 수를 더했을 때 소수가 되는 경우의 개수 구하기
(중복된 숫자는 주어지지 않음)
 - ex. [1, 2, 3, 4] -> (1,2,4 = 7) => 결과: 1
 - ex. [1, 2, 7, 6, 4] -> (1,2,4 = 7), (1,4,6 = 11), (2,4,7 = 13), (4,6,7 = 17)

#### 내가 푼 방법
시간복잡도 O(n^3 * √n), 공간복잡도 O(1)
1. 주어진 숫자들에서 차례대로 3 숫자의 조합의 합을 구하기
2. 그 합이 소수인지 체크

#### 내가 작성한 코드
```cpp
// 도우미 함수: 소수인지 체크
bool isPrime(int n) {
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
// 주어진 숫자들의 세 합이 소수인 경우의 개수 구하기
int solution(vector<int> nums) {
    int count = 0;
    int size = nums.size();
    // 배열에서 각기 다른 세 개의 숫자를 골라
    for (int i = 0; i < size; i++) {
        for (int j = i + 1; j < size; j++) {
            for (int k = j + 1; k < size; k++) {
                // 세 숫자의 합이 소수인지 체크
                int sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) {
                    count++;
                }
            }
        }
    }
    // 총 소수 개수 리턴
    return count++;
}
```

### 문제 2: 소수 찾기
주어진 한 자리 숫자들을 가지고 만들 수 있는 모든 순열 중 소수의 개수 구하기 (단, 숫자들을 문자열의 형태로 주어짐)  
 - ex. "17" -> [7, 17, 71] => 결과: 3
 - ex. "011" -> [11, 101] => 결과: 2

#### 내가 푼 방법
시간복잡도: O(n * n! * loglog n), 공간복잡도: O(n * n!)
1. 주어진 숫자들을 가지고 만들 수 있는 __모든 k-길이의 순열 수 구하기__ (중복된 숫자들이 가능하기 때문에 중복된 순열 수들 제외해야 함)
    - 문제는 단순히 1~n의 숫자들로 nPk를 만드는 일반적인 순열 문제와 달리, 주어진 숫자들만 가지고
2. 구한 순열 중 소수의 개수 세기
    - 각 순열이 소수인지 일일이 체크 (순열 개수 * O(loglog N))

#### 내가 작성한 코드
코드 다 작성도 못하고 끝났기 때문에 다시 찬찬히 생각한 코드를 대신 남김
```cpp
int solution(string numbers) {    
    // 가능한 숫자들을 모두 만들어 저장
    unordered_set<int> k_len_perms;
    sort(numbers.begin(), numbers.end());
    do {
        /* 주어진 숫자들로 만들 수 있는 모든 순열 만들어
           각 순열을 앞에서부터 k길이만큼 잘라 nPk의 순열들을 일일이 생성하여 저장
           (unordered_set을 사용하기 때문에 중복된 순열들은 알아서 제외됨)
        */
        for (int k = 1, n = numbers.length(); k <= n; k++) {
            string k_len_str = numbers.substr(0, k);
            k_len_perms.insert(stoi(k_len_str));
        }
    } while (next_permutation(numbers.begin(), numbers.end()));
    // 만들어진 모든 숫자들 중 소수의 개수 세기
    int count = 0;
    for (auto it = k_len_perms.begin(); it != k_len_perms.end(); it++) {
        if (isPrime(*it)) count++;
    }
    return count;
}
```

#### 모범 답안과 비교
시간복잡도 O(n), 공간복잡도 O(n)
- 

### 결과 및 후기
두 번째 문제 코드를 다 작성하지 못하여 __불합격__ 했다.
- 소수와 조합 등 수학에 대한 전반적인 이해가 많이 부족했다
- 순열을 구해야 하는 문제이기 때문에 시간복잡도를 너무 많이 신경 써 허둥지둥했다
    - 순열은 결국에는 모두 구해야 하기 때문에 시간복잡도가 기하급수적으로 커지는 것은 어쩔 수 없는 건가 보다...
    - 순열 또는 조합을 구해야 하는 문제에서는 그걸 구하는 시간복잡도는 크게 신경 쓰지 말도록 하자ㅠㅜ

### What I learned
- __소수__ 와 __순열__ 등 수학에 대한 전반적인 이해가 많이 부족했다
    - `소수 체크`: 주어진 숫자가 소수인지 체크하는 방법, 에라토스테네스의 체로 주어진 범위에서 소수 모두 구하기
    - `순열 구하기`: STL next_permutations 사용하는 방법, unordered_set을 사용하여 중복순열을 제외하는 방법
- __순열과 조합 문제__ 에서는 그걸 구하는 __시간복잡도는 신경 쓰지 말자__