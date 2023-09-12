### [](https://hub.driven.com.br/computacao/modulo/86/topico/720/aula/133/compilado#ffc8d9e08c7e4e1faf4a1b96c0bfb6a7 "🎯 Objetivos")🎯 Objetivos

- Nesta aula aprenderemos:

- Como instalar o TypeScript e executá-lo em um projeto Node.
- O que é o arquivo `tsconfig.json` e suas configurações básicas.

### [](https://hub.driven.com.br/computacao/modulo/86/topico/720/aula/133/compilado#614b47fbae034e009b5cacb39aea4bd6 "📚 Compilado")📚 Compilado

- Aprendemos que o TypeScript (TS) é uma espécie de JavaScript (JS) com superpoderes! Ou seja, tudo funciona como sempre funcionou, mas, agora podemos adicionar tipos as variáveis, como: `string`, `boolean`, `number`… e isso fará com que o próprio compilador nos mostre, em tempo de desenvolvimento, quaisquer operações esquisitas.

- Muito bom, né? Só que temos uma má notícia pra você… (eu sei, a festa durou pouco tempo…). O Node não entende o TS, assim como navegador também não. Por quê? Simples, eles entendem somente o JS! (V8 Engine).

- Oh… E agora… Quem poderá nos defender? (~o chapolim programador?~)

- Calma que nem tudo está perdido. Felizmente não é tão complexo configurar o básico para uma aplicação TS rodar. Para este minicurso focaremos exclusivamente no back-end, mas teríamos um processo análogo para o front-end. Combinado? 🤝

- Segue as dicas aí:

- Primeiramente, precisamos instalar o TS dentro do projeto como uma dependência de desenvolvimento:

```shell
npm i -D typescript # para instalar o compilador de typescript
```

- Ao fazer isso, ganhamos acesso ao TypeScript Compiler, o `tsc`.
- Com ele, podemos compilar os arquivos TS em JS e então executá-los normalmente com o Node, conforme mostra a figura. Basta usar o comando `npx tsc` **`ARQUIVO`**`.ts`:

![compilação de um arquivo TS para JS para que possamos executá-lo normalmente.](https://www.notion.so/image/https%3A%2F%2Ffile.notion.so%2Ff%2Fs%2Faec5153f-833a-4e77-851b-aeb3ae67ef83%2F2021-07-20-17-55-26.gif%3Fid%3D75a865c2-8261-4edd-83b5-f908b54c705e%26table%3Dblock%26spaceId%3Df797e032-5eb2-4c9d-beb7-cd7181e19e47%26expirationTimestamp%3D1694613600000%26signature%3DYysMiqHaJukRZD1OZIm4u60YfIb0Pv4nvSbvi7CdOJQ?table=block&id=75a865c2-8261-4edd-83b5-f908b54c705e&cache=v2)

compilação de um arquivo TS para JS para que possamos executá-lo normalmente.

- Note que o `tsc` gera um arquivo do mesmo nome com a extensão `.js`. Essa sim é a que é executada pelo Node!

- Isso é muito legal, mas… (de novo o mas, né?). Será que precisaremos ficar nesse ciclo de compila e executa cada vez que fizermos uma alteração no projeto? Pensando em termos de desenvolvimento, perderemos um tempão fazendo isso!

- Ai é que entra a parte onde eu digo que menti pra você, rs. Na verdade existe uma forma de execução arquivos TS dentro do Node através de um utilitário, o `ts-node`.

- Instale-o junto com o Nodemon: `npm i -D ts-node nodemon`

- Agora, basta executar `nodemon arquivo.ts` que o Nodemon usará sua integração nativa com o `ts-node` para fazer todo o ciclo acima de forma automática! Ou seja, toda vez que você fizer uma alteração….

1.  Os arquivos serão compilados;

2.  Se não houver nenhum erro, serão convertidos em JS;

3.  Serão executados.

- Essa conversão acontece usando algumas configurações padrões do TypeScript. No entanto, na maior parte das vezes essa configuração será insuficiente. Para conseguir configurar o compilador ao seu gosto, use o comando `npx tsc --init`. Isso fará com que o arquivo `tsconfig.ts` seja criado na raiz do seu projeto.

- Por padrão, ele inicializará com essas configurações:

```
target: es2016
module: commonjs
strict: true
esModuleInterop: true
skipLibCheck: true
forceConsistentCasingInFileNames: true
```

- Se você abrir o arquivo tsconfig.json, verá que todas as configurações estão presentes com ótimos comentários. É possível estudá-los cada um individualmente. Mas não faremos isso.

- Usaremos a configuração padrão abaixo (considere como um presente 🎁) para nossos testes e projetos:

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "esModuleInterop": true,
    "module": "CommonJS",
    "moduleResolution": "Node",
    "baseUrl": "src"
  },
  "ts-node": {
    "esm": true
  }
}
```

configuração padrão que usaremos no tsconfig.json durante nossas aulas

- Não iremos aprofundar muito nessa configuração, mas basicamente estamos dizendo para o TS que:

- `outDir`: O arquivo de saída do projeto compilado será a pasta `/dist`.
- `esModuleInterop`: Ele deve tratar módulos CommonJS, AMD e UMD como se forrem módulos ES6.
- `module`: Define o tipo de modularização da aplicação como CommonJS.
- `moduleResolution`: Define a estratégia de resolução de módulos como o Node.
- `baseUrl`: Define a url base da aplicação na pasta `src/`.

- Todas as configurações possíveis estão [neste link](https://www.typescriptlang.org/tsconfig).

- Extra: Em alguns projetos possivelmente você encontrará mais de um arquivo do tipo `tsconfig.json`, como por exemplo, `tsconfig.build.json`. Isso acontece porque em muitas situações vamos querer criar configurações diferentes para situações diferentes de uso do TypeScript. Por exemplo, eu posso fazer com que os arquivos de testes não sejam incluídos no produto final.

### [](https://hub.driven.com.br/computacao/modulo/86/topico/720/aula/133/compilado#2b2d3d199f5c481fa0578f05b94e9a4c "✏️ Exercício: Node quase ama o TypeScript")✏️ Exercício: Node quase ama o TypeScript

📝 Enunciado

- Por padrão o Node (e sem o seu navegador, porque ambos usam a V8Engine por debaixo dos panos) não é capaz de executar arquivos TS, afinal, eles não são JS!

- Configure o projeto para que ele possa ser executado em desenvolvimento usando o `nodemon` e o `ts-node`.

🔗 Link do exercício

### [](https://hub.driven.com.br/computacao/modulo/86/topico/720/aula/133/compilado#8a91199b22ee4cc0a4897e7c835b22da "🚀 Para ir além")🚀 Para ir além

- 🌐 TypeScript Tooling in 5 minutes (TypeScript Documentation)

- 🌐 How To Run TypeScript Scripts with ts-node (Digital Ocean)
