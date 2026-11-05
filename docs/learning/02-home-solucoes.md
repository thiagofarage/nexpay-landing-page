# Aula 2 — composição e variações de estilo

## A entrega

Produtos recebe um tema escuro. Soluções é uma nova seção clara, com dois cenários: pequenas empresas e equipes em crescimento. A prévia da plataforma fica escura para manter a alternância. Hero, cartão e autenticação permanecem funcionais.

## Produtos versus Soluções

Produtos descreve ferramentas. Soluções descreve problemas e situações em que elas fariam sentido. As duas seções se complementam, sem repetir a mesma lista.

## Componente e composição

Solutions é uma função JavaScript que retorna JSX. Home importa essa função e usa <Solutions /> entre <Products /> e a prévia da plataforma. A ordem dos componentes define a sequência da página.

## Classes base e modificadoras

Products usa className="products-section products-section--dark". products-section define a estrutura geral. products-section--dark identifica a variação de aparência. Isso permite mudar as cores sem copiar o JSX inteiro. O navegador combina as regras CSS que correspondem às classes e resolve conflitos pela cascata.

## A ordem visual no desktop e no celular

solution-row organiza texto e exemplo em duas colunas. solution-row--reverse posiciona o texto à direita no desktop. Em telas pequenas, o CSS volta para uma coluna e respeita a ordem do documento: texto primeiro, exemplo depois. Não usamos JavaScript para detectar o tamanho da tela.

## Reutilizar sem abstrair demais

As despesas e os documentos usam arrays e map porque são listas de itens semelhantes. Os dois cenários permanecem no mesmo componente por enquanto; não criamos um componente genérico com muitas props antes de precisar dele.

## Seu exercício

1. Encontre <Products /> e <Solutions /> no Home.jsx.
2. Localize products-section--dark no componente Products e no CSS.
3. Remova temporariamente apenas essa classe no JSX, observe o tema claro e depois restaure.
4. Explique por que o conteúdo não muda quando essa classe é removida.

## Limites da demonstração

Os valores da visão de despesas são fictícios. Documentos, comprovantes e pendências são uma experiência planejada. Esses exemplos são conteúdo de apresentação; não foram criados endpoints ou uploads nesta aula.
