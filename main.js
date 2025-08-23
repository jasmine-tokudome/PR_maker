const interests = ["ゲーム","アニメ","プログラミング"]
const specialities = ["寝ること","食べること","運動すること"]
const greetings = ["よろしくね","お手柔らかに","押忍！"]
const button = document.querySelector("#button");
button.addEventListener("click", function(){
    const name = document.querySelector("#name").value;
    const index1 = Math.floor(Math.random() * interests.length);
    const index2 = Math.floor(Math.random() * specialities.length);
    const index3 = Math.floor(Math.random() * greetings.length);
    const interest = interests[index1];
    const speciality = interests[index2];
    const greeting = interests[index3];
    const message = `こんにちは、私の名前は${name}です。`
    const output = document.querySelector("#output");
    output.textContent = message;
});
