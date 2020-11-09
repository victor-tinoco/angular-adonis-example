![cabeçalho](https://trello-attachments.s3.amazonaws.com/5adf33d3a0a47862994f305a/5b6c2e42aee37c37fc599e83/cb4c22b0f74716e63d8589e913cc6e98/cabecalho-ovpdh.jpg)

# Plataforma Colaborativa de Violência Institucional (PCVI)
Este repositório é destinado ao projeto da Plataforma Colaborativa de Violência Institucional (PCVI) desenvolvido pelo Observatório da Violência Policial e Direitos Humanos (OVP-DH), linha de pesquisa do Centro de Estudos de História da América Latina (CEHAL PUC-SP).

## Começando

### Qual o objetivo dessa aplicação?
Contribuir como ferramenta colaborativa para o mapeamento e análise da violência institucional e policial no Brasil
Possibilitar a união de vítimas com redes de suporte jurídico, psicossocial e de serviço social

### O que encontrarei neste repositório?
Neste repositório se encontra a versão web da aplicação PCVI, a parte visual do sistema.

## Features
- Login e cadastro de um novo usuário
- Processo de recuperação de senha a partir de token

(vai sendo alimentado ao decorrer do desenvolvimento)

## Construído com
- JavaScript com o framework Angular v9.1.0
- Figma para desenvolvimento do layout

## Passo-a-passo presente na documentação:
1. Instalação do *NodeJS* e *npm*
2. Instalação do *Angular CLI*
3. Instalando suas dependências com *NPM*
4. Rodando a aplicação

## Testando a aplicação

Abaixo teremos um passo-a-passo com o caminho necessário para atender aos requisitos da aplicação e testá-la. Contém alguns links bacanas para alguns artigos que me auxiliaram bastante no desenvolvimento e com certeza também somarão à você. 

Partiremos do pressuposto que ao seguir os passos abaixo você já esteja com esse repositório git clonado.

### Passo 1 - Instalação do *NodeJS* e *npm*

Primeiramente, por conta do próprio framework utilizado, é obrigatório se ter instalado o *NodeJS* e o *npm* (gerenciador de pacotes). Eles vão nos permitir instalar todas as dependências e o *CLI* do *Angular*. Então, caso não os possua instalados, segue [aqui](https://dicasdejavascript.com.br/instalacao-do-nodejs-e-npm-no-windows-passo-a-passo/) um step-by-step que o guiará para tal passo inicial.

### Passo 2 - Instalação do *Angular CLI*
Pós ter atendido nosso primeiro requisito agora vamos para a instalação do *CLI* em si que vai nos permitir criar aplicações, **executar o servidor local com a nossa aplicação**, criar componentes, módulos, serviços, etc. Para instalar usando o npm, abra o prompt de comandos (cmd ou powershell no windows) e execute o seguinte comando:

```
npm install -g @angular/cli
```

O parâmetro ``-g`` faz com que tal pacote seja instalado globalmente no seu sistema operacional.

Após o *npm* baixar todas as dependências e instalar o *Angular CLI*, você já está pronto para usá-lo através do comando ``ng``.

### Passo 3 - Instalando suas dependências com *NPM*

Toda aplicação feita com *npm* possui um arquivo que contem as dependências utilizadas. Por muitas vezes essas dependências possuem suas próprias dependências e se fossemos versionar isso junto com os arquivos do nosso projeto nosso repositório ficaria com um massivo tamanho e seria quase impossível trabalhar de forma prática como propõe o *git*. Então aqui executaremos o comando:

```
npm install
```

E assim ele irá baixar todas as dependências que o projeto necessita para rodar.

### Passo 4 - Rodando a aplicação

Por fim: vamos rodar a aplicação e ver toda essa magia em vigor.

Aqui é bem simples, o citado anteriormente comando ``ng`` nos permitirá interagir com a *Angular CLI*. [Aqui](https://www.devmedia.com.br/angular-cli-como-criar-e-executar-um-projeto-angular/38246) temos um artigo show que vai te guiar para os primeiros passos caso tenha interesse pelo framework.

Novamente, na raiz da pasta onde se encontra o projeto em angular, de forma simples vamos rodar os comandos:

```
ng serve --open
```

ou, abreviando:

```
ng s -o
```

Irá abrir sua aplicação na porta default (*http://localhost:4200*). O parâmetro ``--open`` ou abreviado `-o` faz com que além de subir sua aplicação numa porta ele acesse essa porta numa guia do seu navegador padrão.

### Concluído!

Agora já pode ver a aplicação rodando, e desfrutar de suas funcionalidades, mas não se esqueça que esse é o passo-a-passo para somente subir o site, ou seja, não será possível fazer contato com o *back-end* e passar da tela de login sem subir a *api* localmente também (em breve deixaremos ela hospedada em algum ambiente teste ou no servidor).

> Mas, e, por quê mesmo sem consumir a **API** não conseguimos ver e navegar entre as telas?

Essa é uma ótima pergunta, e não conseguimos pois o sistema conta com implementações de segurança e autenticação para que nenhum usuário não autenticado consiga invadir ou acessar processos internos.

## Versionamento
Usamos o Git para controles de versão. 

## Autores
- **Vera Lucia Vieira** - Coordenação
- **João Leopoldo e Silva** - Pesquisa e Desenvolvimento
- **Rafael Logatti Motta** - Jurídico e Curadoria
- **Matheus Preis** - Pesquisa e Desenvolvimento
- **Caio Cardoso** - Pesquisa e Desenvolvimento)
- **Victor Martins Tinoco** - Desenvolvimento

## Licença
Este projeto é privado, portanto é de licensa privada e só pode ser reutilizado com o consentimento legal do grupo.

## Parcerias
- Fundação São Paulo e PUC-SP
- Fundação Lauro Campos e Marielle Franco
- Centro de Direitos Humanos e Educação Popular de Campo Limpo
- Escritório Modelo “Dom Paulo Evaristo Arns”

