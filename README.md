# 3-tier-curd-app


```bash
docker network create crud
```
```bash
docker run --rm -dit --name debug --network crud siva9666/debug-utility:v1
```

```bash
docker run --rm -itd --name mysql \
  -e MYSQL_ROOT_PASSWORD=CrudApp@1 \
  -e MYSQL_USER=crud \
  -e MYSQL_PASSWORD=CrudApp@1 \
  -e MYSQL_DATABASE=crud_app \
  --network crud \
  mysql:v1
```

```bash
docker run --rm -itd --name backend \
  -e DB_HOST=mysql \
  -e DB_USER=crud \
  -e DB_PASSWORD=CrudApp@1 \
  -e DB_NAME=crud_app \
  -p 8080:8080 \
  --network crud \
  backend:v1
```

```bash
docker run --rm -itd --name frontend -p 80:80 --network crud frontend:v1
```

```bash
docker run --rm --itd --name react -p 3000:80 --network crud react:v1
```