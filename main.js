const interests = ["明るい","優しい","力強い","魅力的な","前向きな"]
const specialities = ["笑顔","努力","思いやり","言葉","センス"]
const greetings = ["幸せ","安心","元気","勇気","笑顔"]
const button = document.querySelector("#button");
button.addEventListener("click", function(){
    const name = document.querySelector("#name").value;
    const index1 = Math.floor(Math.random() * interests.length);
    const index2 = Math.floor(Math.random() * specialities.length);
    const index3 = Math.floor(Math.random() * greetings.length);
    const interest = interests[index1];
    const speciality = specialities[index2];
    const greeting = greetings[index3];
    const message = `{name}さんは、
    本当に {A} な人で、
    {B} によって周りを {C} にしています。
    `;
    const output = document.querySelector("#output");
    output.textContent = message;
});
