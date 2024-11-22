# 3-tier-curd-app


```bash
docker network create crud
```


```bash
docker run --rm -itd --name mysql \
 -e MYSQL_ROOT_PASSWORD=CrudApp@1 \
 -e MYSQL_USER=crud \
 -e MYSQL_PASSWORD=CrudApp@1 \
 -e MYSQL_DATABASE=crud_app \
 -p 3306:3306 \
 --network crud mysql:v1
```

```bash
docker run --rm -itd --name backend \
 -e DB_HOST=mysql \
 -e DB_USER=crud \
 -e DB_PASSWORD=CrudApp@1 \
 -e DB_NAME=crud_app \
 -p 8080:8080 \ 
 --network crud backend:v1
```