# projeto-integrador-1

Atividade Prática Supervisionada da disciplina Projeto Integrador 1 como parte da segunda avaliação

## Projeto

A atividade consiste em desenvolver uma aplicação que utilize pelo menos 3 funções do Firebase.

No meu projeto utilizei:
- Hosting
- Firestore
- Functions

## Funcionamento

A aplicação está hospedada pelo Firebase Hosting e tem um campo onde pode-se inserir um nome.

Ao digitar um nome e pressionar <kbd>ENTER</kbd> é enviada uma requisição para uma função do Firebase Functions.

Essa função valida o nome recebido da seguinte forma:
- Não pode ser um nome em branco
- Pode conter apenas letras (maiúsculas ou minúsculas)
- Pode haver espaçamento

Se o nome for válido então ela adiciona um novo usuário no banco de dados Firebase Firestore.

O front-end da aplicação é automaticamente atualizado quando um novo usuário é inserido, atualizado ou removido.

## Acesso

Como dito anteriormente, a aplicação está hospedada usando o Firebase Hosting, por tanto para acessá-la basta seguir um dos links disponibilizados:
- [projeto-integrador-1.firebaseapp.com](https://projeto-integrador-1.firebaseapp.com)
- [projeto-integrador-1.web.app](https://projeto-integrador-1.web.app) (a partir de 22/05/2019)
