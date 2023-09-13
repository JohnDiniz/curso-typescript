### 🎯 Objetivos

- Nesta aula aprenderemos:

- Como tipar objetos complexos em variáveis, parâmetros e funções.
- Tornar propriedades de um tipo como opcionais.

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/723/aula/136/compilado#bfcbb573bb354aa68e98bce2719483b4 "📚 Compilado")📚 Compilado

- Tipar variáveis, funções e arrays com tipos primitivos, tais como: `string`, `number`, `boolean`… não são mais um problema. Vimos que basta usar a sintaxe de `:`**`TIPO`** para fazer isso.

- Mas como a vida de dev não é fácil… é claro que tem coisa faltando. Uma das grandes vantagens da linguagem JavaScript é a sua estrutura versátil de objetos. Podemos criar eles através de funções construtoras, classes e de forma literal, como no exemplo abaixo:

```typescript
const user = {
  name: "nome",
  email: "email",
  password: "password",
};
```

- O que acontece quando precisamos, por exemplo, criar uma função que recebe esse tipo de objeto por parâmetro?

```typescript
function checkUserWithEmail(user: ???) {
  // impl
}
```

- Será que para estes casos devemos usar o `any`? Spoiler: NÃO.

- Então como fazer para tipar estruturas complexas como objetos?

- Não é muito difícil, mas já adianto que você não vai gostar, rs (e sim, veremos que há outras formas mais elegantes de fazer, mas segue o fio). Para fazer essa tipagem, basta usar a mesma estrutura seguinte este formato:

```typescript
const user: { name: string; email: string; password: string } = {
  name: "nome",
  email: "email",
  password: "password",
};
```

- O mesmo para funções:

```typescript
function checkUserWithEmail(user: {name: string; email: string; password: string}) { ... }
```

- E se for um array desses objetos? A lógica segue sendo a mesma:

```typescript
// objeto
const user: {
  name: string;
  email: string;
  password: string;
} = {
  name: "nome",
  email: "email",
  password: "password",
};

// array
const users: {
  name: string;
  email: string;
  password: string;
}[] = [user];
```

- E assim como temos o Union Type sendo aplicado para tipos primitivos, o mesmo pode ser feito para as propriedades de um objeto. Por exemplo, vamos imaginar que nesse objeto `user`, temos um campo chamado `birth` que representará uma data. Essa data pode ser uma `string` ou um objeto do tipo `Date` do JavaScript. Como ficaria?

```typescript
const user: {
  name: string;
  email: string;
  password: string;
  birth: string | Date;
} = {
  name: "nome",
  email: "email",
  password: "password",
  date: "2010-10-10", // ou poderia ser um new Date("2010-10-10")
};
```

- Por fim, como objetos são estruturas complexas e flexíveis, as veremos teremos casos onde uma propriedade não é obrigatória. Ou seja, a estrutura pode ter aquele campo específico em alguns mas não em todos.

- Para tornar uma propriedade opcional, usamos o ponto de interrogação (`?`), como mostra o código abaixo onde deixamos `birth` como opcional:

```typescript
const user: {
  name: string;
  email: string;
  password: string;
  birth?: string | Date;
} = {
  name: "nome",
  email: "email",
  password: "password",
  // date: "2010-10-10" => não é mais obrigatório
};
```

- Repare que o uso em si da tipagem não é difícil, mas ela apresenta três problemas principais (será que você é capaz de listá-los antes de eu dar resposta abaixo? 🤔):

1.  O código começa ficar super verboso e extenso. Quando maior o objeto, maior será sua declaração de tipagem.

2.  A manutenção é bem difícil, pois toda vez que uma nova propriedade for adicionada pra esse objeto, a declaração da tipagem em todos os lugares precisa ser atualizada.

3.  Não há como reaproveitar essa tipagem (no próprio módulo e módulos externos).

- Há uma forma de resolver isso com charme e elegância? Com certeza, mas veremos isso só nos próximos episódios. 😅

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/723/aula/136/compilado#1b4618ed5c14438c97b9e904d44993bf "✏️ Exercício: Objetos tipados")✏️ Exercício: Objetos tipados

📝 Enunciado

- Tipar usando tipos primitivos é bem simples, mas a tarefa começa a se tornar um pouco mais complicada quando objetos começam a aparecer.

- Tipe o objeto e função a seguir.

🔗 Link do exercício

[

TS Playground - An online editor for exploring TypeScript and JavaScript

The Playground lets you write TypeScript or JavaScript online in a safe and sharable way.

![TS Playground - An online editor for exploring TypeScript and JavaScript](https://www.typescriptlang.org/icons/icon-512x512.png?v=8944a05a8b601855de116c8a56d3b3ae)

https://www.typescriptlang.org/play?#code/MYewdgzgLgBA5gQwLYFMYF4YG8BQN8wCWAJgFwwCMANHgQA4A2CUAZiAE5Lm4G9FmUafAmGQpyAIgAKTAJ7RmhcBNr4AvkIJRCUBuJgSAKgAs0AGQTQYIFjACqECZvx0ArgCMGhCKfaSAcgiucMZQsjAAIiBwTqowTK5gwMaSAEwADBQAzAC06QBsORQALBIwAPTlMHQgxGgQKOwwrkiRzCgAdDAAk9Z0wEqiDDAAFHQI7AgwAFbRIBAwCIRgxFNgAMcg8QhgAOcIxPMAlB04ajg4oJCwiKgLmADatygAugDcFyyJwNrg1XIjZ5HHgESowdiJBZQUzwMRxK4QEB6DoMaKAsRHD5qIA

](https://www.typescriptlang.org/play?#code/MYewdgzgLgBA5gQwLYFMYF4YG8BQN8wCWAJgFwwCMANHgQA4A2CUAZiAE5Lm4G9FmUafAmGQpyAIgAKTAJ7RmhcBNr4AvkIJRCUBuJgSAKgAs0AGQTQYIFjACqECZvx0ArgCMGhCKfaSAcgiucMZQsjAAIiBwTqowTK5gwMaSAEwADBQAzAC06QBsORQALBIwAPTlMHQgxGgQKOwwrkiRzCgAdDAAk9Z0wEqiDDAAFHQI7AgwAFbRIBAwCIRgxFNgAMcg8QhgAOcIxPMAlB04ajg4oJCwiKgLmADatygAugDcFyyJwNrg1XIjZ5HHgESowdiJBZQUzwMRxK4QEB6DoMaKAsRHD5qIA)

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/723/aula/136/compilado#36e49399cce44ddba96172f80618d7f5 "🚀 Para ir além")🚀 Para ir além

- 🌐 Object Types (TypeScript Documentation)
