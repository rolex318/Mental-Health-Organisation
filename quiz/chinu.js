let data = [
    {
        Q: "Q : What do you call a cat that's a good listener?",
        a: "Purr-fect Counselor",
        b: "Whisker Wisdom",
        c: "Meow-therapist",
        d: "Feline Freud",
        ans: "ans3",

    },
    {
        Q : "Q : Why did the bicycle fall ove ?",
        a : "Two-tired",
        b : "Lack of training",
        c : "Balance issues",
        d : "Lost its chain",
        ans : "ans1",

    },
    {
        Q : "Q : Why did the mushroom go to the party ?",
        a : "He was a spore-adic attendee",
        b : " He heard it was a blast",
        c : "He wanted to branch out",
        d : "Because he was a fun-gi",
        ans : "ans4",

    },
    {
        Q : "Q : Why did the scarecrow win an award?",
        a : " Best hairdo",
        b : "Most fashionable",
        c : "Outstanding in his field",
        d : "Bravest",
        ans:"ans3"

    }
] 
 
let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let answers = document.querySelectorAll(".options");
let num = 0;
let score = 0;
let myScore = document.querySelector(".myScore");
let nextBtn = document.getElementById("next");

question.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;

function checkAns(){
 let ans;
  answers.forEach((curElement)=>{
    if(curElement.checked){
        ans = curElement.id;
        console.log(ans);
    }
  })
  return ans;
}

function disSelect(){
    answers.forEach((curElement)=>{
        curElement.checked=false;
    })
}
function next(){

    let checkedAns = checkAns();

    if(checkedAns == data[num].ans){
        score++;
    }
    num++;
    disSelect();

    if(num < data.length){
question.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;
    }else{
        myScore.innerHTML=`You Scored ${score}/${data.length} <br/><br/>
        <button onclick="location.reload()">Play Again</button>`;

        nextBtn.style.display="none";
        document.querySelector(".btn").style.backgroundColor="lightBlue"
    }

}