# Tasks

## Documentação dos Endpoints

```sh
http://localhost:8080/api/swagger-ui/index.html
```

> ## Dados
* title: `string`
* description: `string`
* dueDate: `Date`
* isCompleted?: `boolean`

> ## Fluxo ✅⛔️
1. ✅ Fazer construção da tela com a rota **/tarefas**
2. ✅ Fazer a listagem na requsição do tipo **GET** na rota **/tasks**
3. ✅ Construir formulário com os campos title, description e dueDate
4. ✅ Validar dados obrigatório title, description e dueDate
5. ✅ Fazer uma requisição do tipo **POST** na rota **/tasks** com os dados
6. ✅ Exibir toast error mensagem quando retornar algum erro da API
7. ✅  Deletar uma task na requisição do tipo **DELETE** na rota **/tasks/:id**
8. ⛔️ Marcar a task como concluída na requisição do tipo **PATCH** na rota **/tasks/:id/toggle-completed**
9. ⛔️ **DESAFIO** Alterar uma task na requisição do tipo **PUT** na rota **/tasks/:id**
10. ⛔️ **DESAFIO** Fazer  paginação das tasks no endpoint **GET**


