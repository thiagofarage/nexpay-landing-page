# Documentação Técnica - NexPay

## Identidade Visual:

A marca utiliza um símbolo geométrico minimalista em preto e branco. O ícone abstrato, formado por polígonos, sugere conexões e solidez,
ideal para o setor financeiro.

## Arquitetura de Pastas:

Optei por uma estrutura modular:

- `/pages`: Componentes de visualização completa (Home, Login, Dashboard).

- `/components`: Elementos reutilizáveis (Navbar, Button, LogiForm).

## Fluxo de Autentificação:

Implementamos um formulário de login com:

- Validação de Estado: Verificação de campos vazios antes do envio.

- Estilo: Baseado no system design da Lovable, com foco em legibilidade e constraste.

## Diário de Bordo:

- 21/05/2026 - Implantação do novo system design da NexPay no Figma.

- 13/05/2026 - Refatoração completa das rotas para suportar a nova landing page.

- 14/04/2026 - Definição da logo oficial e implementação da lógica "useState" para validação de formulários.
