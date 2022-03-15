function check(){
   var count=0;
   var q1=document.quiz.Question1.value;
   var q2=document.quiz.Question2.value;
   var q3=document.quiz.Question3.value;
   var q4=document.quiz.Question4.value;
   var q5=document.quiz.Question5.value;
   var result=document.getElementById("result");
   var quiz=document.getElementById("quiz");
   if(q1=="Nile") {count++}
   if(q2=="Pacific") {count++}
   if(q3=="Mount Everest") {count++}
   if(q4=="China") {count++}
   if(q5=="6") {count++}
   quiz.style.display='none';
  if(count>=4){
      result.textContent="Yes";
  } else if(count<=3 && count>=2){
      result.textContent="Maybe";
  } else{
      result.textContent="No";
  }
  
}