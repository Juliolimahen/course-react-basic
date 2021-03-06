# Curso React Básico

### Instalação
- Possibilidade de executar um pacote do node sem precisar instalar, sem a necessidade de executar o npm install
    - Comando para criar o app react usando typescript
        - ```npx create-react-app {nome app} --template typescript```

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
        - react
            - react em sí funciona em varias platoformas 
        - reactDOM
            - reactDOM 
                - trabalhar com elementos referentes ao document object model, ao HTML
    - algo sendo executado, geralmente um render 
    - uma exportação 
- obs. toda vez que a aplicação iniciar sera chamado o arquivo index.tsx, ele é o ponto de partida da aplicação 
- O que é o react? 
    - Uma biblioteca que manipula elementos da tela. 
- Qual a vantagem de se usar React em relação ao asp net core ou php, por exemplo? 
    - Todos esses outros frameworks são service side, rodam no lado no servidor, é necessário que haja uma requisição ao servidor e traforma em html. Já no React essas paginas são carregadas uma vez e depois só é altera do o body (Miolo), o conteúdo da página. Dessa forma, essa aplicação e executada intera no lado do cliente (single page aplication). Não seria uma boa pratica fazer uma requisição novamente ao servidor para retorna um HTML. Só é alterado a BODY do public/index.html. Para o react funcionar será necessário que exista um elemento principal nessa pagina, o elemento raiz (```<div id="root"></div>```).

- ReactDOM.render
    - É necessário que seja informado para ele o componente (Ex. ```<App />```) que será renderizado e onde ele será renderizado(```document.getElementById('root')```).
- Componentes 
    - A ideia por trás dos componentes é que eles possam ser reutilizados e até podem ser utilizados dentro de outros componentes. No react quase tudo é um componente. 
    - Criar pasta "components" para melhor arganização do codigo
    - É definido um a tela, o html, e o react só reage a mudança. O componente não é alterado de fato. 
    - Por que é declarado através de uma Arrow function?
        - Para se utilizado respeitando o escopo evitando efeitos colaterais, não ocorrer erros de outras aplicações alterar o que está dentro desse escopo. 
    - Estrutura básica componente
        ```
                /*importação */
                import React from 'react';

                /** Declaração(Arrow function)*/ 
                const App = () => {
                    return (
                        <div>
                        {/* retorno, conteúdo */}
                            <h1>Meu primeiro App</h1>
                        </div>
                    );
                }

                /** exportação component */
                export default App;
        ```

    - Adcionar tipagem, criar a pasta models 
        - Criar a classe Todo
            - Construtor 
                - No typescript, quando se cria/define os atributos publicos dentro do construtor automaticamene já são traformados em propriedades, não é necessários cria-los fora 
    - Tags react html
        - Tudo o que for escrito em typescrit/ract é necessário que esteja entre chaves, para que não seja entendido como marcação html ou texto 
    - Map 
        - O map funciona como um "de para", é possível percorrer uma lista tendo outra lista como resultado
        - Sempre for usar o map, é ideal q se use o key (identificador unico) como por exemplo o id  ```todos?.map(todo => (<div key={todo.id}>{todo.title}</div>))``` 
    - Criar interface para tipagem das props na passagem por parâmetro
    ```
                interface TodoListItemProps {
                todo: Todo
            }
    ```   
    - Passar parâmetro em evento 
        - Quando necessario passar um para chamando uma função em um evento é necessario chamar um arrow fuction 
        ``` onClick={()=>onRemove(props.todo)} ```    


    