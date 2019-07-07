---
date: '2019-06-22'
title: "Front Endgame 2019"
description: Front Endgame 2019
image: ''
tags: ['GDG', 'Front Endgame', '컨퍼런스']
---
> Front Endgame 2019 참가 후기

### Front Endgame 2019

#### 여러분이 Angular를 안 해봤다면 살아갈 이유가 하나 더 있는 겁니다
천민호 (PUBG & Festa)
- __왜 이렇게 많은 프레임워크가 있는가__ > 어떤 프레임워크를 써야 하는가
    - __서로 다른 철학을 이해__ 할 것
    - 앱과 화면의 동기화
- __리액트의 철학__: 철저한 방목형 (우리를 개발자로 바라보고 있다)
    - 많은 선택권을 줌
    - 동기화 하는 시점을 개발자에게 맡김
- __앵귤러의 철학__: 철저한 사육형 (우리를 사용자로 바라보고 있다)
    - 결과적으로 앵귤러 페이지에서 
    - 동기화 시점을 프레임워크가 알아서
    - 제약사항이 많기 때문에 잘못된 길로 빠지는 것을 방지해줌
    - TypeScript를 사용하는 이유: 팀으로 일할 경우 type로 코드의 가독성을 높일 수 있음
    - RxJS을 사용하는 이유: 비동기적 데이터의 흐름을 한 곳에서 조작할 수 있어 코드의 복잡성을 줄일 수 있음 (= 비동기 스트림의 lodash)
    - Dependency Injection System
        - car class에서 engine 종류마다 새 클래스를 정의하는 방법 < car class에 engine 타입을 주입하여 instance로 차 종류 생성
        - 디자인과 기능이 같은데 엔드포인트만 다른 상황: 각각의 플랫폼마다 다르게 개발x, 대신 DI system 사용

#### UX빼면 시체, 프론트엔드
한재엽 (Jbee)
- Web 역사: 쉴 새 없이 발전
    - server rendering: document (+ hyperlink)
    - ajax, gmail
    - jquery (interaction)
    - angular, react, ecmascript2015
    - babel
- JAM Stack
- 발전의 이유: __사용자가 웹을 이용하려 할 때 풍부한 정보를 좀 더 빠르게 보다 우아하게 제공하기 위해__ => UX
- __프론트엔드 개발자라면 UX (User Experience)를 고려하여 개발할 것__
- __UX Engineering__
    1. __성능최적화__: 초기로딩 초기화, 빠르다는 느낌을 전달, 부드러운 애니매이션
    2. __예상 가능한 동작__: 스크롤 복원(봤던 거 보여주기), 딤드 영역 닫힘, 손에 쉽게 들어오는 인터랙션 영역, 예상 가능한 인터랙션
    3. __SEO/SMO__: 검색 엔진 최적화, 소셜 미디어 공유 최적화, 어디까지 공유가 가능해야 하는가?
    4. __측정과 개선__: 
        - 사용자는 어떻게 우리 서비스를 사용하는가? (트래킹) 
        - 상황에 따라 그 비율은 어떻게 되는가? (A/B Test) 
        - 이탈률은 어덯게 줄일 수 있는가? (GA)

#### 프론트엔드 개발에 FRP(Functional Reactive Programming) 녹여보기
서재원 (푸른중학교)
- Imperative vs. Declarative Programming
- __Functional Programming__ => pure functions
    - mutation X
    - side effect X
    - referential transparency
- __Reactive Programming__: flow of data -> 
    - observer pattern
    - event
- __Functional Reactive Programming__: FP + RP
    - 높은 재사용성, low coupling의 장점

#### 문과생의 커리어 프론트엔드로 리팩토링하기
한근택 (ODK Media)

#### 프론트엔드 개발 끝장내기 (endgame) feat. Angular
나석주 (비바리퍼블리카)
- 프론트엔드 UI 개발의 발전:
    - JavaScript
    - 템플릿 문법
    - 컴포넌트
- 컴포넌트 내의 상태 변경: change detection
- 컴포넌트끼리 상태 공유: 의존성 주입

#### 프로그래머로서의 성장을 도왔던 태도들
안희종 (비바리퍼블리카)
- 무엇을 배울까
- 어떻게 배울까
    - 이론과 실습 사이의 핑퐁: 균현을 찾아서 이론 공부와 실습을 왔다갔다하기
        - __MVP (= Minimum Viable Product: 가치를 전달할 수 있는 가장 단순한 형태의 제품) 단위로!!__
    - 사람을 믿기보다는 기계를 통해 검증하기
- 왜 배울까: __나는 작지만 내가 할 수 있는 일이 있다__
    - FOMO (Fear of Missing Out) 부수기: 세상에 언어도 많고 프레임워크도 많고 기술도 많다...
        - 세상에 나오는 모든 것을 알겠다는 태도를 가지지 말 것
        - 불가능할 뿐만 아니라 비효율적이며 세상에 그렇게 가치 있는 것들이 많지 않다
        - 학습에 있어 중요한 부분은 정보가 얼마나 들어오느냐가 아니라 어떤 정보가 들어오느냐가 중요
    - 내가 커뮤니티에 기여하는 좋은 동료가 되기

#### 리액트 꽃길만 걷기
김민준(Velopert, 라프텔)
> 리액트를 사용하면서 겪었던 어려움들, 내가 갔었던 잘못된 방향들, 이렇게 했더니 참 편했더라..꿀팁들
- 컴포넌트 스타일링 할 때: styled-components 사용
    - 디렉토리 정리가 잘 됨
    - 만약 기존의 프로젝트에 리액트를 도입한다면 css modules 사용
    - css in js + css selector 잘 사용
    - UI Framework 사용을 지양할 것 (꼭 사용해야 한다면, tree shaking 지원 여부 확인하기)
- 이제 전부 함수형 컴포넌트로 작성하자! (클래스형 컴포넌트 쓸 일 없음)
- 단순한 글로번 상태 관리를 context API, hooks가 있는데 redux/mobx를 써야 하나?
    - 미들웨어, 리덕스 개발자 도구, 몇몇 유틸 함수들을 쓰고 싶으면 redux를 사용
    - mobX 재밌는 라이브러리니까 1~2달 뒤 다큐먼트를
- 리덕스를 사
    - 어떤 상태를 리덕스로 관리해야 할까
        - 상태를 다른 컴포넌트
