# Landing Page com formulario de inscrição

Um projeto simples de uma landing page com um formulário de inscrição

## 🛠️ Tecnologias Utilizadas

- PHP ^8.0
- Laravel 9
- Composer
- MySQL / PostgreSQL (ou outro banco)
- Node.js & NPM (opcional, para frontend com Vite)

## 🚀 Requisitos

Antes de começar, você vai precisar ter instalado:

- PHP 8.0 ou superior
- Composer
- Git
- MySQL ou outro banco de dados compatível
- Node.js e NPM (se o projeto usar Vite ou outras dependências frontend)

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repo.git](https://github.com/matheusvictor95/landing-page-com-inscricao.git

# Acesse o diretório do projeto
cd nome-do-repo

# Instale as dependências PHP
composer install

# Copie o arquivo de exemplo do .env
cp .env.example .env

# Gere a chave da aplicação
php artisan key:generate

# Configure o banco de dados no arquivo .env

# Rode as migrations (opcionalmente com seeders)
php artisan migrate --seed

# (Se usar frontend com Vite)
npm install
npm run dev


## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
