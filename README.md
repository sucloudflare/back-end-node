<h1>📝 Projeto: API de Tarefas com Node.js, SQLite e JWT</h1>

  <p>Uma API RESTful completa com autenticação, usando:</p>
  <ul>
    <li>Node.js e Express</li>
    <li>SQLite com Knex.js</li>
    <li>Autenticação JWT</li>
    <li>Validação com Joi</li>
    <li>Senhas criptografadas com bcryptjs</li>
  </ul>

  <h2>🧱 Etapa 1 – Estrutura de Pastas e Arquivos</h2>
  <pre><code>src/
├── <span class="folder">controllers/</span>       → Lógica principal das requisições
│   ├── user.controller.js       → Login, cadastro e listagem de usuários
│   └── task.controller.js       → CRUD de tarefas
│
├── <span class="folder">routes/</span>           → Rotas da aplicação
│   ├── user.routes.js           → /register, /login
│   └── task.routes.js           → /tasks (requer JWT)
│
├── <span class="folder">middlewares/</span>      → Protege ou trata requisições
│   └── auth.js                  → Verifica token JWT
│
├── <span class="folder">database/</span>         → Configuração do banco
│   ├── connection.js            → Conecta com SQLite
│   └── migrations/              → Criação de tabelas
│       ├── create_users.js
│       └── create_tasks.js
│
├── <span class="folder">validators/</span>       → Validação dos dados
│   └── user.validator.js        → Valida nome, email e senha
│
└── index.js                     → Inicializa o servidor Express
</code></pre>

  <h2>💻 Etapa 2 – Comandos Usados</h2>

  <h3>🔧 Inicialização do Projeto</h3>
  <pre><code>npm init -y</code></pre>
  <p>Cria o <code>package.json</code> com as configurações básicas.</p>

  <h3>📦 Instalação de Dependências</h3>
  <pre><code>npm install express knex sqlite3 bcryptjs jsonwebtoken joi dotenv</code></pre>

  <h3>📦 Dependência de Desenvolvimento</h3>
  <pre><code>npm install nodemon --save-dev</code></pre>

  <h3>🛠️ Banco de Dados com Knex</h3>
  <pre><code>npx knex init</code></pre>
  <pre><code>npx knex migrate:make create_users
npx knex migrate:make create_tasks</code></pre>
  <pre><code>npx knex migrate:latest</code></pre>

  <h2>🚀 Etapa 3 – Tecnologias Usadas</h2>

  <table>
    <thead>
      <tr>
        <th>Tecnologia</th>
        <th>Função</th>
        <th>Usada em</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Express</td><td>Servidor HTTP</td><td>index.js, routes/</td></tr>
      <tr><td>Knex</td><td>Comunicação com o banco</td><td>database/, controllers/</td></tr>
      <tr><td>SQLite</td><td>Banco de dados</td><td>connection.js</td></tr>
      <tr><td>JWT</td><td>Autenticação por token</td><td>auth.js, user.controller.js</td></tr>
      <tr><td>bcryptjs</td><td>Criptografar senha</td><td>user.controller.js</td></tr>
      <tr><td>Joi</td><td>Validação</td><td>user.validator.js</td></tr>
      <tr><td>dotenv</td><td>Variáveis de ambiente</td><td>index.js, auth.js</td></tr>
      <tr><td>Nodemon</td><td>Reinício automático</td><td>Script dev</td></tr>
    </tbody>
  </table>

  <h2>🔗 Rotas da API</h2>

  <h3>👤 Usuário</h3>
  <table>
    <thead>
      <tr>
        <th>Método</th><th>Rota</th><th>Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>POST</td><td>/register</td><td>Cadastrar usuário</td></tr>
      <tr><td>POST</td><td>/login</td><td>Login e geração de token</td></tr>
    </tbody>
  </table>

  <h3>✅ Tarefas (Requer token)</h3>
  <table>
    <thead>
      <tr>
        <th>Método</th><th>Rota</th><th>Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>POST</td><td>/tasks</td><td>Criar nova tarefa</td></tr>
      <tr><td>GET</td><td>/tasks</td><td>Listar tarefas</td></tr>
      <tr><td>PUT</td><td>/tasks/:id</td><td>Atualizar tarefa</td></tr>
      <tr><td>DELETE</td><td>/tasks/:id</td><td>Deletar tarefa</td></tr>
    </tbody>
  </table>

  <h2>📦 Instalação e Uso</h2>
  <ol>
    <li><strong>Clonar o projeto:</strong><br>
      <pre><code>git clone https://github.com/sucloudflare/back-end-node.git
cd back-end-node</code></pre>
    </li>
    <li><strong>Instalar dependências:</strong><br>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Criar arquivo .env:</strong><br>
      <pre><code>JWT_SECRET=sua_chave_secreta_aqui</code></pre>
    </li>
    <li><strong>Criar banco e tabelas:</strong><br>
      <pre><code>npx knex migrate:latest</code></pre>
    </li>
    <li><strong>Rodar servidor:</strong><br>
      <pre><code>npx nodemon index.js</code></pre>
    </li>
  </ol>

  <h2>💡 Dica para testar</h2>
  <p>Use Insomnia ou Postman e siga esse fluxo:</p>
  <ol>
    <li>POST <code>/register</code> – Crie um usuário</li>
    <li>POST <code>/login</code> – Receba o token</li>
    <li>Use o token no header: <code>Authorization: Bearer {token}</code></li>
    <li>Acesse as rotas de tarefas</li>
  </ol>

  <h2>📜 Licença</h2>
  <p>Esse projeto é de uso livre para fins de estudo, personalização e melhorias.</p>
