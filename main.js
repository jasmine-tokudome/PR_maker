const interests = ["ゲーム","アニメ","プログラミング"]
const specialities = ["寝ること","食べること","運動すること"]
const greetings = ["よろしくね","お手柔らかに","押忍！"]
const button = document.querySelector("#button");
button.addEventListener("click", function(){
    const name = document.querySelector("#name").value;
    const message = `こんにちは、私の名前は${name}です。`
    const output = document.querySelector("#output");
    output.textContent = message;
});
