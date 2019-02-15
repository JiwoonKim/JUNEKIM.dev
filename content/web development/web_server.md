---
path: "/webdevelopment/webserver"
date: '2018-02-15'
title: "웹 서버 구성"
description: 웹 서버의 구성 및 벡엔드의 역할에 대한 정리
image: ''
tags: ['웹개발', '백엔드', '서버']
---
> 웹 서버가 어떻게 구성이 되고, 웹 프레임워크와 어떠한 관계를 가지는 지, 그리고 백엔드란 무엇인지에 대한 정리.

### 웹 서버 (Web Server)
__Web server__ is a stack of software that works altogether to respond to web requests
- 웹 서버의 구성
    - operating system (os)
    - file system
    - possibly a database
    - a basic web server (program)
    - a language interpreter that handles more complex requests
    - a set of scrips that make the website more powerful (a.k.a __Framework__)
    - scripts written for this particular website that leverage the framework

### Serving or Hosting a web application
- how is an application served on the web (made accessible to all)?
- how is the process of serving (how CGI works and frameworks work on a web server)?

### [dynamic web page](https://en.wikipedia.org/wiki/Dynamic_web_page) 
- server-side dynamic web page: web page whose construction is controlled by an __application server__ (??) processing server-side scripts (??)
    - in server-side scripting, parameters determine how the assembly of every new web page proceeds
- A program running on a web server (server-side scripting) is used to generate the web content on various web pages, manage user sessions, and control workflow. Server responses may be determined by such conditions as data in a posted HTML form, parameters in the URL, the type of browser being used, the passage of time, or a database or server state. 
- Such web pages are often created with the help of server-side languages such as ASP, ColdFusion, Go, JavaScript, Perl, PHP, Ruby, Python, WebDNA and other languages, by a Support server that can run on the same hardware as the web server. These server-side languages often use the Common Gateway Interface (CGI) to produce dynamic web pages. Two notable exceptions are ASP.NET, and JSP, which reuse CGI concepts in their APIs but actually dispatch all web requests into a shared virtual machine
- Using server-side scripting to change the supplied page source between pages, adjusting the sequence or reload of the web pages or web content supplied to the browser. Server responses may be determined by such conditions as data in a posted HTML form, parameters in the URL, the type of browser being used, the passage of time, or a database or server state
- Using client-side scripting to change interface behaviors within a specific web page