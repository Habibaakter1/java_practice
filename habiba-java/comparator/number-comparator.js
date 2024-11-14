const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const compareButton = document.getElementById('compare');
const result = document.getElementById('result');
 
compareButton.addEventListener('click',function (){
  const number1=parseInt(number1Input.value);
  const number2=parseInt(number2Input.value);
  if(number1===number2){
     result.innerHTML='<h1>Equal</h1>';
  }
  else if(number1>number2){
    result.innerHTML='<h1>Number1 is greater than Number2</h1>';
  }
  else{
    result.innerHTML='<h1>Number1 is less than Number2</h1>';
  }
  
  // console.log(number1,number2);
  // console.log(typeof number1,number2);
 });