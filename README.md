# lllcommerce
App de e-commerce para aula de Node

Para criar banco de dados com docker:

1 - Utilizar:
  - docker run --name name -e MYSQL_ROOT_PASSWORD=root -p 49153:3306 -d mysql

2 - Abrir o CLI:
  - mysql -p
  - root
  - create database lllcommerce;
  - use lllcommerce;

3 - Rodar migrations
  - yarn typeorm migration:run

Deve-se criar as migrations na ordem:

  1 - Clientes + Categorias
  2 - Pedidos + Produtos
  3 - Pedido_Produtos
