var display = document.getElementById('display');
var disp_up = document.getElementById('display-up');
var button = document.getElementsByClassName('buttons');
var operator = null;
var operand1 =0;
var operand2 =null;
var  temp =0;


function calculator(){
    
    var value =this.getAttribute('data-value');

    switch (value){

        case '+':
            operator ='+';
            operand1=parseFloat(display.textContent);
            disp_up.innerText =display.textContent + operator;
            display.innerText = null;

            break;

        case '-':
            operator ='-';
            operand1=parseFloat(display.textContent);
            disp_up.innerText =display.textContent + operator;
            display.innerText = null;
            break;

        case '*':
            operator ='*';
            operand1=parseFloat(display.textContent);
            disp_up.innerText =display.textContent + operator;
            display.innerText = null;
            break;

        case '/':
            operator ='/';
            operand1=parseFloat(display.textContent);
            disp_up.innerText =display.textContent + operator;
            display.innerText = null;
            break;

        case '%':
            operator ='%';
            operand1=parseFloat(display.textContent);
            disp_up.innerText =display.textContent + operator;
            display.innerText = null;
            break;

        case 'C':
            operator ='C';
            display.innerText = null;
            disp_up.innerText =0;
            temp=0;
            break;

        case '+/-':
            count=temp;
            if (count%2 == 0){
                operator ='-';
                operand1=parseFloat(display.textContent);
                if (display.innerText == '+'){
                        display.innerText='-';
                }
                else{
                    if (display.innerText[0]=='+'){

                        display.innerText = (operator +(display.innerText).slice(1,(display.innerText).length));

                    }
                    else{
                          display.innerText = (operator +display.innerText);
                    }
  
                }   
            }
            else{
                operator='+';
                if (display.innerText == '-'){
                    display.innerText='+';
                }
                else{
                display.innerText = (operator +(display.innerText).slice(1,(display.innerText).length));
                }
                
            }
            
            
            count++;
            temp=count;
            break;


        case '=':
            // disp_up.innerText= ( display.innerText + operator);
            operand2=parseFloat(display.textContent);
            var result =eval('operand1'+ " "+ operator +" "+'operand2');  
            display.innerText=result;
            disp_up.innerText =null ;
            break;

            
            
        default:
            display.innerText += value;


    }

}

for ( var i =0 ; i<button.length; i++){
   

    button[i].addEventListener('click',calculator );
 
}


