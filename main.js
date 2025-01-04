let totalMarks = document.getElementById("totalMarks");
let subjectMarks =document.getElementById("subjectMarks");
let massege = document.querySelector(".massege");
let percentage ;
const btn = document.querySelector(".btn");

const calculate = ()=>{

   if(totalMarks.value == ''){
    totalMarks.style.border = '2px solid red';
    massege.innerHTML ='';
 
   }
   else{

   }
   if(subjectMarks.value == ''){
    subjectMarks.style.border = '2px solid red';
    massege.innerHTML ='';
       
   }
   else{
    
    percentage =Math.floor((subjectMarks.value/totalMarks.value) * 100);
   
    massege.innerHTML = `Congratulations ! Your Percentage is ${percentage}%;`

    subjectMarks.style.border = ' 2px solid black';
    totalMarks.style.border = ' 2px solid black';
    subjectMarks.value = '';
    totalMarks.value = '';

   }
}
btn.addEventListener('click', calculate);