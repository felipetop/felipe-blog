---
slug: database/banco-de-dados-e-forma-normal
title: Banco de Dados e Forma Normal
authors: [felipe]
tags: [tecnologia, database]
---

# 2. Conceitos de Banco de Dados e Forma Normal

Nesta seção, iremos revisar os conceitos fundamentais de bancos de dados, bem como as formas normais que são cruciais para um design eficiente de banco de dados.

## A. Conceitos Básicos de Banco de Dados

Bancos de dados são sistemas de organização de dados que permitem a recuperação, inserção, atualização e exclusão eficientes de dados. Eles são fundamentais para muitas aplicações modernas, incluindo sistemas de gerenciamento de informações, comércio eletrônico e muito mais.

### Modelos de Dados

Os modelos de dados definem a estrutura e o formato dos dados em um banco de dados. Eles incluem o modelo relacional, que organiza os dados em tabelas relacionadas, e os modelos de dados NoSQL, que podem incluir modelos de documentos, de chave-valor, de coluna larga e de grafos.

### SQL e NoSQL

SQL (Structured Query Language) é uma linguagem de programação usada para interagir com bancos de dados relacionais. NoSQL se refere a bancos de dados que não usam a estrutura de tabela tradicional encontrada em bancos de dados relacionais.

## B. Formas Normais e Princípios de Design de Banco de Dados

Quem meche com banco de daos precisa dominar a fazer consultas complexas, porém muitas vezes as formas normais são passadas despercebidas, um conceito básico e altamente importante.
As formas normais são regras que guiam o design de bancos de dados para minimizar a duplicação de dados e evitar certos tipos de problemas de atualização.

### Primeira Forma Normal (1NF)

Um banco de dados está na primeira forma normal se cada coluna de cada tabela contém apenas valores atômicos (indivisíveis) e cada valor de uma coluna é do mesmo tipo.

### Segunda Forma Normal (2NF)

Um banco de dados está na segunda forma normal se estiver na primeira forma normal e cada coluna não-chave depende de toda a chave primária.

### Terceira Forma Normal (3NF)

Um banco de dados está na terceira forma normal se estiver na segunda forma normal e não houver dependências transitivas de colunas não-chave.

## C. Praticando a Criação e Otimização de Consultas SQL

Praticar a criação e otimização de consultas SQL é crucial para qualquer desenvolvedor que trabalhe com bancos de dados. Existem muitos recursos online, como o HackerRank, que oferecem problemas de prática de SQL que você pode usar para aperfeiçoar suas habilidades.