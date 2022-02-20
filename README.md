# course-react-basic

### Instalação
    - Possibilidade de executar um pacote do node sem precisar instalar, sem a necessidade de executar o npm install
        - Comando para criar o app react usando typescript
            - npx create-react-app {nome app} --template typescript

### Estrutura do App 
    - tsconfig
        - Arquivo de configuração do typescript
    - package json
        - Onde fica todas as dependências, tudo que precisa para rodar 
    - public (pasta de arquivos públicos)
        - arquivos públicos, como imagens, css, styles... 
    - src (pasta de conteúdo)
        - setupsTests
            - para testes de unidade 
        - serviceWorked
            - parte de PWA 
        - react-app-env.d
            - variáveis de ambiente(fazer o chaveamento entre desenvolvimento e produção)
        - index 
            - página principal  
        - app.tsx
            - componente
        - app.test.tsx
            - primeiro componente de teste do app.tsx
        - app.css 
            - estilos do componete app.tsx
    - node modules
        - pasta de modulos, onde fica todos os madulos do node 
### Adapatando Estrutura do App 
    - remover 
        - logo.svg
        - index.css
        - app.test.tsx
        - app.tsx
        - app.css
    - Estrutura Index.tsx (obs. extensão tsx se refere a um arquivo react typescript e jsx a um arquivo react javascript)
        - imports
            <img src="/carbon/index.tsx-2022-02-20-12-55-48.jpg">
