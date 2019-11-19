# Microservice Docker 

## Frontend Angular
```
docker build -f angular-app/Dockerfile.frontend
```

## Backend 1 (Node Js)
```
docker build -f server/Dockerfile.backend
```

## Backend 2 (Python)
```
docker build -f server2/Dockerfile.backend
```

## Backend 3 (Java - Spring Boot)
```
docker build -f server3/Dockerfile.backend
```

## Backend 3 (DoNet - Web Service)
```
docker build -f server4/Dockerfile.backend
```


## Database 1 (Mongodb)
```
docker build -f database/Dockerfile.mongodb
```
## Mongo db data import 
```
$ docker exec -it <container id> sh
$ mongoimport --db testdb --jsonArray --file ./artists.json
```

## Mysql data import
```
$ docker exec -it <container id> sh
$ mysql -u root -p 
enter password as root1234
% INSERT INTO friends (id, name, contact_no, email, created_at) VALUES
(1, 'Alexandra Mathew', '97734343', 'a@a.com', '2016-04-10 23:50:40'),
(2, 'Alex Chia', '97734343', 'a@a.com', '2016-04-10 23:50:40'),
(3, 'Sivakumar', '97734343', 'a@a.com', '2016-04-10 23:50:40'),
(4, 'Lim Beng', '97734343', 'a@a.com', '2016-04-10 23:50:40'),
(5, 'Ahmad Binte Alliyah', '97734343', 'a@a.com', '2016-04-10 23:50:50'),
(6, 'Alexandra Mathew', '97734343', 'a@a.com', '2016-04-10 23:50:40'),
(7, 'Alex Chia', '97734343', 'a@a.com', '2016-04-10 23:50:40'),
(8, 'Sivakumar', '97734343', 'a@a.com', '2016-04-10 23:50:40'),
(9, 'Lim Beng', '97734343', 'a@a.com', '2016-04-10 23:50:40'),
(10, 'Ahmad Binte Alliyah', '97734343', 'a@a.com', '2016-04-10 23:50:50');

```
## Database 2 (MySQL)
```
docker build -f database/Dockerfile.mysql
```

### Docker compose all services
```
docker-compose up -d  --build
```
