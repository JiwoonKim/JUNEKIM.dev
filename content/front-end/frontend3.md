---
date: '2019-02-26'
title: "Frontend Focus 03 - DNS"
description: 
tags: ['웹개발', '프론트엔드']
---
> what is a domain name system
> - [references](https://frontendmasters.com/books/front-end-handbook/2018/learning/dns.html)
> - [explanation of how dns works](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name)
> - [how url works](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

### DNS (Domain Name System)
- __a hierarchical distributed naming system__ for computers, services, or any resource connected to the Internet or a private network
- it associates various information with domain names assigned to each of the participating entities.

#### Domain Name
- structure read _from right to left_ and can be separated by dots
- ex. developer.mozilla.org
    - __TLD (Top-level Domain)__: provides the most generic information; tells users the general purpose of the service behind the domain name
        - ex. .com, .org, .net, .us, .kr
    - __label__: what follow the TLD (located on the right sides of the TLD). A domain can have many labels
- domain name is a part of the url

#### Name Server (DNS server)
- a computer designated to __translate domain names into IP addresses__
- does most of the work in the DNS system
- since the total number of domain translations is too much for any one server, each server may redirect request to other names servers or delegate responsibility for a subset of subdomains they are responsible for

### how the DNS works
- the url typed into the browser must be translated to an IP address
    1. the browser checks if it has the IP address for the domain name in its __cache__
    2. if no there, the browser asks the OS to check if it has the IP address in its cache
    3. if both don't have it, the OS calls the __resolver server__ (usually the ISP) if it has the address in its cache
    4. if the resolver server doesn't have it, it calls the __root server__ and __asks for the address of the TLD (Top-level Domain) server__ (ex. .COM TLD server) and saves that address
    5. the TLD server __looks into the TLD registry to find the address for the authoritative name server for the domain name__
    6. finally, __the authoritative name server__ provides the IP address and the resolver server saves it