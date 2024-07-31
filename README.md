# Lifters Shop - Guia de Execução

Bem-vindo ao projeto Lifters-Shop! Este guia irá levá-lo através dos passos necessários para configurar e iniciar o projeto.

Lifters-Shop é um projeto desenvolvido simulando um pequeno e-commerce.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:
- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

## Passo a Passo para Execução do Projeto

### 1. Clone o repositório

Para clonar o repositório usando HTTPS, execute o seguinte comando no terminal:

```bash
git clone https://github.com/matheuspsb/lifters-shop.git
```

Se você preferir usar SSH, execute este comando:

```bash
git clone git@github.com:matheuspsb/lifters-shop.git
```

### 2. Instalar Dependências

Após clonar o repositório em sua máquina local. No terminal, navegue até o diretório do projeto e execute o comando abaixo para instalar todas as dependências necessárias:

```bash
yarn install
```

### 4. Iniciar o Projeto

Com todas as dependências instaladas, agora você pode iniciar o projeto com o Yarn. Execute o comando abaixo no terminal:

```bash
yarn run dev
```

## Comentários sobre o Projeto

- ### Utilização do TypeScript:
  Decidi utilizar TypeScript para proporcionar uma experiência de desenvolvimento mais robusta e segura. A tipagem estática oferecida pelo TypeScript ajuda a detectar erros durante o desenvolvimento, melhorar a autocompletação e documentação do código, e garantir que a aplicação se mantenha consistente e livre de erros comuns. Essa escolha contribui para uma base de código mais confiável e de fácil manutenção.

- ### Utilização do react-router-dom:
  Escolhi o react-router-dom para gerenciar o roteamento da aplicação devido à sua flexibilidade e praticidade. Ele facilita a implementação de navegação entre diferentes páginas e componentes, permitindo a criação de uma experiência de usuário fluida e intuitiva. Com o react-router-dom, conseguimos gerenciar rotas, parâmetros e navegação programática de forma eficiente, melhorando a organização e escalabilidade da aplicação.

- ### Utilização do React Query:
  Para otimizar a gestão de estado e a manipulação de dados assíncronos, escolhi utilizar o React Query. Essa biblioteca facilita o gerenciamento de caches, o refetching de dados e a sincronização com o servidor, resultando em um desenvolvimento mais eficiente e uma aplicação mais responsiva.

- ### Passagem de Dados via Navegação:
  Optei por passar os dados via navegação em vez de fazer uma chamada adicional ao servidor para buscar produtos pelo ID. Dado que não existe um endpoint para obter o produto pelo ID, essa abordagem simplifica o fluxo de dados e melhora o desempenho da aplicação, evitando requisições desnecessárias.

-###: Uso do useContext:
  O useContext foi utilizado para compartilhar estados e funções globais entre componentes sem a necessidade de passar props manualmente por vários níveis da árvore de componentes. Isso simplifica a estrutura do código e melhora a organização e manutenção da aplicação.
