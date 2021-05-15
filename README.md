
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