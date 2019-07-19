var standard_input = process.stdin;
standard_input.setEncoding("utf-8");

console.log("Digite uma palavra:\n");

standard_input.on("data", function(data) {
  if(data === "exit") {
    console.log("sair");
    process.exit();
  } else {
    console.log("Determinando menor tamanho possivel da string com a palavra " + data + "\n");
    var substringText = Array.from(shortestSubstring(data)).toString().split(',').join('');
    var substringSize = shortestSubstring(data).size;
    console.log(`Menor substring é: ${substringText}, contendo ${substringSize} caracteres`);
    process.exit();
  }
})

function shortestSubstring(s){
  var shortest = new Set(s);
  return shortest;
}