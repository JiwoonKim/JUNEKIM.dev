공부한 내용을 정리하는 개발로그입니다.
=====

ReactJS와 GatsbyJS를 이용하여 만든 정적 웹 사이트 블로그.
![Tyra Gatsby starter](https://github.com/madelyneriksen/gatsby-starter-tyra)을 바탕으로 build.

## 블로그 커스터마이즈하기

- `gatsby-config.js`에서 사이트 설정 수정.
  (configuring data across the site, improving SEO, and increasing engagement on social media.)

## 블로그 포스트 추가하기

- 포스트는 마크업(Markup)을 사용하여 작성.
- `content/posts/`에 아래와 같이 파일을 만들어 사용.

```markdown
---

type: "post"
title: "제목"
author: "작성자"
category: "카테고리"
date: "2019-01-05"
slug: "/my-awesome-post"
postImage: "./img/myimage.jpg"
metaDescription: "내 첫 포스트!"

---

여기다 마크다운을 사용하여 포스트 작성하기! 
이미지는 다음과 같은 문법을 사용하여 링크를 걸기:

![Alt Text](./img/my-image.jpeg)
```

- 이미지는 `content/`에 이미지 추가하여 사용.

- Images for posts are stored in `content/posts/img/`. 
- Images in the frontmatter will be used as thumbnails for the articles, as well as in search results.
