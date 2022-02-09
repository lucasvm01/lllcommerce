# lllcommerce
App de e-commerce para aula de Node

Para criar banco de dados com docker:

1 - Utilizar:
  - docker run --name name -e MYSQL_ROOT_PASSWORD=root -p 49153:3306 -d mysql

2 - Abrir o CLI do container:
  - mysql -p
  - root
  - create database lllcommerce;
  - use lllcommerce;

3 - Rodar migrations
  - yarn typeorm migration:run
