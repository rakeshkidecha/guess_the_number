let guess_num = document.querySelector("#guess_num");
let check = document.querySelector("#check");
let msg = document.querySelector("#msg");
let result = document.querySelector("#result");
let original_num = document.querySelector("#original_num");
let wining_gif = document.querySelector("#wining_gif");
let play_again = document.querySelector("#play_again");

let ganeret_num = Math.floor(Math.random()*100)+1;
console.log(ganeret_num);
let round = 0;

function check_num(){
    guess_num.focus();
    let guess = parseInt(guess_num.value);
    
    msg.style.animation = 'none';  
    msg.offsetHeight;  
    msg.style.animation = null; 
    

    if(isNaN(guess) || guess < 1 || guess > 100){
        msg.textContent = "Please enter a number between 1 and 100.";
        guess_num.value = "";
        return;
    }

    round ++;


    if(guess === ganeret_num){
        original_num.innerHTML = `Original Number :- ${ganeret_num}`;
        result.innerHTML = `<b>Congratulations!</b><br/><span>You successfully guessed the number.</span><br/>Number of attempts : ${round}`;
        msg.style.display = "none";
        wining_gif.style.display = "block";
        check.style.display = "none"
        setTimeout(()=>{
            wining_gif.style.display = "none";
        },1700)
        play_again.style.display = "inline-block"
        guess_num.value = "";
        return;
    }

    if(guess<ganeret_num){
        msg.innerHTML = `The number you entered is too small. Try a bigger one`;
    }else{
        msg.innerHTML = `The number you entered is too high. Try a lesser one`;
    }

    guess_num.value = "";

}
check.addEventListener("click",(e)=>{
    e.preventDefault();
    check_num();
})

window.onload= ( )=>{
    guess_num.focus();
}

play_again.addEventListener("click",()=>{
    window.location.reload();
})