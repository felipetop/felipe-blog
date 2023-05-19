---
slug: database/kanban-uma-visao-geral
title: Kanban - Uma Visão Geral
authors: [felipe]
tags: [tecnologia, agilidade]
---

"Kanban: Successful Evolutionary Change for Your Technology Business" de David J. Anderson é um livro seminal no mundo da gestão de projetos ágeis. Ele apresenta o sistema Kanban, adaptado das fábricas da Toyota para o mundo do desenvolvimento de software, focando em melhorar a eficiência e a eficácia do fluxo de trabalho.

## Principais métodos do Kanban

O método Kanban se baseia em três princípios básicos:

1. **Visualize o fluxo de trabalho:** Isso é normalmente feito através de um quadro Kanban, onde cada tarefa é representada por um cartão que se move de uma coluna para outra, representando diferentes estágios do fluxo de trabalho.
2. **Limite o trabalho em progresso (WIP):** Isso significa que você deve limitar o número de tarefas que estão em andamento em qualquer estágio do fluxo de trabalho. Limitar o WIP ajuda a evitar o excesso de tarefas e garante que o trabalho flua suavemente através do sistema.
3. **Gerencie o fluxo:** Isso envolve monitorar o movimento das tarefas através do quadro Kanban e fazer ajustes conforme necessário para melhorar a eficiência.

## Reuniões Standup

Em um sistema Kanban, as reuniões standup têm um formato diferente. Em vez de cada membro da equipe responder a três perguntas típicas ("O que foi feito ontem?", "O que você fará hoje?", "Você está bloqueado ou precisa de alguma ajuda?"), o foco muda para o fluxo de trabalho.

### O Fluxo de Trabalho

O facilitador da reunião, geralmente o gerente do projeto ou um gerente de linha, "anda pelo quadro" visualizando o status dos tickets. A convenção é olhar o trabalho de trás para frente - da direita para a esquerda, na direção "do puxar".

### Enfocando os Itens Bloqueados e Atrasados

Em uma reunião standup do Kanban, a ênfase é dada para itens que estão bloqueados ou atrasados devido a defeitos. Se um item parece estar parado e não se movimentou por alguns dias, questões podem ser levantadas sobre ele.

### Melhoria da Capacidade de Gerenciamento de Problemas

Este formato permite que a equipe aprimore a capacidade de gerenciamento de problemas da organização. A equipe discutirá brevemente quem está trabalhando no problema e quando ele será resolvido.

## Movendo-se para a frente, não para trás

A ideia de que as tarefas devem ser continuamente movidas para a frente no processo, ao invés de serem movidas para trás. Isto está alinhado com o princípio de que o trabalho deve sempre estar avançando em direção à conclusão, além disso cada coluna tem um limite de tarefa para Work In Progess, você voltar uma tarefa para trás pode ocasionar vários problemas, como a terefa não poder retroceder por causa que o número máximo de tarefas já foi atingido, fazendo a tarefa ficar presa na parte de teste.

Por exemplo, se uma tarefa estiver em teste e um bug for descoberto, é sugerido que, em vez de mover a tarefa de volta para a coluna de desenvolvimento, uma nova tarefa deve ser criada para lidar com a correção do bug. Isso ajuda a manter a visibilidade e a rastreabilidade, e também enfatiza a ideia de que o trabalho deve ser concluído antes de ser movido para a próxima etapa.

### Lidando com Atividades Desordenadas

Em situações de alta inovação e experimentação, as atividades relacionadas a um trabalho de valor para o cliente podem não seguir uma ordem específica. O Kanban não deve forçar a execução de atividades em uma ordem determinada, mas sim refletir a maneira real de como o trabalho é feito.

Existem algumas estratégias para lidar com múltiplas atividades desordenadas:

1. **Uma única coluna de atividades**: Semelhante à abordagem para lidar com atividades concorrentes, todas as atividades são mantidas em uma única coluna e não se acompanha explicitamente no quadro qual delas é finalizada.

2. **Modelando atividades como concorrentes**: Esta abordagem envolve mover tickets verticalmente para cima e para baixo nas colunas conforme são puxados para cada atividade específica. Os tickets podem ser modificados para ter uma caixa pequena para cada atividade. Quando uma atividade é finalizada, a caixa pode ser marcada para sinalizar visualmente que o item está pronto para ser puxado para outra atividade na mesma coluna.

Se todas as caixas são preenchidas, o item está pronto para ser puxado para a próxima coluna no quadro ou pode ser movido para a coluna "done".

Lembrando que é possível que a etapa de desenvolvimento e de testes fiquem na mesma coluna, porém isso aumenta o número de tasks que ficariam na mesma coluna para determinada atividade.

### Definição de Pronto

A definição de pronto é outro conceito importante em Kanban. Isso se refere ao conjunto de critérios que uma tarefa deve atender antes de poder ser considerada completa e movida para a próxima etapa do fluxo de trabalho. A definição de pronto ajuda a garantir que o trabalho esteja realmente concluído antes de ser avançado, minimizando a necessidade de retrabalho.

## Conclusão

"Kanban: Successful Evolutionary Change for Your Technology Business" fornece uma visão detalhada e prática de como implementar e usar o Kanban no desenvolvimento de software. Os princípios e práticas que Anderson descreve ajudam a criar um fluxo de trabalho mais eficiente e eficaz, minimizando o retrabalho e melhorando a qualidade do produto final.