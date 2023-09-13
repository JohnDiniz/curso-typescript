### 🎯 Objetivos

- Nesta aula aprenderemos:

- Tipar arrays com um único tipo.
- Tipar arrays que aceitam mais de um tipo de dados.

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/723/aula/136/compilado#9b8b20054dd8448caf4494c7b8e6e624 "📚 Compilado")📚 Compilado

- Até o momento aprendemos como lidar com tipagem para valores únicos, ou seja, uma variável que possui um único valor.

- No entanto, sabemos que é extremamente improvável que uma aplicação não possua conjuntos de dados, ou seja, as famosas listas (ou arrays).

- Como lidar com tipagem em arrays?

- Felizmente não é nada muito diferente do que já podemos imaginar. Assim como as variáveis, parâmetros e afins; a tipagem se dá por meio da estrutura `:`**`TIPO`**, só que desta vez usamos os colchetes (`[]`) para indicar de que se trata de um array.

- Veja os exemplos abaixo:

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
const booleanos: boolean[] = [true, false, true];
const strings: string[] = ["s1", "s2", "s3"];
```

- Há uma outra forma menos usual de declarar:

```typescript
const numbers: Array<number> = [1, 2, 3, 4, 5];
const booleanos: Array<boolean> = [true, false, true];
const strings: Array<string> = ["s1", "s2", "s3"];
```

não vamos explorar muito esta forma pois ela usa recursos do TS que ainda não vimos (mas veremos, hihi!)

- A vantagem aqui é que podemos garantir com TS que não será possível adicionar tipos diferentes dentro do array, como por exemplo, tentar adicionar uma string em um array do tipo `number`.

- Mas… e se for o caso? E se dentro de um mesmo array nós quisermos ter a possibilidade de ter tipos diferentes?

- Se você prestou bastante atenção nas aulas anteriores, provavelmente uma ideia já deve ter surgido na sua cabeça… é isso mesmo, ~é impossível de fazer!~ Brincadeira, basta usar o Union Types!

```typescript
const mix: (number | string)[] = [1, "two", 3, "four", 5];
```

- Extra: Se tratando de arrays, o TS tem conceito chamado `tuple` (tupla). Confesso que dificilmente usaremos isso, mas vale conhecer. Uma tupla nada mais é do que um array com tamanho e tipos pré-definidos.

```typescript
let tuple: [number, string, number]; // tamanho pré definido com os tipos
title = [1, "two", 3];
```

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/723/aula/136/compilado#5c79cea4e3fe44ad8040fa5197cc7e7e "✏️ Exercício: Tipando vários elementos")✏️ Exercício: Tipando vários elementos

📝 Enunciado

- O funcionamento da tipagem para arrays é muito semelhante ao que já havíamos visto para variáveis, parâmetros e afins.

- Tipe os arrays a seguir.

🔗 Link do exercício
