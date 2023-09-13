### 🎯 Objetivos

- Nesta aula aprenderemos:

- Como baixar e usar arquivos de definição de tipos.

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/723/aula/136/compilado#6051f34a8efe4e73822e38759d34aa30 "📚 Compilado")📚 Compilado

- Aprendemos como fazer a tipagem de valores primitivos e valores complexos. Mas como fazemos para usar tipos de códigos que não fomos nós que criamos?

- Tome como por exemplo a API do Node e a própria biblioteca do Express. Ambas foram desenvolvidas usando JS puro. Como fazemos para usar o TS nelas?

- Para resolver este problema, precisamos daquilo que é chamado de arquivo de definição de tipos. Como o próprio nome já diz, neste arquivo teremos a declaração de todos os tipos que podem ser aplicados em uma respectiva biblioteca. Desta forma, não temos o trabalho manual de fazer isso.

- Mas como podemos usar esses arquivos de definição?

- Como o TS tem uma comunidade fortíssima, grande parte das bibliotecas famosas do Node já possuem esse arquivo de definição disponíveis. Para que não ficassem jogadas por aí na internet, foi criado um padrão: esses arquivos de definição ficam no `@types`.

- Na prática isso significa que toda vez que usarmos uma biblioteca que foi desenvolvida puramente em JS e não tem um arquivo de definição de tipos integrado, baixaremos ela desta forma:

```bash
npm i -D @types/NOMEDABIBLIOTECA
```

- Para entender melhor, vamos para um exemplo prático. Imaginando uma API bem simples com Node + Express, teríamos:

```bash
npm init -y # cria um projeto node
npm i express # instalação da biblioteca
npm i -D typescript ts-node nodemon @types/express @types/node # instalação dos arquivos de definição
npx tsc --init
```

- Então a aplicação das configurações:

```typescript
{
  "compilerOptions": {
    "outDir": "dist",
    "esModuleInterop": true,
    "module": "CommonJS",
    "moduleResolution": "Node",
    "baseUrl": "src",
  },
  "ts-node": {
    "esm": true
  },
}
```

- E no arquivo da aplicação:

```typescript
import express, { Request, Response } from "express";

const app = express();
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm ok!");
});

app.listen(5000, () => console.log(`server is up and running`));
```

- Logo ao fazer o passo do `app.get()` já notamos que o autocomplete do VS Code já funciona mostrando sugestões do que é possível usar nesse objeto! O mesmo acontece com o `req` e o `res` que agora podemos importar do express.

- Se você clicar na variável enquanto segura o CTRL, poderá ver o arquivo de definição! Geralmente é o arquivo `index.d.ts`:

![arquivo de definição de tipos vindo do @types/express](https://www.notion.so/image/https%3A%2F%2Ffile.notion.so%2Ff%2Fs%2F5c10bd0e-8115-4d55-8778-0035578e6fcd%2FScreen_Shot_2023-04-28_at_15.30.10.png%3Fid%3D8414882c-2ca9-45c5-86d9-8e320900e174%26table%3Dblock%26spaceId%3Df797e032-5eb2-4c9d-beb7-cd7181e19e47%26expirationTimestamp%3D1694707200000%26signature%3D8SJqo_mbP6Jkw6Ycm_QXLx_Peb2x_63UDJyD4HeCtyQ?table=block&id=8414882c-2ca9-45c5-86d9-8e320900e174&cache=v2)

arquivo de definição de tipos vindo do @types/express

- E se buscar onde está este arquivo, verá que está lá no seu `node_modules/`:

![localização do arquivo de definição do expressa](https://www.notion.so/image/https%3A%2F%2Ffile.notion.so%2Ff%2Fs%2F9d71d7d2-9284-4808-a96f-ee5c8d3cded5%2FScreen_Shot_2023-04-28_at_15.32.05.png%3Fid%3De3b2f842-b06d-46e7-bae6-dfd2d442410d%26table%3Dblock%26spaceId%3Df797e032-5eb2-4c9d-beb7-cd7181e19e47%26expirationTimestamp%3D1694707200000%26signature%3DveNcH2CnmA30A75o5C2KvgmXO87HZ_uY5wVzwEZcTGw?table=block&id=e3b2f842-b06d-46e7-bae6-dfd2d442410d&cache=v2)

localização do arquivo de definição do expressa

- Algumas bibliotecas, como o Joi, já vem com o `@types`, então você não tem esse trabalho. 😄

- A partir daqui você já tem uma EXCELENTE documentação para buscar os tipos e investigar tudo o que é possível fazer com a biblioteca.

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/723/aula/136/compilado#c6b0363e4d954aa39b4928edf4b80241 "✏️ Exercício: Ele não faz o meu tipo")✏️ Exercício: Ele não faz o meu tipo

📝 Enunciado

- O TS realmente nos ajuda muito dando a possibilidade de tipar variáveis, parâmetros, funções, etc… mas um problema surge quando precisamos usar um código que não é nosso.

- Usando a biblioteca de DefinitionTypes, faça a tipagem da API. ( o projeto está em JS puro, faça as conversões necessárias).

🔗 Link do exercício

[

enunciado\_\_what-day.zip

10.9KB

](https://file.notion.so/f/s/80d70b89-9ac5-4835-bae9-542abc59af46/enunciado__what-day.zip?id=97898c1b-7c8e-402d-a472-1017a1873206&table=block&spaceId=f797e032-5eb2-4c9d-beb7-cd7181e19e47&expirationTimestamp=1694707200000&signature=SRgBkjALCM0WnCZh-nBvFobkQHMrxyw3nESySmi7L8s)

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/723/aula/136/compilado#49dc83e9ef3349b189bd3652ad62aef8 "🚀 Para ir além")🚀 Para ir além

- 🌐 DefinitelyTyped (GitHub)
