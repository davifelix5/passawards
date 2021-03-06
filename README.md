# Passawards

## O que é
- Essa aplicação nasceu de uma brincadeira entre colegas de classe. A ideia era fazer uma premiação ao final do ano para relembrar momentos marcantes
da turma ao longo dos anos que passaram juntos.

## Como funciona
- A ideia da aplicação é diversas categorias com diversos candidatos em cada uma. Qualquer usuário pode entrar no site e votar quantas vezes quiser 
em qualquer categoria, havendo apenas uma confirmação reCAPTCHA.

## Tecnologias utilizadas
- Para o back-end da aplicação foi usado Python e Django, com Django REST framework. As imagens e vídeos estão sendo armazenados em um S3 Bucket da AWS.
- Para o front-end da aplicação, foi utilizado Next.js, aproveitando as funcionalidades de ***server-side rendering*** e **otimização de imagens**, por exemplo. 
Também foi utilizado o **styled-components** para estilização.

## Funcionalidades backend
- [x] CRUD de categorias
- [x] Votos com verificação reCAPTCHA
- [x] Filtros de categorias
- [x] Armazenamento de imagens e vídeos com AWS
- [x] Autenticação com Basic Auth
- [x] Personalização da página de administração do Django

## Funcionalidades front-end
- [x] Paginação e filtro dinâmico de categorias por tipo e por texto
- [x] Votação com verificação reCAPTCHA
