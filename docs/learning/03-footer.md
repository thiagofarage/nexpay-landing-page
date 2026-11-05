# Aula 3 — um rodapé que funciona

## Responsabilidade

Footer encerra a página e oferece caminhos úteis para quem chegou ao fim. O componente permanece separado da Home, sem misturar regras de autenticação ou consultas ao banco.

## HTML semântico

- footer identifica a região de rodapé.
- nav identifica cada grupo de navegação. aria-label diferencia os grupos para quem usa leitor de tela.
- h2 nomeia cada grupo, mesmo que o CSS use um texto pequeno.
- ul e li representam listas de links. Não precisamos criar botões para navegar.

Semântica descreve o papel do conteúdo. Aparência fica a cargo do CSS.

## Âncoras específicas

O link #produto-cartoes aponta para o bloco do cartão em Produtos, não para uma página nova. No Products.jsx, cada article agora recebe id={"produto-" + product.id}. Quando product.id vale "cartoes", o HTML recebe id="produto-cartoes".

key e id têm funções diferentes: key ajuda o React a identificar o item; id identifica um elemento no documento e permite a navegação por âncora.

O destino #inicio fica no contêiner da Home. Voltar ao topo é um link normal, sem useState ou evento de clique.

## Rotas

Link to="/login" navega para o Login usando React Router. Link to="/dashboard" leva ao painel; a proteção de sessão existente continua responsável por verificar o acesso. Mostrar o link não concede acesso aos dados.

## Grade e responsividade

No desktop, a marca e os três grupos ocupam quatro colunas. Até 900 px, a marca ocupa uma linha inteira e os grupos ficam abaixo. Até 540 px, os grupos usam duas colunas. A propriedade grid-column: 1 / -1 faz a marca atravessar todas as colunas disponíveis.

O ano vem de new Date().getFullYear(), uma expressão JavaScript colocada no JSX. Não é necessário editar manualmente o copyright todo ano.

## Exercício

1. Abra Footer.jsx e encontre o link #produto-despesas.
2. No Products.jsx, encontre a expressão que gera o id desse bloco.
3. Explique por que Meu painel usa Link e Voltar ao topo usa a.
4. Reduza a largura do navegador e observe a grade sem alterar o JavaScript.

Empresa será incluída quando sua seção existir. Não adicionamos destinos de ajuda, redes sociais ou páginas legais sem conteúdo real.
