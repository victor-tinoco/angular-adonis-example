![cabeçalho](https://trello-attachments.s3.amazonaws.com/5adf33d3a0a47862994f305a/5b6c2e42aee37c37fc599e83/cb4c22b0f74716e63d8589e913cc6e98/cabecalho-ovpdh.jpg)

# Plataforma Colaborativa de Violência Institucional (PCVI)
Este repositório é destinado ao projeto da Plataforma Colaborativa de Violência Institucional (PCVI) desenvolvido pelo Observatório da Violência Policial e Direitos Humanos (OVP-DH), linha de pesquisa do Centro de Estudos de História da América Latina (CEHAL PUC-SP).

## Começando

### Qual o objetivo dessa aplicação?
Contribuir como ferramenta colaborativa para o mapeamento e análise da violência institucional e policial no Brasil
Possibilitar a união de vítimas com redes de suporte jurídico, psicossocial e de serviço social

### O que encontrarei neste repositório?
Neste repositório se encontra a versão server-side da aplicação PCVI, a parte back-end onde tem toda a segurança, autenticação e ponte para alimentação da base de dados.

## Features
- Login e cadastro de um novo usuário
- Processo de recuperação de senha a partir de token

(lista será alimentada conforme desenvolvimento do projeto)

## Construído com
- NodeJS com o framework Adonis v4.1

## Passo-a-passo presente na documentação:
1. Instalação do *Visual Studio Code*, *Insomnia* e *git*
2. Instalação do *NodeJS* e *npm*
3. Instalação do *Adonis CLI*
4. Instalando suas dependências com *NPM*
5. Configurando variáveis de ambiente e PostgreSQL
6. Executando as migrations
7. Rodando a aplicação

## Testando a aplicação

Abaixo teremos um passo-a-passo com o caminho necessário para atender aos requisitos da aplicação e testá-la. Contém alguns links bacanas para alguns artigos que me auxiliaram bastante no desenvolvimento e com certeza também somarão à você.


### Passo 1 - Instalação do *Visual Studio Code*, *Insomnia* e *git*

Para fazer o download do *Visual Studio Code* (software para construção/edição de códigos e gerenciamento de projetos) clique [aqui](https://code.visualstudio.com/). Para fazer o download do *Insomnia* (software que simular um computador - utilizaremos para testar a plataforma diretos à API) clique [aqui](https://insomnia.rest/download/). Para fazer o download do *Git* (software que ajuda no controle de versão do projeto: baixar e fazer upload de arquivos de projetos no GitHub) clique [aqui](https://git-scm.com/).


### Passo 2 - Instalação do *NodeJS* e *npm*

Para utilizarmos nosso framework precisamos instalar o *NodeJS* e o *npm* (gerenciador de pacotes). Eles nos permitem instalar todas as dependências e o *CLI* do *Angular*. Então, caso não os possua instalados, segue [aqui](https://dicasdejavascript.com.br/instalacao-do-nodejs-e-npm-no-windows-passo-a-passo/) um step-by-step que o guiará para tal passo inicial. Importante: instale a versão estável do NodeJS (no momento da construção desta documentação a versão que utilizamos é a 12.16.3[aqui](https://nodejs.org/en/download/))

### Passo 3 - Instalação do *Adonis CLI*
Agora vamos para a instalação do *CLI* em si que vai nos permitir criar aplicações, **executar o servidor local com a nossa aplicação**, criar componentes, módulos, serviços, etc. Para instalar usando o npm, abra o prompt de comandos (cmd ou powershell no windows) e execute o seguinte comando:

```
npm install -g @adonisjs/cli
```

O parâmetro ``-g`` faz com que tal pacote seja instalado globalmente no seu sistema operacional.

Após o *npm* baixar todas as dependências e instalar o *Adonis CLI*, você já está pronto para usá-lo através do comando ``adonis``.

### Passo 4 - Instalando as dependências do projeto com *NPM*

Toda aplicação feita com *npm* possui um arquivo que contem as dependências utilizadas. Por muitas vezes essas dependências possuem suas próprias dependências e se fossemos versionar isso junto com os arquivos do nosso projeto nosso repositório ficaria muito grande, o que impossibilitaria nosso trabalho junto ao *git*.

Para este passo vamos utilizar o *git*. Em primeiro lugar, crie uma pasta de trabalho para o projeto no diretório ``C:\Users\seu_usuario\Documents`` e copie o endereço deste repositório (clique no botão verde de download). Agora, vamos clonar a pasta deste projeto para seu computador e, para isso, acesse a pasta de trabalho, aperte com o botão direito e selecione ``Git Bash Here`` (o que abrirá uma tela preta de comando). Dentro do Git Bash digite ``git clone`` e cole o link do endereço do repositório - ``git clone https://github.com/joaoleopoldoesilva/pcvi-api.git``.

Com o diretório do projeto clonado em seu computador e ainda dentro do git bash, caminhe para a pasta do repositório com o comando ``cd pcvi-api`` (o comando cd permite vc caminhar dentre pastas) e, nesta mesma tela, execute o comando:

```
npm install
```

E assim você fará o download de todas as dependências que o projeto necessita para rodar.

### Passo 5 - Configurando variáveis de ambiente e PostgreSQL

Sabemos então que essa aplicação fará uma ponte entre o *front-end* e o banco de dados, aplicando regras de negócios, dentre outras funcionalidades. Sabendo disso, precisamos ter o PostgreSQL instalado (vai [aqui](https://www.bostongis.com/PrinterFriendly.aspx?content_name=postgis_tut01) um artigo que te ajudará com sua instalação caso não tenha instalado; sei que está em inglês, mas sua instalação se baseia em "next, next" demandando atenção somente na tela que instala as extensões para que seja marcada a opção do PostGIS que nossa estrutura necessita).

Tendo o PostgreSQL instalado em sua máquina precisamos criar um banco de dados para que nossa aplicação possa subir a estrutura de dados.

Agora, na pasta do nosso projeto, temos um arquivo ``.env``, nele estão armazenadas as variáveis de ambiente. Dentre as muitas varíaveis que estão nele vou citar abaixo as principais e mais importantes para nós.

- PORT => Porta onde será exposta a aplicação quando rodarmos. Podemos deixar na default, que deixei como 3333.
- DB_HOST => Domínio onde está nossa base de dados, nesse caso, se tratando de um cenário inicial, ele ainda não está hospedado em algum lugar, ou seja, também não precisamos mexer nesse, deixamos o dafault que remete ao *localhost*.
- DB_PORT => Porta na qual está exposta nosso banco de dados criado nos passos acima. A porta padrão em que o PostgreSQL exibe é a 5432, se o seu está em alguma outra por algum motivo altere essa variável. 
- DB_USER => Usuário que tenha acesso ao banco criado.
- DB_PASSWORD => Senha do usuário citado na variável DB_USER.
- DB_DATABASE => Nome do banco de dados criado.

> Aqui também temos umas variáveis que devemos setar posteriormente referentes ao envio de e-mail (utilizado no envio do token, no e-mail do usuário, que permite a criação de nova senha).


### Passo 6 - Executando as migrations

As migrations são a forma que o Adonis sobe a estrutura do banco de dados, ao executá-las ele cria todas as tabelas da aplicação e seus relacionamentos com base em comandos feitos em JavaScript. Ok, mas o que eu ganho com elas em relação a um script de criação normal SQL?

Pois bem, além de facilitar testes unitários, dentre outros quesitos importantes no desenvolvimento, posso dizer que seu maior benefício seria poder subir esse banco em qualquer plataforma de banco de dados relacional, seja ela Postgre, como MySQL, SQLServer, etc. Isso deixa um leque bastante aberto e dá uma base boa para expansão mais adiante. E pensa comigo, sempre que desenvolvemos um software devemos escolher as melhores tecnologias com base na expansão, e não no cenário atual.

> Beleza, mas como funcionam as migrations? 

As migrations são arquivos, como se fossem queryes SQL, que são escritos em JavaScript. Quando você roda elas o Adonis transpila e roda os comandos internamente: do código escrito para um comando SQL no tipo de banco configurado no arquivo ``config/database.js``. 

Para rodar as migrations execute: 

``adonis migrations:run``

ou, para desfazer uma última migration

``adonis migration:rollback``

### Passo 7 - Rodando a aplicação

Por fim: vamos rodar a aplicação e ver toda essa magia em vigor.

Aqui é bem simples, o citado anteriormente comando ``adonis`` nos permitirá interagir com a *Angular CLI*. [Aqui](https://www.youtube.com/watch?v=aysgHRmzG3w) temos um ótimo vídeo que vai te guiar para os primeiros passos caso tenha interesse pelo framework.

Novamente, na raiz da pasta onde se encontra o projeto em angular, de forma simples vamos rodar os comandos:

```
adonis serve --dev
```

Irá abrir sua aplicação na porta default (*http://localhost:3333*) e a cada vez que alterar e salvar um arquivo desse servidor ele refletirá nessa porta automaticamente.

### Concluído!

Agora já pode ver a aplicação rodando, e desfrutar de suas funcionalidades com a aplicação *front-end* ou um software de testes de *API* como o *Insomnia* ou *Postman* (em breve deixaremos ela hospedada em algum ambiente teste ou no servidor).

## Versionamento
Usamos o Git para controles de versão. 

## Autores
- **Vera Lucia Vieira** - Coordenação
- **João Leopoldo e Silva** - Pesquisa e Desenvolvimento
- **Matheus Preis** - Pesquisa e Desenvolvimento
- **Caio Cardoso** - Pesquisa e Desenvolvimento
- **Victor Martins Tinoco** - Desenvolvimento

## Licença
Este projeto é privado, portanto é de licensa privada e só pode ser reutilizado com o consentimento legal do grupo.

## Parcerias
- Fundação São Paulo e PUC-SP
- Fundação Lauro Campos e Marielle Franco
- Centro de Direitos Humanos e Educação Popular de Campo Limpo
- Escritório Modelo “Dom Paulo Evaristo Arns”
