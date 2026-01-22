📋 Gestão de Funcionários - AJURCC

Sistema de gerenciamento de colaboradores desenvolvido com Django e JavaScript (Vanilla). O projeto permite realizar o cadastro, listagem, edição e exclusão de funcionários de forma dinâmica, utilizando chamadas assíncronas (AJAX/Fetch API).
🚀 Funcionalidades

    Listagem Dinâmica: Exibição de todos os funcionários cadastrados no banco de dados.

    Cadastro via AJAX: Adição de novos colaboradores sem necessidade de recarregar a página.

    Edição In-place: Edição dos dados diretamente na tabela.

    Exclusão: Remoção de registros com atualização instantânea da interface.

    Interface Responsiva: Design limpo e verde, focado na usabilidade.

🛠️ Tecnologias Utilizadas

    Backend: Django 5.x (Python)

    Frontend: HTML5, CSS3, JavaScript (ES6+)

    Banco de Dados: SQLite (Padrão de desenvolvimento)

    Comunicação: Fetch API (JSON)

🔧 Configuração e Instalação
1. Clonar o repositório
Bash

git clone https://github.com/seu-usuario/ajurcc-gestao.git
cd ajurcc-gestao

2. Criar ambiente virtual (Opcional, mas recomendado)
Bash

python -m venv venv
# No Windows:
venv\Scripts\activate
# No Linux/Mac:
source venv/bin/activate

3. Instalar dependências
Bash

pip install django

4. Migrar o Banco de Dados
Bash

python manage.py makemigrations
python manage.py migrate

5. Executar o servidor
Bash

python manage.py runserver

Acesse: http://127.0.0.1:8000/
🔒 Observações sobre Segurança (CSRF)

Durante o desenvolvimento, observou-se que alguns navegadores (como o Mozilla Firefox) possuem políticas rigorosas de segurança para Cookies e Tokens CSRF em requisições Fetch.

Para fins de teste e garantir o funcionamento da comunicação entre o JavaScript e o Django, a função de adição de funcionários foi configurada com o decorador @csrf_exempt.

    Aviso: Em ambiente de produção, recomenda-se a reativação da proteção CSRF utilizando o envio do token via X-CSRFToken no cabeçalho da requisição.

📂 Estrutura de Pastas
Plaintext

/
├── core/
│   ├── static/js/scripts.js   # Lógica Frontend (AJAX)
│   ├── templates/             # Arquivos HTML (Django Templates)
│   ├── models.py              # Definição da tabela Funcionário
│   └── views.py               # Lógica de negócio (CRUD)
├── db.sqlite3                 # Banco de dados local
└── manage.py                  # CLI do Django

✒️ Autor : NATANAEL DA SILVA GONCALVES
