
# Run this project (develop)
Use nodemon to debug and use hot-reload. Just run this command:
`nodemon`

# Migration com Sequelize

Para pré-visualizar o script de migração sem alterar qualquer coisa:

`npx sequelize-mig migration:make --preview`

Para gerar a migração

`npx sequelize-mig migration:make -n <nome-da-migration>`

Para rodar a migração (aplicar no servidor)

`npx sequelize-cli db:migrate`

# Publish on dokku server

Para publicar no endereço criado http://dev-sglegis.200.systems, basta dar push no remote `dokku`

`git push dokku main:master`

## Primeira vez

Caso nunca tenha feito publish, precisa configurar um novo remote no git:

`git remote add dokku@199.241.139.66:dev-sglegis`


Depois é só dar push:

`git push dokku main:master`

