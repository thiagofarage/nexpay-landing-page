# Aula 1 — menu e Produtos

## O problema

A Home precisa explicar a proposta da NexPay e permitir que a pessoa encontre cada assunto pelo menu. Nesta etapa, existem apenas Produtos e A plataforma, ambos com destinos reais. Soluções, Preços e Empresa entram quando suas seções forem construídas.

## A composição

Home.jsx organiza a página: Navbar → Hero → Products → prévia da plataforma → Footer. Cada componente tem uma responsabilidade. O Hero apresenta a proposta; Products explica os três produtos.

## Âncoras HTML

No Navbar, href="#produtos" aponta para o elemento com id="produtos" em Products.jsx. O navegador faz a navegação dentro do documento. Nenhum estado React ou chamada ao backend é necessário. Um id deve ser único na página.

Já Link to="/login" usa o React Router para navegar para outra tela da aplicação. Uma âncora aponta para um lugar da página; uma rota aponta para uma tela.

## Dados e apresentação

O array products contém objetos com id, título, descrição, status, ícone e destino. products.map transforma cada objeto em um article. product.title, por exemplo, é o título do objeto atual. As chaves no JSX inserem expressões JavaScript no HTML descrito pelo React.

key={product.id} dá uma identidade estável para cada bloco. Essa identidade ajuda o React a comparar os itens entre renderizações; não substitui o atributo HTML id.

## Semântica e CSS

section agrupa um assunto, h2 identifica a seção e article representa cada produto. aria-labelledby="products-title" associa a seção ao título. O CSS Grid organiza três colunas no desktop e uma no celular. Essa mudança de layout não precisa de JavaScript.

## Disponibilidade

O cartão é um conceito visual; gestão de despesas está em desenvolvimento; fluxo de caixa tem prévia demonstrativa. As labels refletem isso. Contas e saldos autenticados já existem, mas não significam que emissão de cartão ou gestão completa estejam implementadas.

## Seu exercício

1. Localize Produtos no Navbar e o id correspondente no Products.
2. Troque temporariamente o título de um objeto do array e observe qual bloco muda.
3. Explique a diferença entre key={product.id} e id="produtos".

Depois restaure o título. Não é necessário alterar o backend nesta etapa.
