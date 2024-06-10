let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
let choice=document.querySelectorAll(".choices");

let options=["rock","paper","scissors"];

choice.forEach((ch)=>{
    ch.addEventListener("click",()=>{

        let comp_idx=Math.floor(Math.random()*3);
        let comp_choice=options[comp_idx];
    
        let user_choice=ch.getAttribute("id");
        
        let user_score=parseInt(user.innerText);
        let comp_score=parseInt(comp.innerText);

        if(user_choice==comp_choice){
            msg.innerText="It's A Tie";
            user_score+=1;
            comp_score+=1;
            user.innerText=`${user_score}`;
            comp.innerText=`${comp_score}`;
        }
        else{
            if((user_choice=="rock" && comp_choice=="paper") || (user_choice=="paper" && comp_choice=="scissors") || (user_choice=="scissors" && comp_choice=="rock")){
                msg.innerText=`Comp. wins!! ${comp_choice} beats ${user_choice}`;
                comp_score+=1;
                comp.innerText=`${comp_score}`;
            }
            else{
                msg.innerText=`You. win!! ${user_choice} beats ${comp_choice}`;
                user_score+=1;
                user.innerText=`${user_score}`;
            }
        }

    });
});