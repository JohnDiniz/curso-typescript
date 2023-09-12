## Aula 03 - Tipos primitivos e inferências

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/721/aula/134/compilado#a74c824878514e8dbefb4f2b33ce3b02 "🎯 Objetivos")🎯 Objetivos

- Nesta aula aprenderemos:

- O que é inferência de tipos.
- Como tipar o retorno de funções.
- Quando devemos tipar ou não tipar explicitamente algo.

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/721/aula/134/compilado#4e9f5039b0024d6c989ecf96e3eff025 "📚 Compilado")📚 Compilado

- Um dos superpoderes que o TypeScript nos oferece e que iremos explorar bastante neste minicurso é o recurso da tipagem.

- A tipagem pode ser feita em vários locais diferentes da aplicação, como por exemplo: variáveis, funções, parâmetros… entre outros. Já vimos como usar a tipagem em parâmetros de funções, como no exemplo abaixo:

```typescript
function somar(num1: number, num2: number) {
  return num1 + num2;
}
```

- Note que usamos os dois pontos (`:`**`TIPO`**) acompanhado do tipo em questão. Por ora só trabalhamos com `number`, mas existem outros tipos primitivos que podemos explorar.

- Veja no código abaixo como é possível tipar números, strings e booleanos em variáveis. O processo é exatamente o mesmo:

```typescript
const num: number = 42;
const text: string = "Hello ❤";
const valid: boolean = true;
```

- Bem tranquilo, certo? Mas além de tipar variáveis e parâmetros, também podemos tipar funções. Mas então você pode pensar: _“O que seria tipado em uma função?!”._ E a resposta é: o seu retorno!

- Voltando no nosso código inicial, podemos dizer que a função retornará um `number`:

```typescript
function somar(num1: number, num2: number): number {
  return num1 + num2;
}
```

- Mas e para funções que não tem retorno? Neste caso, podemos tipar elas com um tipo especial chamado `void`. Void vem da ideia de que não existe nada, que é exatamente o que acontece em uma função sem retorno! Por exemplo:

```typescript
function showFullName(firstname: string, lastname: string): void {
  console.log(`${fistname} ${lastname}`);
}
```

- Agora vem a parte contraditória do compilado… Por mais que seja fácil fazer a tipagem de tipos primitivos em funções, variáveis e parâmetros; em boa parte das situações ela é desnecessária ser feita.

- “_COMO ASSIM?!”_ 😱

- O TS é tão poderoso que possui o que chamamos de poder de inferência de tipos. Na prática significa que ele é capaz de dizer (inferir) de qual tipo aquela variável é de acordo com o seu conteúdo.

- Se ele vê que o valor de uma variável é um texto, bom, só pode ser uma `string`. Se é um número, só pode ser um `number`. Um valor `true`? Só pode ser `boolean`. E assim por diante:

```typescript
let idade = 19; //Agora é o tipo number
let nomeCompleto = "Irmao Do Jorel"; // Agora é string
nomeCompleto.length; // Irá retornar a quantidade de letras => é um number
idade.length; // Vai dá erro!
```

- Então fica a questão óbvia… Pra que serve a tipagem explícita? Quando devemos usar?

- A resposta final é relativa (o famoso “depende”), mas vamos seguir uma regrinha de ouro 🪙: para valores primitivos em variáveis e funções evitaremos seu uso pois acaba poluindo o código, mas, sempre usaremos na assinatura de uma função. Desta forma evitamos tornar o código verboso demais e somos assertivos em dar informações relevantes no código.

- Por fim, existe mais um tipo que tentaremos evitar : o `any`. O `any` indica ao TS que o tipo em questão pode ser literalmente qualquer coisa. Em algumas situações teremos que lidar com ele pois existem funções e propriedades que retornam esse valor (por exemplo, veremos que o `req.body` do Express te retorna `any`, pois é impossível prever o que o usuário enviará - mas lidaremos com esse problema depois).

- Caso tenha dúvida se o TS está conseguindo inferir corretamente os tipos ou se ele é do tipo `any`, basta colocar o mouse em cima da variável em questão que ele te mostrará! 😉

- Extra: Existem mais alguns tipos básicos que não exploraremos agora, tais como: `enum`, `unknow` e `never`.

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/721/aula/134/compilado#2a1aaf5deafa4212a1c76d7f0c8bde44 "✏️ Exercício: Tipagem para todos os lados")✏️ Exercício: Tipagem para todos os lados

📝 Enunciado

- Podemos aplicar a tipagem em vários locais diferentes da aplicação.

- Mas nem sempre a tipagem explícita é necessária por conta da inferência de tipos do TS.

- Refatore o código TS a seguir colocando os tipos onde julgar necessário.

🔗 Link do exercício

[

TS Playground - An online editor for exploring TypeScript and JavaScript

The Playground lets you write TypeScript or JavaScript online in a safe and sharable way.

![TS Playground - An online editor for exploring TypeScript and JavaScript](https://www.typescriptlang.org/icons/icon-512x512.png?v=8944a05a8b601855de116c8a56d3b3ae)

https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAWxAG1gBzQTwBRgjICMANIocgEwCUiA3gFCIuIBOAplCG0pcYgBUFIlQDcjAL6NGoSLASIAzkQJEyI6nSat2XHn3VDN4qTLnR4SGEoCiANw5g1ybc1aduvTYgCkiKkQAXhDEAAYJaVlwS0UlAAs4AHcAJQ4VDDxODKg3XRhgPBsHJyz09Fy83VYIBCU4NA4AOjQ4AHM8AAMAFXiOPRzEG0QAEnpsislEAEMwABMhqAByJUQORzAAQk6aCV0pjjQlfp1qllqwesaW9q7e-omMIdWxx6gp2YWYZdX1p23du4WNJJEA

](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAWxAG1gBzQTwBRgjICMANIocgEwCUiA3gFCIuIBOAplCG0pcYgBUFIlQDcjAL6NGoSLASIAzkQJEyI6nSat2XHn3VDN4qTLnR4SGEoCiANw5g1ybc1aduvTYgCkiKkQAXhDEAAYJaVlwS0UlAAs4AHcAJQ4VDDxODKg3XRhgPBsHJyz09Fy83VYIBCU4NA4AOjQ4AHM8AAMAFXiOPRzEG0QAEnpsislEAEMwABMhqAByJUQORzAAQk6aCV0pjjQlfp1qllqwesaW9q7e-omMIdWxx6gp2YWYZdX1p23du4WNJJEA)

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/721/aula/134/compilado#60b5b86af7dc4e268b120082b45f8ee2 "🚀 Para ir além")🚀 Para ir além

- 🌐 Type Inference (TypeScript Documentation)

[

Documentation - Type Inference

How code flow analysis works in TypeScript

![Documentation - Type Inference](https://www.typescriptlang.org/icons/icon-512x512.png?v=8944a05a8b601855de116c8a56d3b3ae)

https://www.typescriptlang.org/docs/handbook/type-inference.html

](https://www.typescriptlang.org/docs/handbook/type-inference.html)
