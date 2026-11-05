# Aula 5 — cadastro, estado e validação no navegador

## Escopo

A tela usa a identidade clara da Home, com logo, cartão conceitual, verde e terracota. O arquivo criado pelo usuário em src/components/Cadastro/Cadastro.jsx foi mantido no lugar e registrado na rota /cadastro. Nesta etapa, nenhuma conta é criada e nenhum dado é enviado ou salvo. O botão apenas verifica os dados.

## Arquivo não é rota

A pasta Cadastro organiza o código. O endereço /cadastro existe porque App.jsx importa o componente e registra uma Route com esse path. Um componente pode representar uma tela mesmo estando em components; não precisamos mover arquivos para fazê-lo funcionar.

## Um objeto de estado

form guarda name, email, password e confirmation. Cada input recebe value do estado e onChange para atualizá-lo. Esse é um formulário controlado: o React mantém o valor exibido e acompanha cada alteração.

handleChange lê name e value do input. A expressão [name] escolhe qual propriedade atualizar; o spread ...previous preserva as demais. Criamos um novo objeto em vez de alterar diretamente o objeto de estado.

## O envio

event.preventDefault impede o recarregamento padrão. O formulário usa noValidate para que as mensagens visuais sejam apresentadas pelo nosso código. Os atributos type, required e autocomplete ainda descrevem os campos.

handleSubmit prepara nextErrors, verifica os valores e atualiza errors. Se houver erro, o primeiro campo inválido recebe foco. Se não houver, a tela confirma apenas que a validação passou, nunca que uma conta foi criada.

## Senhas

A senha tem no mínimo oito caracteres nesta proposta e no máximo 72 bytes UTF-8, compatível com a limitação do bcrypt usado na API. O tamanho em bytes pode diferir do número de caracteres. A confirmação é comparada exatamente, sem remover espaços da senha.

Mostrar senhas alterna o atributo type entre password e text nos dois campos. aria-pressed informa o estado do botão e aria-controls identifica os campos controlados. O conteúdo fica somente na memória do componente, sem console.log ou localStorage.

## Responsividade e navegação

No desktop, uma grade mostra contexto à esquerda e formulário à direita. No celular, o CSS prioriza o formulário. Os links entre Login e Cadastro usam React Router, sem recarregar a aplicação inteira.

## Exercício

1. Localize a Route /cadastro em App.jsx.
2. Digite um nome e observe o campo: value e onChange trabalham juntos.
3. Localize ...previous e explique por que ele preserva email e senha quando name é alterado.
4. Teste confirmação diferente da senha e observe a mensagem e o foco.

## Próxima etapa

Criar POST /register, repetir a validação no backend, tratar email duplicado e salvar um hash bcrypt. Só depois conectaremos o botão de criação à API e apresentaremos sucesso real.
