# 📦 Desafio Técnico: Utilitário de QR Code e Senhas para E-commerce

Este desafio tem como objetivo testar sua habilidade com Node.js, manipulação de dependências, variáveis de ambiente e estruturação de projetos em camadas. Você trabalhará sobre um projeto já iniciado que oferece duas funcionalidades principais: geração de QR Codes e criação de senhas seguras.

---

## Objetivo

Implementar e testar um sistema interativo que:

1. Solicita ao usuário a escolha entre gerar um QR Code ou uma senha.
2. Executa a funcionalidade escolhida com base em configurações definidas no `.env`.

---

## Funcionalidades

### Geração de Senhas

- A senha deve ser gerada com base nas variáveis de ambiente, em que é utilizado a funcionalidade nativa atual (desde a versão 20) do Node para a leitura delas no JavaScript:
  - `UPPERCASE_LETTERS`
  - `LOWERCASE_LETTERS`
  - `NUMBERS`
  - `SPECIAL_CHARACTERS`
  - `PASSWORD_LENGTH`
- A senha gerada deve ser exibida no terminal com destaque em verde.

### Geração de QR Code

- O usuário deve informar:
  - Um link para gerar o QR Code.
  - O tipo de QR Code:
    - `1` → Normal
    - `2` → Terminal
- O QR Code deve ser exibido conforme o tipo selecionado.

---

## Entrada

A entrada será feita via terminal, utilizando o pacote `prompt`. O usuário deve escolher entre:

```
Escolha a ferramenta (1 - QRCODE ou (2 - PASSWORD)
```

---

## Saída Esperada

### Exemplo 1: Senha

```bash
password
A8f$kL2@xQ
```

### Exemplo 2: QR Code

```bash
Digite o link para gerar o QR CODE
https://meusite.com/produto/123

Escolha entre o tipo de QRcode (1- NORMAL ou (2- TERMINAL)
2

# QR Code exibido no terminal
```

---

## Arquivos Relevantes

| Arquivo                        | Função                                                                 |
|-------------------------------|------------------------------------------------------------------------|
| `index.js`                    | Ponto de entrada do projeto                                           |
| `prompt-schema-main.js`       | Define o menu principal de escolha                                    |
| `qr-code/create.js`           | Lógica para gerar QR Code                                             |
| `password/create.js`          | Lógica para gerar senha                                               |
| `permittedCharacters.js`      | Define os caracteres permitidos com base no `.env`                    |
| `.env`                        | Define as configurações de geração de senha                           |

---

## Dependências

- `chalk` – Estilização de texto no terminal
- `prompt` – Entrada interativa via terminal
- `qrcode-terminal` – Geração de QR Code no terminal

---

## Como Executar

```bash
# Instale as dependências
npm install

# Configure o arquivo .env com as variáveis desejadas
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=10

# Inicie o projeto
npm start
```

---

## Desafio Extra

Implemente uma terceira opção no menu principal:

```
3 - Gerar QR Code + Senha
```

Essa opção deve gerar ambos os recursos em sequência, com base nas configurações atuais.

## Quer ir além?

- Adicione validações para o link do QR Code.
- Permita salvar a senha gerada em um arquivo `.txt`.
- Crie testes automatizados para as funções de geração. 
