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
 --network crud mysql:v1
```
