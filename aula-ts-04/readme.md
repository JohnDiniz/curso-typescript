### 🎯 Objetivos

- Nesta aula aprenderemos:

- O que é Union Types e como usá-los.

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/722/aula/135/compilado#2a8dce87053d4a56b052d5010b2d6ffe "📚 Compilado")📚 Compilado

- Quando se trata de tipagem com o TypeScript, já temos algumas regrinhas de ouro (também conhecidas como boas práticas):

1.  Não é necessário tipar explicitamente se a inferência der conta de forma simples.

2.  Tipar sempre as assinaturas das funções (principalmente os parâmetros, o retorno em si não é tão relevante por conta da inferência).

3.  Evitar o uso do `any` (afinal, se for pra fazer isso, pra quê usar o TS, né? acaba sendo o equivalente a usar JS puro).

- Entretanto, existem situações onde essas regras não aplicáveis tão facilmente. Um exemplo simples é o retorno da função `prompt()` que podemos usar no navegador para obter informações do usuário.

- Se dermos uma olhada na especificação, ele nos diz que pode retornar `string` ou `null`.

- E agora? Como lidar com estes casos onde há mais de um tipo envolvido?

- Para isso que existe o recurso de Union Types representado pelo _pipe_ (`|`)! Com ele podemos unir todos os tipos possíveis para uma determinada variável, função, etc.

- Para tornar essa questão clara, tome como nota o exemplo a seguir:

```typescript
function printId(id: number) {
  console.log("Your ID is: " + id);
}
```

- Nesta função, perceba que o parâmetro id só pode ser um valor do tipo `number`. Mas imagine que dentro do sistema, em algumas situações o id que vai ser exibido também pode ser representado como uma `string`. Como resolver isso?

- Podemos facilmente adequar esse cenário com o Union Types. Veja:

```typescript
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
```

- Agora conseguimos garantir que o problema foi resolvido. Mas ai podem surgir outros problemas, como o exemplo abaixo:

```typescript
function printId(id: number | string) {
  console.log("Your ID is: " + id.toUpperCase());
}
```

- Perceba que caímos em uma “armadilha” (e sim, o TS neste momento já estaria apontando isso como um problema). Ao tentar chamar a função `toUpperCase()`, estamos assumindo que o id SERÁ uma string, mas isso não é verdade, há 50% de chances de ser um `number`.

- Mais uma vez, para resolver isso, precisamos do que é chamado um Type Guard (guarda de tipos). A ideia é basicamente ser uma verificação do tipo para garantir que a operação não dê problema em tempo de execução.

- Neste caso, o código ficaria:

```typescript
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log("Your ID is: " + id.toUpperCase());
  } else {
    console.log("Your ID is: " + id);
  }
}
```

- Parece redundante, né? Mas perceba aqui que o ganho é de que agora você consegue GARANTIR que essa função não dará erro em execução porque se alguém, em tempo de execução tentar usar a função de forma inadequada, terá problemas.

- É lógico que evitaremos situações como essa, mas nem sempre é tão trivial quanto você está pensando. Veja esse caso:

```typescript
function printId(id: number | string) {
  if (typeof id === "string") {
    if (id.length === 0) return false;
    console.log("Your ID is: " + id.toUpperCase());
  } else {
    if (id <= 0) return false;
    console.log("Your ID is: " + id);
  }
}
```

- E agora?! Adicionamos uma regra de negócio que diz que se o id for uma string, não pode ser vazia; ao mesmo tempo, se o id for um número, ele precisa ser maior que 0. Caso essas condições não sejam satisfeitas, a função retorna `false`. Em outras palavras, função pode retornar um booleano ou nada. Como definir na função?

- O TS aponta essa seguinte observação: `Not all code paths return a value.`

- Novamente, precisamos fazer uso do Union Type:

```typescript
function printId(id: number | string): boolean | undefined {
  if (typeof id === "string") {
    if (id.length === 0) return false;
    console.log("Your ID is: " + id.toUpperCase());
  } else {
    if (id <= 0) return false;
    console.log("Your ID is: " + id);
  }
}
```

