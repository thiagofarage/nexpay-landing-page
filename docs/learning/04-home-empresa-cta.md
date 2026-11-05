# Aula 4 — fechar uma página com propósito e ação

## A entrega

Empresa conta a origem da ideia e os princípios da NexPay. FinalCTA oferece acesso à plataforma. O menu contém Produtos, Soluções e Empresa; a prévia da plataforma continua acessível pelos links internos e pelo Footer.

## Uma responsabilidade por componente

Company apresenta contexto e propósito. FinalCTA apresenta a próxima ação. Home apenas importa e posiciona os componentes. Isso mantém trechos pequenos e permite editar o texto de Empresa sem mexer no Login ou na lógica de autenticação.

## Conteúdo estático não precisa de estado

Os princípios usam um array e map, como os produtos. Não há useState porque essa seção não muda por uma interação. Arrays descrevem os dados; o JSX descreve como apresentá-los.

## Ordem dos componentes

A sequência final é Hero, Produtos, Soluções, prévia da plataforma, Empresa, chamada final e Footer. Empresa aparece dentro de main; o Footer vem depois de main. Dentro das seções, h2 identifica o assunto e h3 nomeia os princípios.

## Âncoras e rotas

Empresa usa href="#empresa", conectado ao id="empresa" da seção. A chamada final usa Link to="/login" para mudar de tela. Não criamos uma rota para cada seção da Home.

## Reutilização de aparência

A chamada final usa a classe primary-button já existente. Uma regra específica para closing-cta aplica o verde nesse contexto, sem alterar o botão terracota do Hero. O Logo também é reutilizado em vez de copiar caminhos SVG.

## Exercício

1. No Home.jsx, encontre Company e FinalCTA e observe sua posição.
2. No Navbar, encontre #empresa e localize o destino em Company.jsx.
3. Explique por que FinalCTA usa Link para o Login, mas uma âncora para Produtos.
4. Altere temporariamente a descrição de um princípio e observe que a estrutura visual permanece igual. Depois restaure.

## Próxima prioridade

Facilitar a demonstração para alguém que ainda não tem usuário cadastrado. A chamada final atual leva ao Login; esta aula não criou cadastro ou acesso demonstrativo.
