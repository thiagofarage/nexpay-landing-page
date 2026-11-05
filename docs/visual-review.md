# Revisão visual — 22/10/2026

## Aplicado

- Símbolo de três peças reconstruído geometricamente do print da versão Black; inversão branca em fundos escuros.
- Assinatura tipográfica em Space Grotesk Bold, aproximando a referência. Não é o lettering vetorial original.
- SVGs para Figma com símbolos editáveis, assinaturas em curvas e alternativas com texto editável.
- Login sem card externo, com composição compacta e geometria ampliada do símbolo no fundo.
- Campos, foco, carregamento, erro e mostrar/ocultar senha; idioma português e ações incompletas removidas.
- Fonte servida localmente, favicon próprio e metadados atualizados.
- Home responsiva com uma única navegação, links funcionais e prévia identificada como ilustrativa.
- Marca e tipografia compartilhadas no Dashboard autenticado; endpoints e consultas preservados.

## Validação

- Lint e build do Vite.
- SVGs renderizados e inspecionados.
- Login e Home inspecionados por capturas no Edge headless com perfil temporário.
- Larguras 320, 390, 768 e 1440 px sem overflow horizontal.
- Foco por teclado, alternância de senha, estado de carregamento e erro curto sem deslocamento do botão.
- Login, chegada ao Dashboard e logout testados com respostas de API simuladas, sem alterar o banco.
- Acesso sem sessão redireciona ao Login na API local.

As capturas estão no diretório design-review da pasta que contém o arquivo NexPay.code-workspace. A prévia embutida não abriu, então foi usado um navegador isolado de testes.

## Referências preservadas

Os arquivos anteriores estão em archive/before-visual-refresh. Eles são referências históricas e não participam do build.
