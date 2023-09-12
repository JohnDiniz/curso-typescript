### [](https://hub.driven.com.br/computacao/modulo/86/topico/719/aula/132/compilado#e49d82e56ec3435fa4b5e5d9d4818d6f "🎯 Objetivos")🎯 Objetivos

- Nesta aula aprenderemos:

- Quais problemas (alguns deles) o TypeScript resolve (por que ele foi criado?)
- O que é tipagem e como ela se aplica no contexto do TypeScript.

### [](https://hub.driven.com.br/computacao/modulo/86/topico/719/aula/132/compilado#a03211134e9041b68c6b52e72403b379 "📚 Compilado")📚 Compilado

- Durante os últimos meses aprendemos a criar aplicações full stack incríveis usando todo o poder do HTML, CSS e JavaScript no front-end e do Node, Express e banco de dados (relacionais e não relacionais) no back-end.

- Mas (sempre tem um mas, né?) Conforme nossas aplicações crescem em número de funções, arquivos e pessoas desenvolvedoras, fica cada vez mais difícil manter a aplicação sem _bugs_. Por que isso acontece?

- Isso geralmente acontece porque antes uma única pessoa dev (ou um pequeno time) conseguia ter praticamente todas as informações do projeto na cabeça. Com o aumento de arquivos, demandas, funções, variáveis, camadas, dados e pessoas; se torna praticamente impossível manter tudo isso a par na cabeça (pra falar a verdade, depois de 6 meses ela não lembra nem de como ela própria fez algo - ou seu próprio nome, rs).

- Quando chegamos nesse ponto de trabalhar em um código legado, algo que não produzimos ou não lembramos como funcionava, começam surgir q uestões do tipo:

- O que eu preciso passar pra essa função?
- Que tipo de estrutura esse objeto tem?
- O que isso retorna?
- Onde isso vai? Como funciona? Que tipo precisa ter?

- E daí por diante a coisa se torna complicada de lidar, pois gastamos muito mais tempo lendo código do que produzindo.

- Boa parte desta problemática toda acontece porque, no JavaScript, não tem nada que indique explicitamente o tipo e/ou estrutura de cada variável enquanto você está codando! Lembrando que o JavaScript é uma linguagem fracamente tipada.

- Para resolver este e outros problemas nasceu o TypeScript: o JavaScript com “superpoderes” (você já ouviu isso antes, né? 😅). E um destes superpoderes é o recurso da tipagem (indicar os tipos das variáveis explicitamente).

- Veja no exemplo abaixo como podemos evitar um problema clássico.

```typescript
function somar(num1, num2) {
  return num1 + num2;
}

somar("string", 3); // Só vai dar erro se você testar no browser
```

- Repare como uma simplem função pode dar uma dor de cabeça gigante. O problema aqui é que o JavaScript faz a coerção de tipos e torna o 3 uma string fazendo com que o resultado bizarro da operação seja `“string3”`. Mas na verdade o que queremos aqui é limitar o uso para valores numéricos.

- Como evitar isso?

- Com o poder da tipagem, podemos indicar o que cada variável deveria ser e então, em tempo de desenvolvimento, o próprio TypeScript nos indicará se fizermos uma operação esquisita, como somar números e strings:

```typescript
function somar(num1: number, num2: number) {
  return num1 + num2;
}

somar("banana", 3); // não vai dar não
```

- Agora, ao escrever o nome do parâmetro, também colocamos qual é o tipo esperado escrevendo dois-pontos (`:`**`TIPO`**) seguido pelo tipo do parâmetro!

- Dessa forma, antes mesmo de rodar o código, já sabemos que temos uma operação inconsistente! 😮

- E sabe o melhor de tudo?

- Com as variáveis sendo tipadas, o editor acaba ganhando um pode incrível de dedução (_IntelliSense_)! Sabendo que uma variável é um número, por exemplo, ao apertar `CTRL+Space` o próprio editor vai te sugerir atributos e métodos que são aplicáveis! 😉

### [](https://hub.driven.com.br/computacao/modulo/86/topico/719/aula/132/compilado#4b1dc379a60141d6a8fe0b468076591f "✏️ Exercício: Ué, não pode misturar?")✏️ Exercício: Ué, não pode misturar?

📝 Enunciado

- O código a seguir reproduz um erro clássico que acontece quando estamos desenvolvendo em JavaScript.

- Este erro passa despercebido por falta de indicação, em tempo de desenvolvimento, de que a operação pode não ter o comportamento esperado por conta dos valores arbitrários que podem ser usados.

- Usando o TypeScript, faça a tipagem dos parâmetros para evitar que uma string seja concatenada com um número.

🔗 Link do exercício
[link](https://www.typescriptlang.org/play?noImplicitAny=false&pretty=true#code/GYVwdgxgLglg9mABAZzgWwIYCcAUYRoCMANIvmgEwCUiA3gFCJOJYCmUIWS5hiA1GQIUA3PQC+9ehATIoLVshAAbKBgAmcRAF4U6bDgBEsrDDABzA6QDMVUdLColrAHRK4ZnG0Ur1cW0A)

### [](https://hub.driven.com.br/computacao/modulo/86/topico/719/aula/132/compilado#e471f0345c7b485f805d886bd322956f "🚀 Para ir além")🚀 Para ir além

- 🌐 TypeScript for the New Programmer (TypeScript Documentation)

[link](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
