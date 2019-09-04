---
date: '2018-07-23'
title: "Web50 lecture 3 - SQL"
description: CS50 Web Programming with Javascript and Python lecture 3 정리
image: ''
tags: ['CS50', 'Web50', 'Python', 'SQL']
---
> Harvard's Web Programming with Python and Javascript lecture 3 정리

### Databases
- used to make it easier for web applications to store, use, and manipulate data

### SQL (Structured Query Language)
- language designed to interact w/ __relational databases__ 
- __used PostgreSQL__
    - need to start Postgres server to use
    - can be hosted locally on one's computer or hosted online (ex. heroku)
    - command lines: `psql {database}`, `psql {database url}`, `\d` (print database), `\df` (print tables)

#### Data Types
- `INTEGER`, `DECIMAL`, `SERIAL` (= automatically incrementing integer), `VARCHAR`, `TIMESTAMP`, `BOOLEAN`, `ENUM`
- constraints: `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, `DEFAULT`, `CHECK`

#### Basic Operations
- __create table__
```sql
CREATE TABLE flights (
    id SERIAL PRIMARY KEY,
    origin VARCHAR NOT NULL,
    destination VARCHAR NOT NULL,
    duration INTEGER NOT NULL
);
```
- __insert data__
```sql
INSERT INTO flights (origin, destination, duration)
    VALUES ('SEOUL', 'LONDON', 415);
```
- __update data__
```sql
UPDATE flights
    SET duration=430
    WHERE origin='SEOUL' AND destination='LONDON';
```
- __read data__
```sql
SELECT * FROM flights;
```
```sql
SELECT origin, destination FROM flights WHERE id=3;
```
```sql
SELECT * FROM flights WHERE origin='SEOUL' or duration>500;
```
    - __column selector functions__:
```sql
SELECT AVG(duraction) FROM flights WHERE origin='NEW YORK';
```
```sql
SELECT * FROM flights WHERE origin LIKE '%a%';
```
```sql
SELECT * FROM flights LIMIT 2;
```
```sql
SELECT * FROM flights ORDER BY duration ASC;
```
```sql
SELECT origin, COUNT(*) FROM flights GROUP BY origin HAVING COUNT(*)>1;
```
```sql
SELECT MAX(duration) FROM flights;
```
- __delete data__
```sql
DELETE FROM flights WHERE destination='TOKYO'
```

#### Relating Tables & Compount Queries
- tables inside a database can be related in some way (bcuz SQL = relational database)
- __Foreign Keys__: reference an id column of table B from a column in table A
    - in table A, the id value (corresponding to table B) is called foreign keys
```sql
CREATE TABLE passengers (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    flight_id INTEGER REFERENCES flights
);
```

### Security Concerns

### Python & SQL

### Incorporating SQL into Web Applictions (using Flask)