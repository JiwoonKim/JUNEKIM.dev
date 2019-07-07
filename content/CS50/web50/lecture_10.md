---
date: '2019-06-25'
title: "Web50 lecture 10 - Scalability"
description: CS50 Web Programming with Javascript and Python lecture 10 정리
image: ''
tags: ['CS50', 'Web50', 'Scalability']
---
> Harvard's Web Programming with Python and Javascript lecture 10 정리

### Scalability
what considerations need to be taken into account when app gets popular and has to deal w/ multiple different ppl trying to access app and data at the same time

### Benchmarking
__figuring out just how much your server can actually handle__
- use __load test or stress test__ to figure out server's maximum capacity of how many users it can handle
- then, can start to think what to do in situation when that limit is exceeded

### Types of Scaling

#### Vertical Scaling
- __adding more processing capacity or power to existing server__ 
    - ex. add more memory to server
- limit: eventually hits limit where a single server can no longer scale up

#### Horizontal Scaling
- __increasing the number of servers__
- limit: 
    - which user goes to which server?
        - solved by using load balanacers
    - race conditions regarding database access
        -

### Load Balancing

#### Load Balanacing Methods
strategies of making decisions of which server to send user to
- __Random Choice__: randomly and evenly distribute users to servers
- __Round Robin__: circle amongst the servers
- __Fewest Connections__: send user to server w/ least load at the moment

#### Session-aware Load Balancing
make sure load balancer is aware of sessions and direct users
- __Sticky Sessions__
- __Sessions in Database__
- __Client-side Sessions__

### Autoscaling

### Scaling Databases

### Database Partitioning

### Database Replication

### Single-primary Replication

### Multi-primary Replication

### Caching

### Client-side Caching

### Server-side Caching