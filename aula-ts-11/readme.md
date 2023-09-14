### 🎯 Objetivos

- Nesta aula aprenderemos:

- O uso do recurso de Generics para generalização de tipos.

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/728/aula/141/compilado#bf85b5b76eae42a0ba8adda96730ce36 "📚 Compilado")📚 Compilado

- Quando estamos programando, um dos principais aspectos que devemos nos atentar é na reusabilidade dos componentes/módulos do código. Fazer isso faz com que o nosso código seja flexível e escalável a longo prazo.

- Uma forma de fazer isso é utilizando o recurso de _Generics_. Este mecanismo nos permite criar componentes que trabalham com diversos tipos de dados sem a utilização do tão temido `any`, ou seja, generalização sem nenhum tipo de referência.

- Sabe quando criamos um array e fazemos `const array = new Array<string>()`? Estamos aplicando _Generics_! Olhem só como é mais simples do que parece.

- Para entender como o _Generics_ funciona do zero, veja por exemplo a estrutura abaixo:

```typescript
type Collection = {
  content: string[];
};

const collection: Collection = {
  content: ["card1", "card2", "card3"],
};

console.log(collection); // { "content": [ "card1", "card2" ] }
```

- Esse type `Collection` define uma propriedade `content` que guarda um array do tipo _string_. E se quisermos trocar o tipo desse `content` para outra coisa? Bom, poderíamos fazer isso…

```typescript
type Collection = {
  content: Card[];
};

type Card = {
  title: string;
};

const collection: Collection = {
  content: [{ title: "card1" }, { title: "card2" }, { title: "card3" }],
};

console.log(collection); // { "content": [ { "title": "card1" }, { "title": "card2" } ] }
```

- Isso resolve, certo? Mas e se quisermos deixar a coisa mais complexa e fazer com que ambos funcionem? Podemos pensar em algo desse tipo…

```typescript
type CollectionContent = (string | Card)[];

type Collection = {
  content: CollectionContent;
};

type Card = {
  title: string;
};

const collectionCard: Collection = {
  content: [{ title: "card1" }, { title: "card2" }, { title: "card3" }],
};

const collectionString: Collection = {
  content: ["card1", "card2", "card3"],
};

console.log(collectionCard); // { "content": [ { "title": "card1" }, { "title": "card2" } ] }
console.log(collectionString); //  { "content": [ "card1", "card2" ] }
```

- Isso é legal, mas bem mais ou menos né? Que dizer que para cada tipo que eu quiser dar suporte eu preciso adicionar isso no `CollectionContent`? Não necessariamente! É exatamente em situações como essas que podemos usar os _Generics_!

- _Generics_ são para tipos o que valores são para argumentos de função — eles são uma maneira de dizer aos nossos componentes/módulos o tipo que queremos usar quando executarmos esse pedaço de código, da mesma forma como dizemos a uma função quais valores usar como argumentos quando nós a executamos. Olhem só:

```typescript
type Collection<T> = {
  content: T[];
};

type Card = {
  title: string;
};

const collectionCard: Collection<Card> = {
  content: [{ title: "card1" }, { title: "card2" }, { title: "card3" }],
};

const collectionString: Collection<string> = {
  content: ["card1", "card2", "card3"],
};

console.log(collectionCard); // { "content": [ { "title": "card1" }, { "title": "card2" } ] }
console.log(collectionString); //  { "content": [ "card1", "card2" ] }
```

- Que coisa _ma-ra-vi-lin-da_ 🤩! Agora esta classe pode trabalhar com qualquer tipo! Legal, né? Mas ai você me pergunta… _“Por que T?”_. A resposta é… por convenção, rs! Esta letra na verdade pode ser qualquer coisa. Por exemplo:

```typescript
type Collection<TIPO> = {
  content: TIPO[];
};
```

- E esse assunto vai além… dá pra fazer muita coisa com isso! Depois peguem para investigar os arquivos de definição das bibliotecas, é um exercício super interessante! (e sim, os códigos podem ficar super abstratos e confusos, então usem com sabedoria!).

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/728/aula/141/compilado#529fc133a37d4438805ed89c1613d86d "✏️ Exercício: Identify Yourself")✏️ Exercício: Identify Yourself

📝 Enunciado

- A função `identity()` abaixo funciona somente com números.

```typescript
function identity(value: Number): Number {
  return value;
}

console.log(identity(1)); // 1
```

- Utilizando Generics, generalize para que funcione como a imagem abaixo:

```typescript
console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello")); // Hello
console.log(identity<number[]>([1, 2, 3])); // [1, 2, 3]
```

🔗 Link do exercício
