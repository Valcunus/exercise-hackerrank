var standard_input = process.stdin;
standard_input.setEncoding("utf-8");

console.log("Digite uma palavra:");

standard_input.on("data", function(data) {
  if(data === "exit") {
    console.log("sair");
    process.exit();
  } else {
    console.log("Determinando menor tamanho possivel da string com a palavra " + data);
    var substring = new Set(data.trim());
    console.log(substring.size);
    process.exit();
  }
})