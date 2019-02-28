---
path: "/frontend/4"
date: '2018-02-27'
title: "Frontend Focus 04 - HTTP & Networks"
description: 
image: ''
tags: ['웹개발', '프론트엔드']
---
> what HTTP, CORS, and Web Sockets are

[reference](https://frontendmasters.com/books/front-end-handbook/2018/learning/http-networks.html)

[HTTP document](https://tools.ietf.org/html/rfc2616)

[great explanation on how HTTP works](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

[nitty gritty on HTTP](https://code.tutsplus.com/series/http-succinctly--net-33683)

### HTTP (Hypertext Transfer Protocol)
- an application protocol for distributed, collaborative, hypermedia information systems.
- it was designed for communication between web browsers and web servers; it is the foundation of data communication for the World Wide Web

#### how HTTP works
- it is a __request/response protocol__ (a.k.a __client-server protocol__)
    - client opens a TCP connecton and sends a __request__ to the server:
        - request method: GET, POST, etc.
        - path of the resource to fetch: URL stripped of the protocol (http://), domain, or the TCP port (80)
        - version of HTTP protocol
        - optional headers that convey additional information to servers
        - optional body content
    - the server sends a __response__ to the client:
        - version of HTTP protocol
        - status code and status message (ex. 200 OK)
        - HTTP headers
        - optional body content of fetched resource (MIME message: specifies content type so that browser knows how to interpret it accordingly)
    - [example of request and response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#HTTP_flow)
- HTTP communication can be accomplished via a single direct connection or also through intermediaries such as the proxy, gateway, and tunnel
- HTTP communication usually takes place over __TCP/IP connections__ in order to guarantee a reliable connection

#### HTTP request methods
- GET: _fetch_ an existing resource specified at the URL
- POST: _create_ a new resource (POST requests usually carry a payload that specifies the data for the new resource)
- PUT: _update_ an existing resource (the payload may contain updated data for the resource)
- DELETE: _delete_ an exisiting resource
- some lesser used verbs: HEAD, TRACE, OPTIONS

#### Status Code
- 1xx: informational messages
- 2xx: successful (ex. 201 OK)
- 3xx: redirection
- 4xx: client error (ex. 403 Forbidden, 404 Not Found)
- 5xx: server error (ex. 500 Internal Server Error)

### CORS (Cross-origin resource sharing)
- a mechanism that allows restricted resources (ex. fonts) on a web page to be requested from another domain outside the domain from which resource originated

### Web Sockets
- a protocol providing full-duplex communication channels over a single TCP connection.