## Aula 08 - Criando seus tipos (type) e asserções (as)

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/726/aula/139/compilado#8302570df59e4e738137908e3633f060 "🎯 Objetivos")🎯 Objetivos

- Nesta aula aprenderemos:

- Criar tipos complexos próprios usando o `type`.
- Fazer asserções de tipos usando o `as`.

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/726/aula/139/compilado#eaf45ddba62844e7bc1202d3284d55fc "📚 Compilado")📚 Compilado

- Aprendemos como tipar objetos, mas vimos que isso é pouco prático no sentido de manutenibilidade. Vimos que para tipar um objeto, basta reproduzir sua estrutura, como no exemplo abaixo:

```typescript
const user: { name: string; email: string; password: string } = {
  name: "nome",
  email: "email",
  password: "password",
};
```

- Apesar de funcionar, é pouco prático. Existe uma outra forma de fazer isso usando o recurso de `type` do TypeScript.

- De forma bem prática, o type nos permite definir um tipo complexo! Como por exemplo… um usuário! Seu uso é bem simples. Veja como podemos refatorar o código acima para usar este recurso:

```typescript
type User = {
  name: string;
  email: string;
  password: string;
};

const user: User = {
  name: "nome",
  email: "email",
  password: "password",
};
```

- Por convenção, sempre criamos os nossos tipos com a nomenclatura `PascalCase`.

- O efeito prático no TS é o mesmo que tínhamos anteriormente, mas agora temos duas vantagens:

1.  Se torna muito mais fácil de dar manutenção, pois basta alterar apenas o type e não mais em cada um dos lugares em que era definido ⇒ o que por consequência diminui as chances de erro humano.

2.  Podemos fazer uso desse type em vários lugares diferentes, inclusive exportá-lo para outros módulos.

- Para exportar um `type`, usamos a mesma estratégia que usamos para exportar normalmente, ou seja, o `export`.

```typescript
// ----------- //
// /protocols/user.ts

export type User = {
  name: string;
  email: string;
  password: string;
}

// ----------- //
// outro arquivo
import { User } from "./../protocols/User";

const user: User = { ... };
```

- Uma prática que pode ser aplicada é isolar os tipos customizados da aplicação em uma pasta chamada `protocols/` (protocolos). Em outras vezes, como em arquivos do tipo Repository, você encontrará os type no mesmo arquivo. Não há uma definição tão clara de onde devem ficar, adeque de acordo com a preferência ou padrão adotado pela equipe/empresa.

- Um ganho muito prático de termos tipos customizados está na sua aplicação em funções que retornam o tipo `any`. Já entramos no consenso de que o tipo `any` é ruim pois o TS “perde” a habilidade de inferir e validar o que pode acontecer, fazendo com que ele se torne quase inútil se comparado ao uso normal do JS.

- Mas então como esses tipos customizados podem ajudar?

- Podemos aplicar uma técnica chamada de `Type Assertions` (asserções de tipo). A ideia aqui é que existem situações em que nós temos informações sobre o tipo de um valor que o TS é incapaz de inferir (toma essa, TS!). Para fazer isso, usamos a palavra reservada `as`.

- Um exemplo bem prático de aplicação é no `req.body` do express. Por definição, é impossível tipar a informação que chegará no corpo da requisição do express porque simplesmente pode ser qualquer coisa!

- Nessa situação, podemos fazer com que o `req.body` se comporte como um tipo estabelecido. Isso fará com o TS coloque novamente em prática as inferências e validações.

```typescript
function createUser(req: Request, res: Response) {
  const user = req.body as User;
  // user.name;
  // user.email...
}
```

- Mas o que acontece se o valor não se comportar como o esperado? Neste caso, teremos um erro em tempo de execução, algo como `name is not defined`. Nesta situação em específico, o JOI é quem nos ajuda 😉.

