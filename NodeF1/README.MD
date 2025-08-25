# 🏎️ Desafio Técnico: Classificador de Equipes de Fórmula 1

Este desafio tem como objetivo testar sua habilidade com Node.js, TypeScript e Fastify, utilizando uma base já configurada com o **Node Boilerplate - Blue Edition**.

<img src="./.github/assets/blue-saiyan-bg.png" alt="Logo" height="200">

## Descrição

Implementação de uma nova rota na API que classifique as equipes de Fórmula 1 com base em sua localização geográfica. A aplicação já possui uma estrutura funcional com uma lista de equipes disponível no arquivo `server.ts`.

---

## Objetivo

Criar a rota `GET /teams/classified` que:

- Agrupa as equipes por país de origem.
- Retorna os dados no seguinte formato:

```json
{
  "reino_unido": ["McLaren", "Mercedes", ...],
  "italia": ["Ferrari", "AlphaTauri", ...],
  "outros": ["Haas", ...]
}
```

---

## Dados de Entrada

A lista de equipes já está definida no array `teams` dentro do arquivo `server.ts`. Cada equipe possui os campos `id`, `name` e `base`.

---

## Saída Esperada

A resposta da rota deve ser um objeto JSON com os nomes das equipes agrupados por país:

```json
{
  "reino_unido": ["McLaren", "Mercedes", "Alpine", "Aston Martin", "Williams", "Uralkali Haas F1 Team"],
  "italia": ["Ferrari", "AlphaTauri", "Scuderia Toro Rosso"],
  "outros": ["Alfa Romeo Racing", "Haas"]
}
```

---

## Dicas de Implementação

- Utilize `.filter()` para separar as equipes por país.
- Use `.map()` para extrair apenas os nomes das equipes.
- Crie a nova rota diretamente no `server.ts`.

---

## Estrutura do Projeto

- `server.ts`: lógica do servidor e dados das equipes.
- `tsconfig.json`: configuração do TypeScript.
- `package.json`: scripts úteis para desenvolvimento.

---

## Scripts Disponíveis

```bash
# Compila os arquivos TypeScript
npm run dist

# Inicia o servidor em modo desenvolvimento
npm run start:dev

# Inicia com hot reload
npm run start:watch

# Compila e executa o projeto
npm run start:dist
```

---

## Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Fastify**
- **TSX**
- **TSUP**