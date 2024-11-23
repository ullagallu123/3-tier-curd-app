# 3-tier-curd-app


```bash
docker network create crud
```
```bash
docker run --rm -d --name debug --network crud siva9666/debug-utility:v1
```

```bash
docker run --rm -d --name mysql \
  -e MYSQL_ROOT_PASSWORD=CrudApp@1 \
  -e MYSQL_USER=crud \
  -e MYSQL_PASSWORD=CrudApp@1 \
  -e MYSQL_DATABASE=crud_app \
  --network crud \
  mysql:v1
```

```bash
docker run --rm -d --name backend \
  -e DB_HOST=mysql \
  -e DB_USER=crud \
  -e DB_PASSWORD=CrudApp@1 \
  -e DB_NAME=crud_app \
  -p 8080:8080 \
  --network crud \
  backend:v1
```

```bash
docker run --rm -d --name frontend -p 80:80 --network crud frontend:v1
```

```bash
docker run --rm -d --name react -p 80:3000 --network crud react:v1
```