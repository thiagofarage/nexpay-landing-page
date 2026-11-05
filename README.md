# NexPay — Front-end

Aplicação de gestão financeira para portfólio, com React, JavaScript, Vite, Tailwind CSS e React Router. Front-end e API permanecem em projetos independentes no mesmo workspace.

## Executar

Use Node.js 22.12 ou superior e npm. Neste diretório:

```powershell
npm ci
npm run dev
```

Abra http://localhost:5173. A porta é fixa para corresponder à origem autorizada pela API. Execute nexpay-api em outro terminal na porta 3000, seguindo o README do backend. Não há variáveis de ambiente obrigatórias no front-end.

O navegador usa /api, encaminhado pelo proxy do Vite para o backend. Login, sessão e logout dependem da API e do PostgreSQL em execução. Usuários existentes precisam de hash bcrypt válido. O seed opcional da API documenta uma conta fictícia para bancos novos; nenhum usuário é criado automaticamente pelo front-end.

```powershell
npm run lint
npm run build
npm run preview
```

Preview usa a mesma porta 5173: pare o servidor de desenvolvimento antes. Para publicação, configure HTTPS e o encaminhamento de /api para o backend no servidor de hospedagem; o build não inclui o servidor Vite.

## Rotas

- /: landing page e demonstração visual estática.
- /login: formulário integrado, carregamento e mensagens de erro.
- /dashboard: exige sessão e mostra o usuário autenticado e suas contas, com logout.

A sessão dura uma hora. O token fica em cookie HttpOnly, nunca em localStorage. Cadastro, recuperação de senha e Remember me continuam pendentes; Esses controles não são exibidos enquanto não estiverem implementados.

## Documentação

- [Arquitetura](docs/architecture.md)
- [Roadmap](docs/roadmap.md)
- [Marca](docs/brand-guide.md)
- [Referência visual](docs/design-system.md)
- [Rascunhos preservados](docs/archive/README.md)

A identidade visual usa o símbolo reconstruído da referência Black, com inversão branca em fundos escuros, tipografia Space Grotesk local e geometria própria no fundo. Login e Home são responsivos; o Dashboard mantém as contas reais da API. As versões anteriores foram preservadas em docs/archive/before-visual-refresh.

## Marca e revisão visual

- [SVGs importáveis no Figma](design/figma/README.md)
- [Decisões e validação visual](docs/visual-review.md)
