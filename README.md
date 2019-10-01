# Docker 3 tier Architecture with ECS/Kubernetes

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

## Database 1 (Mongodb)
```
docker build -f database/Dockerfile.db1
```

## Database 2 (MySQL)
```
docker build -f database/Dockerfile.db2
```
