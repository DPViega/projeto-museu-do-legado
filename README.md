# Museu do Legado

**Museu do Legado** é uma aplicação web interativa dedicada a preservar histórias geracionais através de experiências culturais imersivas. O projeto apresenta um design moderno, responsivo e rico em animações, oferecendo aos visitantes uma prévia digital do acervo e das atividades do museu.

## 📖 Sobre o Projeto

Este site serve como a vitrine digital para o Museu do Legado. Ele foi desenvolvido com foco em uma experiência de usuário fluida e visualmente impactante, permitindo aos usuários explorar coleções, verificar a programação de eventos e obter informações práticas de visitação.

### Principais Funcionalidades

- **Experiência Visual Imersiva**: Design moderno com animações suaves de entrada e transições de página.
- **Tema Claro/Escuro**: Suporte completo a alternância de temas (Light/Dark Mode) para melhor acessibilidade e conforto visual.
- **Galeria Interativa**: Visualização de coleções de arte com recurso de Lightbox para detalhes em alta resolução.
- **Seção de Eventos**: Calendário e listagem de eventos culturais e exposições.
- **Integração Social**: Seção dedicada para exibir conteúdo e links do Instagram do museu.
- **Informações Práticas**: Cards com horários, preços e mapa de localização.
- **Design Responsivo**: Layout totalmente adaptável para dispositivos móveis, tablets e desktops.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias modernas de desenvolvimento web:

- **[React](https://react.dev/)**: Biblioteca JavaScript para construção da interface.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilitários para estilização rápida e responsiva.
- **[Radix UI](https://www.radix-ui.com/)**: Componentes acessíveis e sem estilo para base da interface (Dialogs, Tooltips, etc).
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leve e consistente.
- **[React Router](https://reactrouter.com/)**: Gerenciamento de rotas da aplicação.
- **Craco**: Configuração avançada par o Create React App (CRA).

## 📦 Como Rodar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

### Pré-requisitos
Certifique-se de ter o **Node.js** e o **npm** (ou yarn) instalados em sua máquina.

### Instalação

1. Clone o repositório (ou baixe os arquivos):
   ```bash
   git clone <URL-DO-REPOSITORIO>
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd museu-legacy-frontend
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

### Execução

Para iniciar o servidor de desenvolvimento:

```bash
npm start
# ou
yarn start
```

O projeto será aberto automaticamente no seu navegador em `http://localhost:3000`.

## 📂 Estrutura do Projeto

A estrutura principal do código fonte está organizada da seguinte maneira:

```
src/
├── components/          # Componentes reutilizáveis
│   ├── layout/          # Componentes de estrutura (Header, Footer)
│   ├── sections/        # Seções da página principal (Hero, About, etc.)
│   └── ...              # Outros componentes de UI (Lightbox, Modal)
├── data/                # Dados mockados para exibição (eventos, coleções)
├── pages/               # Páginas da aplicação (Home.jsx)
├── styles/              # Arquivos de estilo globais
├── utils/               # Funções utilitárias
└── App.js               # Componente raiz
```

## 📝 Licença

Este projeto é desenvolvido por **GC Cultural**. Todos os direitos reservados.
