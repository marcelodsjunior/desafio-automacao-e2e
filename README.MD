# DESAFIO-AUTOMACAO-E2E
Projeto de automação de testes E2E contendo o desafio proposto pela Autoforce.

## Arquitetura e Orientações

### Arquitetura base e configuração

```
📦 DESAFIO-AUTOMACAO-E2E
├──	📜 .gitignore
├──	📜 .prettierrc.json
├──	📜 cypress.config.js
├──	📜 package.json
├──	📜 README.md
├──	📂 cypress

**DESAFIO-AUTOMACAO-E2E:** Repositório raiz do projeto.

**.gitignore:** Arquivo utilizado para ignorar arquivos e pastas no versionamento de código.

**.prettierrc.json:** Arquivo de configuração do processo de lint da documentação dos custom commands.

**cypress.config.js:** Arquivo de configurações globais do Cypress.

**package.json:** Arquivo de configuração do projeto.

**README.md:** Arquivo de orientações base do projeto.

**cypress:** Diretório de recursos e arquivos de teste do Cypress.

### Arquitetura de testes
Todos os arquivos e recursos necessários para a composição dos testes ficam dentro da pasta cypress.

├── 📂 cypress
|	├──	📂 downloads
|	|	└──	📜 example.txt
|	├──	📂 e2e
|	|	├──	📂 debug
|	|	|	├──	📜 debug.cy.js
|	|	|	├──	📜 fail.cy.js
|	|	|	└──	📜 test.cy.js
|	|	└──	📂 example
|	|		└──	📜 example.cy.js
|	├──	📂 fixtures
|	|	└──	📜 example.json
|	└──	📂 support
|		├──	📂 example
|		|	├──	📜 actions.js
|		|	├──	📜 elements.js
|		|	└──	📜 services.js
|		├──	📂 helpers
|		|	└──	📜 commands.js
|		├──	📜 e2e.js
|		└──	📜 index.d.ts

**downloads:** Diretório utilizado pelo Cypress para salvar arquivos em operações de download do teste.

**e2e:** Diretório responsável por manter as rotinas de testes implementadas.

**fixtures:** Diretório de recursos utilizado pelo Cypress para suporte à execução dos testes.
    - Normalmente arquivos JSON que armazenam dados utilizados durante os testes (massas, modelos de payload, entre outros).

**support:** Diretório de suporte aos testes utilizado para manter configurações, comandos customizados, mapeamento de elementos, entre outros.

- **example:** Diretório de arquivos de apoio para testes realizados no contexto "example".
	- Segue o padrão page objects + page actions.
	- **actions.js:** Arquivo de ações customizadas de interface para o contexto "example".
	- **elements.js:** Arquivo para mapeamento dos elementos do contexto "example".
	- **services.js:** Arquivo de ações customizadas de serviço para o contexto "example".
- **helpers:** Diretório de arquivos de apoio para testes em geral.

**e2e.js:** Arquivo utilizado pelo Cypress como controlador de configurações de recursos da ferramenta.

**index.d.ts:** Arquivo responsável por manter a documentação dos comandos customizados.

### Recursos recomendados

As recomendações para utilização do projeto são os pacotes **yarn** e **standard + snazzy**.

### Recursos do projeto

#### faker-br

O faker-br é uma lib para geração de dados fictícios com a funcionalidade de geração de documentos brasileiros(CPF, CNPJ)

#### standard + snazzy
Conforme informado anteriormente, o [standard](https://www.npmjs.com/package/standard) atua em conjunto com o [snazzy](https://www.npmjs.com/package/snazzy) para executar o processo de lint nos arquivos de código do projeto.

#### prettier
O preetier é o módulo responsável por efetuar o processo de lint do arquivo que mantem a documentação dos comandos desenvolvidos dentro do projeto. A configuração das regras da ferramenta segue a mesma convenção do StandardJS.

### Executando o projeto

Para realizarmos a execução local devemos primeiramente realizar o clone do projeto;
Após finalizar o clone, seguimos com a etapa de instalação de dependências do projeto(yarn install);

Abrir os testes em modo de visualização utilizando "yarn open:test" ou em modo headless
utilizando yarn run:test
