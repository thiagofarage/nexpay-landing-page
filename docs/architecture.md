# Arquitetura atual

Dois projetos independentes no mesmo workspace, com package.json e dependências próprios. JavaScript, sem monorepo.

## Front-end

- src/main.jsx inicializa React e o único BrowserRouter.
- src/App.jsx define /, /login e /dashboard.
- src/pages/Login.jsx envia as credenciais e apresenta carregamento e erros, preservando o layout existente.
- src/services/api.js concentra fetch e erros; auth.js contém login, sessão e logout.
- src/components/ProtectedRoute verifica GET /me antes de renderizar o Dashboard.
- Dashboard exibe o usuário e suas contas reais. Expiração de sessão leva ao Login; falhas de rede não são tratadas como senha incorreta.
- DashboardFrame continua sendo a demonstração estática da Home.

## Backend

- src/server.js inicia a API; src/app.js monta o Express e permite testes independentes.
- src/config.js valida o segredo JWT; src/db.js compartilha o Pool.
- src/routes/auth.routes.js implementa /login, /me e /logout.
- src/middleware/auth.js verifica o JWT e a existência do usuário.
- accounts.routes.js e transactions.routes.js filtram pelo usuário autenticado.
- database contém esquema e seed opcionais; tests contém testes HTTP; scripts contém ferramentas locais.

## Comunicação

O navegador chama /api. O proxy do Vite encaminha para localhost:3000 e remove /api. Vite e preview usam localhost:5173. CLIENT_ORIGIN na API deve corresponder exatamente a essa origem para aceitar POST.

O JWT fica em cookie HttpOnly, com SameSite=Strict e validade de uma hora. Não há token em localStorage. Em produção, o cookie usa Secure e a aplicação exige HTTPS, além de proxy na mesma origem.

## Limites

Logout remove o cookie, sem revogar cópias do token antes da expiração. Não há refresh token. Cadastro, recuperação de senha, Remember me e POST /transactions continuam pendentes. Usuários com hashes antigos incompatíveis não são migrados automaticamente.
