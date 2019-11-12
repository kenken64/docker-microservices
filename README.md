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
## Mongo db import 
```
$ docker exec -it <container id> sh
$ mongoimport --db testdb --jsonArray --file ./artists.json
```

## Database 2 (MySQL)
```
docker build -f database/Dockerfile.mysql
```