- Extra: É possível que nos seus estudos sobre esse tema você encontre um termo chamado `interface`. Em linhas gerais, `type` e `interface` fazem a mesma coisa; só que o segundo termo está mais associado com o paradigma de orientação a objetos. Em termos técnicos, as interfaces são extensíveis enquanto os type não.

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/726/aula/139/compilado#7739996c88554a79bc3e97de2fae2eee "✏️ Exercício: Objetos tipados - Parte 2")✏️ Exercício: Objetos tipados - Parte 2

📝 Enunciado

- Podemos tipar objetos de uma forma relativamente simples, mas que acaba gerando um custo muito alto de manutenção no médio-longo prazo.

- Refatore o código abaixo para usar `type`.

🔗 Link do exercício

[

TS Playground - An online editor for exploring TypeScript and JavaScript

The Playground lets you write TypeScript or JavaScript online in a safe and sharable way.

![TS Playground - An online editor for exploring TypeScript and JavaScript](https://www.typescriptlang.org/icons/icon-512x512.png?v=8944a05a8b601855de116c8a56d3b3ae)

https://www.typescriptlang.org/play?#code/MYewdgzgLgBA5gQwLYFMBcMDeAoGMCWAJhmAK5IBGKATgNy4wAOANglAGYjVIY578FiMMpRr0BeMMnQxo1fGDjiYAX2VR8UZjLkKlDRqQrN8EABY0MuxctakwwMwH4rUeYpgAfGABE2KehUYAF4sBiIMAEYAGgNWDi4eMIlBKNiUqVQMACIABVYAT2g2fHBshhV0mA0tGWyAFQsYABkEaBgQdhgAVQhsqsNjUwtqHIA5BFI4MygC3xA4foY7BzMcgCYABkiAZgBaTYA2PciAFmyYAHpLphBCFFkaGHJffwA6auQKAEukW-vHtQYAA3BAAL1K2BU2GwoEgsEQqAgvHCQhEVDocTYnG4KJSEWE5AxygEmR0bj0yjUDBq2lc7n0eEGJnMllkFJsy0mqxc7IZXleUACUIA2gBdPChEWIlBi+jYdj2YAacBMQoAChleNShNEmKZ8RxST4EgJ6LEDFJ0nplIq6k0dL5tqZRhZIxtnLwK0cvOscAFfiFgRgAEoTdcYNR7BBqk0ZQw4RAQNo3swFprpCHAkA

](https://www.typescriptlang.org/play?#code/MYewdgzgLgBA5gQwLYFMBcMDeAoGMCWAJhmAK5IBGKATgNy4wAOANglAGYjVIY578FiMMpRr0BeMMnQxo1fGDjiYAX2VR8UZjLkKlDRqQrN8EABY0MuxctakwwMwH4rUeYpgAfGABE2KehUYAF4sBiIMAEYAGgNWDi4eMIlBKNiUqVQMACIABVYAT2g2fHBshhV0mA0tGWyAFQsYABkEaBgQdhgAVQhsqsNjUwtqHIA5BFI4MygC3xA4foY7BzMcgCYABkiAZgBaTYA2PciAFmyYAHpLphBCFFkaGHJffwA6auQKAEukW-vHtQYAA3BAAL1K2BU2GwoEgsEQqAgvHCQhEVDocTYnG4KJSEWE5AxygEmR0bj0yjUDBq2lc7n0eEGJnMllkFJsy0mqxc7IZXleUACUIA2gBdPChEWIlBi+jYdj2YAacBMQoAChleNShNEmKZ8RxST4EgJ6LEDFJ0nplIq6k0dL5tqZRhZIxtnLwK0cvOscAFfiFgRgAEoTdcYNR7BBqk0ZQw4RAQNo3swFprpCHAkA)

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/726/aula/139/compilado#48e6c29894b34f5481def5d91378014d "🚀 Para ir além")🚀 Para ir além

- 🌐 Type Assertions (TypeScript Documentation)

[

Documentation - Everyday Types

The language primitives.

![Documentation - Everyday Types](https://www.typescriptlang.org/icons/icon-512x512.png?v=8944a05a8b601855de116c8a56d3b3ae)

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions

](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
