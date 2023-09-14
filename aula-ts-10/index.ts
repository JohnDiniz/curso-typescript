// Use siglas como T no lugar de TIPO
function identity<TIPO>(value: TIPO): TIPO {
  return value;
}

console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello")); // Hello
console.log(identity<number[]>([1, 2, 3])); // [1, 2, 3]
