player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn : "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn : "+player2_name;
function send(){
get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
console.log(word);
charat1=word.charAt(1);
length_divide_2=Math.floor(word.lenght/2);
charat2=word.charAt(length_divide_2);
length_minus_1=word.length-1;
charAt3=word.charAt(length_minus_1);
remove_charat1=word.replace(charat1,"_");
remove_charat2=remove_charat1.replace(charat2,"_");
remove_charAt3=remove_charat2.replace(charAt3,"_");
console.log(remove_charAt3); 
question_word="<h4 id='word_display'> q. "+remove_charAt3+"</h4>";
input_box="<br> answers: <input type='text' id='input_check_box'>";
check_button="<br><button class='btn-info' onclick='check()'>check</button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if(answer==word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
}