- Essa situação continua ruim, pois ainda temos caminhos que não retornam valores e dependendo da configuração do seu TS, isso será alertado como um problema ou não. O ideal nestes casos é evitar essa situação:

```typescript
function printId(id: number | string) {
  if (typeof id === "string") {
    if (id.length === 0) return false;
    console.log("Your ID is: " + id.toUpperCase());
    return true;
  } else {
    if (id <= 0) return false;
    console.log("Your ID is: " + id);
    return true;
  }
}
```

- Começou a complicar um pouquinho, né? rs 😅

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/722/aula/135/compilado#4690925e86c4461f8d26b2d33f34893e "✏️ Exercício: Tipagem para todos os lados - Parte 2")✏️ Exercício: Tipagem para todos os lados - Parte 2

📝 Enunciado

- Tipar é divertido (há controvérsias) e torna o código mais seguro, no entanto, nem sempre é tão fácil de fazer.

- A função `prompt()` do navegador pode retornar `string | null`.

- Tipe o código a seguir e faça as validações e conversões necessárias para que o código seja executado somente se números forem usados.

- Faça quaisquer conversões e alterações necessárias para garantir que o resultado final seja um número. Se não for o caso, exiba uma mensagem dizendo que não é possível executar com tal entrada.

🔗 Link do exercício

[

TS Playground - An online editor for exploring TypeScript and JavaScript

The Playground lets you write TypeScript or JavaScript online in a safe and sharable way.

https://www.typescriptlang.org/play?noImplicitAny=false&pretty=true#code/GYVwdgxgLglg9mABAWxAG1gBzQTwBRgjICMANIocgEwCUiA3gFCIuIBOAplCG0pcYgBUFIlQDcjAL6NGoSLASIAzkQJEyI6nSat2XHn3VDN4qTLnR4SGEoCiANw5g1ybc1aduvTYgCkiKkQAXhDEAAYJaVlwS0UlAAs4AHcAJQ4VDDxODKg3XRhgPBsHJyz09Fy83VYIBCU4NA4AOjQ4AHM8AAMAFXiOPRzEG0QAEnpsislEAEMwABMhqAByJUQORzAAQk6aCV0pjjQlfp1qllqwesaW9q7e-omMIdWxx6gp2YWYZdX1p23du4WNIong8HQggA+BhAxAXJRQTQCIKITBsODITBQPAAIgAYjA2AjEAA5IgAIw4bBxgN08MRlECKLRGKxuIAyhwLgsychKdTaaxYY1EW9gspVPxSIzBSwxQBqFGoDAwbD4Mi0PasBLJNI5Mo5QGSGjgiRAA

](https://www.typescriptlang.org/play?noImplicitAny=false&pretty=true#code/GYVwdgxgLglg9mABAWxAG1gBzQTwBRgjICMANIocgEwCUiA3gFCIuIBOAplCG0pcYgBUFIlQDcjAL6NGoSLASIAzkQJEyI6nSat2XHn3VDN4qTLnR4SGEoCiANw5g1ybc1aduvTYgCkiKkQAXhDEAAYJaVlwS0UlAAs4AHcAJQ4VDDxODKg3XRhgPBsHJyz09Fy83VYIBCU4NA4AOjQ4AHM8AAMAFXiOPRzEG0QAEnpsislEAEMwABMhqAByJUQORzAAQk6aCV0pjjQlfp1qllqwesaW9q7e-omMIdWxx6gp2YWYZdX1p23du4WNIong8HQggA+BhAxAXJRQTQCIKITBsODITBQPAAIgAYjA2AjEAA5IgAIw4bBxgN08MRlECKLRGKxuIAyhwLgsychKdTaaxYY1EW9gspVPxSIzBSwxQBqFGoDAwbD4Mi0PasBLJNI5Mo5QGSGjgiRAA)

###

[](https://hub.driven.com.br/computacao/modulo/86/topico/722/aula/135/compilado#9a4500a780c74e168d7c028ddfe310fa "🚀 Para ir além")🚀 Para ir além

- 🌐 Union Types (TypeScript Documentation)

[

Documentation - Everyday Types

The language primitives.

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
