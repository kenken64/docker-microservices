# Docker 3 tier Architecture with ECS

## Frontend Angular
```
docker build -f angular-app/Dockerfile.frontend
```

## Backend 1
```
docker build -f server/Dockerfile.backend
```

## Backend 2
```
docker build -f server2/Dockerfile.backend
```

## Backend 3
```
docker build -f server3/Dockerfile.backend
```

## Database 1
```
docker build -f database/Dockerfile.db1
```

## Database 2
```
docker build -f database/Dockerfile.db2
```
