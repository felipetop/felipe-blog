---
slug: database/forma-normal-exemplo-pratico
title: Forma Normal, exemplo prático
authors: [felipe]
tags: [hello, docusaurus]
---

# 2. Conceitos de Banco de Dados e Forma Normal

Nesta seção, vamos trabalhar com um exemplo de normalização de banco de dados da Primeira Forma Normal (1NF) para a Terceira Forma Normal (3NF).

## Primeira Forma Normal (1NF)

Vamos começar com uma tabela de pedidos de uma loja que vende produtos. A tabela está na Primeira Forma Normal (1NF), pois cada coluna contém apenas valores atômicos e cada valor de uma coluna é do mesmo tipo.

**Em termos simplificados, a 1NF é quando "todas as tabelas estão juntas".**

| OrderID | Customer | Product  | Quantity | Price |
|---------|----------|----------|----------|-------|
| 1       | John     | Apples   | 5        | 1.00  |
| 2       | John     | Bananas  | 2        | 0.50  |
| 3       | Mary     | Apples   | 1        | 1.00  |
| 4       | Mary     | Oranges  | 3        | 0.80  |

## Segunda Forma Normal (2NF)

Para normalizar a tabela para a Segunda Forma Normal (2NF), precisamos garantir que não haja nenhuma dependência parcial; todos os atributos não-chave devem depender completamente da chave primária. No caso da nossa tabela, o preço dos produtos não depende do OrderID, mas sim do Produto. Portanto, vamos dividir a tabela em duas: uma para pedidos e outra para produtos.

**Em termos simplificados, a 2NF é quando "as tabelas são divididas de acordo com cada contexto".**

**Tabela Orders:**

| OrderID | Customer | ProductID | Quantity |
|---------|----------|-----------|----------|
| 1       | John     | 1         | 5        |
| 2       | John     | 2         | 2        |
| 3       | Mary     | 1         | 1        |
| 4       | Mary     | 3         | 3        |

**Tabela Products:**

| ProductID | Product | Price |
|-----------|---------|-------|
| 1         | Apples  | 1.00  |
| 2         | Bananas | 0.50  |
| 3         | Oranges | 0.80  |

## Terceira Forma Normal (3NF)

Para normalizar a tabela para a Terceira Forma Normal (3NF), precisamos remover as dependências transitivas; todos os atributos não-chave devem depender apenas da chave primária. No nosso caso, o nome do cliente depende do CustomerID, que depende do OrderID. Isso é uma dependência transitiva. Portanto, vamos dividir a tabela de pedidos novamente, desta vez separando os clientes dos pedidos.

**Tabela Orders:**

| OrderID | CustomerID | ProductID | Quantity |
|---------|------------|-----------|----------|
| 1       | 1          | 1         | 5        |
| 2       | 1          | 2         | 2        |
| 3       | 2          | 1         | 1        |
| 4       | 2          | 3         | 3        |

**Tabela Customers:**

| CustomerID | Customer |
|------------|----------|
| 1          | John     |
| 2          | Mary     |

**Tabela Products:**

| ProductID | Product | Price |
|-----------|---------|-------|
| 1         | Apples  | 1.00  |
| 2         | Bananas | 0.50  |
| 3         | Oranges | 0.80  |

Agora, todas as tabelas estão na Terceira Forma Normal (3NF). Em cada tabela, cada coluna não-chave depende apenas da chave primária da tabela. As tabelas "Orders", "Customers" e "Products" não têm dependências transitivas nem dependências parciais, cumprindo assim as regras da 3NF.