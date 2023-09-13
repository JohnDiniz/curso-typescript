### 🎯 Objetivos

- Nesta aula aprenderemos:

- A diferença entre tempo de execução e tempo de compilação.
- Usar o Joi em conjunto com o TypeScript.

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/727/aula/140/compilado#109d11179b4740f781626ea49dfcffac "📚 Compilado")📚 Compilado

- Uma dúvida que pode aparecer ao usarmos o TypeScript é: _“bom, se estamos usando o TS não precisamos de bibliotecas como o Joi, certo?”_ E apesar da dúvida ser legítima e a lógica fazer sentido, a resposta é errado. O Joi continua sendo super importante.

- Mas por quê?

- Para entender, precisamos reforçar a diferença entre o tempo de execução e o tempo de compilação. Desde o início deste tema, temos dito que o TS é uma linguagem que nos ajuda em tempo de desenvolvimento, ou seja, antes das coisas serem executadas. Esse tipo de validação é o que chamamos de tempo de compilação.

- Por outro lado, existem erros que podem acontecer enquanto a aplicação está rodando, ou seja, erros em tempo de execução. O TS nos ajuda a evitar que eles aconteçam, mas ele não é a prova de fogo.

- Uma situação em que o TS não dará conta será quando tratarmos as entradas do usuário vindo de uma requisição POST. Perceba que podemos fazer uma asserção para que ele possua o comportamento de um determinado tipo, no entanto, isso não garante que ele seguirá essas regras ⇒ o que pode causar um erro de execução.

- Por isso que ainda precisamos do Joi! Mas há uma excelente notícia… podemos unir o poder do Joi com o que estamos aprendendo sobre TS!

- Vamos partir novamente do exemplo do `type User`:

```typescript
export type User = {
  name: string;
  email: string;
  password: string;
};
```

- Assumindo que você já tem o `joi` instalado (`npm i joi`), podemos criar um arquivo de schema, como por exemplo, `user-schema.ts`, para garantir que os campos do tipo serão o que nós esperamos.

```typescript
import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});
```

- Mas como garantir, com certeza absoluta, que essas validações são compatíveis com o que definimos no type? Simples! Podemos usar um recurso do TypeScript chamado Generics. Veja:

```typescript
import Joi from "joi";
import { User } from "./../protocols/User";

export const userSchema = Joi.object<User>({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});
```

- Ao fazer isso, o TS será capaz de inferir que o objeto passado dentro da função object() do Joi precisa ser do tipo User! Desta forma, nossa validação fica maravilhosa e conseguimos evitar erros em compilação e execução!

- Mas e esse tal de Generics? Como ele funciona? É o que veremos em seguida 😉

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/727/aula/140/compilado#1dc95c7217574787b5fe1338053bcb53 "✏️ Exercício: Meu tipo de música")✏️ Exercício: Meu tipo de música

📝 Enunciado

- O TS e o Joi não são ferramentas concorrentes pois elas possuem responsabilidades diferentes. Enquanto a primeira se preocupa com validações em tempo de compilação, a segunda se preocupa com validações em tempo de execução.

- Considerando o código abaixo de uma API de construção de playlists em construção, faça o que for necessário para validar o input do usuário usando um middleware de schema com o Joi.

- A aplicação já tem um type Music do qual você pode e deve se basear.

🔗 Link do exercício
