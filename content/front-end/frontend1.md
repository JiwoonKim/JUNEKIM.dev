---
path: "/frontend/1"
date: '2018-02-18'
title: "프론트엔드 01 - how the internet and web work"
description: 
image: ''
tags: ['웹개발', '프론트엔드']
---
> how the internet and web work

[reference](https://frontendmasters.com/books/front-end-handbook/2018/learning/internet.html)

### Internet
- a global system of interconnected computer networks that use the Internet protocol suite (TCP/IP) to link billions of devices worldwide.
    - in the form of a distributed packet-switched network so that even if some part is destroyed, it still can work by using a different route
    - no one is in control of it, or everyone is in control of it
        - it is constitued of independently operated networks
- __a network of networks__ that consists of millions of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies.
- it carries a wide range of information resources and services:
    - inter-linked hypertext documents
    - applications of World Wide Web (WWW)
    - electronic mail
    - telphony
    - peer-to-peer networks for file-sharing
- it is the backbone of the Web; the technical infrastructure that makes the Web possible

#### how the internet looks like
- the internet is not a cloud, it is a _wire_!
- __network__
    - for computers to communicate, they must be linked, either physically (with a Ethernet cable) or wirelessly (WiFi or Bluetooth systems)
    - since connecting every computer directly to every other computer makes connections complicated, __routers__ are used instead as center system to act as a traffic signaler; it makes sure the message is sent to th right destination computer
    - however, since a single router cannot scale that far for billions of computers, multiple routers (a computer like any other) are used and connected to each other 
    - computers are connected to routers, _routers to routers_ so that connections can be scaled infinitely; __a network is built__!
- _Internet_ (network of networks)
    - connect network of computers to another network of computers by utilizing the already existing telephone infrastructure using a __modem__, which turns the information from out network into information manageable by the telephone infrastructure and vice-versa
    - to

#### how the internet works
- as the Internet is a global network of computers, each computer connected to the Internet must have a unique address; following the Internet Protocol, each computer has an IP address (ex. IP4 or IP6)
- ISP ? LAN ? DHCP ?

- cf) client and server relationships
    - the client is a computer indirectly connected to the internet via a ISP (Internet Service Provider)
    - the server is a computer directly connected to the internet

### Web (World Wide Web)
- 

#### how the web works
- 
- client and server relationship
    1. when web address is typed into browser, client computer asks DNS server for the real address (the IP address)
    2. receiving the IP address, the browser then sends an HTTP request message to the server at the address for a copy of the website
        - the message is written in HTTP (the language defined to use between clients and servers)
        - the message is sent by accross the internet connection following the TCP/IP rules (go to address in form of IP and ensure data packages are successfully received bt TCP rules)
    3. server responds to client's request by sending a message with a status code (ex. 200 OK)
        - if the request is approved (200 OK), the server sends the website's component files (code files of HTML, CSS, JS + assets for images, music, video, documents, pdfs) in a series of data packages
    4. finally, the client receives the component files and the browser assembles them into a complete website and displays it