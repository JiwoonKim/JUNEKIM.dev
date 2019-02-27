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

### HTTP (Hypertext Transfer Protocol)
- an application protocol for distributed, collaborative, hypermedia information systems.
- it is the foundation of data communication for the World Wide Web

#### how HTTP works
- it is a __request/response protocol__
    - client sends a request to the server - in the form of a request method, URL, protocol version, a MIME-like message containing request modifiers, client information, and possibly body content - over the connection with a server
    - the server responds with a status line, including the message's protocol version and status code, with a MIME-like message containing server information, entity metainformation, and possible entity-body content.
- HTTP communication can be accomplished via a single direct connection or also through intermediaries such as the proxy, gateway, and tunnel
- HTTP communication usually takes place over TCP/IP connections in order to guarantee a reliable connection

### CORS (Cross-origin resource sharing)
- a mechanism that allows restricted resources (ex. fonts) on a web page to be requested from another domain outside the domain from which resource originated

### Web Sockets
- a protocol providing full-duplex communication channels over a single TCP connection.