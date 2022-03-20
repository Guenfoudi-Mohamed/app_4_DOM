// app_4

const inpEmail = document.querySelector('body section .input_validation .inpEmail');
const icons = document.querySelectorAll('body section .input_validation a');
const demo = document.querySelector('body section .input_validation + p.demo');
const arr = ['@','m','a','i','l','.','c','o','m'];
    //function inputValidation 
function inputValidation(){
    inpEmail.value = inpEmail.value.toLowerCase().trim();
    if(0 == inpEmail.value.length){
        demo.textContent = '';
        icons[1].style.cssText = `visibility: hidden;`;
        icons[0].style.cssText = `visibility: hidden;`;
    }
    else if(inpEmail.value.length < 18 ){        
        demo.style.setProperty('color','red');
        demo.textContent = `Sorry, Please Enter Valid Email Address.`;
        icons[1].style.cssText = `background-color:red;color:#fff;visibility: visible;`;
        icons[0].style.cssText = `visibility: hidden;`;
    }
    else if(inpEmail.value.length >= 18 ){
        let conteur = 0;
        let bool = false;
        for(let i = 0;i<inpEmail.value.length;i++){
            if(arr[0] == inpEmail.value[i]){
                if((inpEmail.value[i-1] == arr[arr.length-4]) || (inpEmail.value[i+1] == arr[arr.length-4])){bool=true;continue;}
                conteur++;
                continue;
            }
        };
        if(bool == true){bool=false;conteur=0;}
        if(conteur == 1){
            for(let i = arr.length-1;i>0;i--){
                if(inpEmail.value[inpEmail.value.length-i] == arr[conteur]){
                    conteur++;  
                }
                else{
                    break;
                }
            };
            if(conteur == 9){
                icons[1].style.cssText = `visibility:hidden;`;
                icons[0].style.cssText = `background-color:rgb(93, 155, 0);color:#fff;visibility: visible;`;
                demo.style.setProperty('color','rgb(154, 255, 0)');
                demo.textContent = `Your Email Address is Valid.`;
            }
            else{
                icons[0].style.cssText = `visibility:hidden;`;
                icons[1].style.cssText = `background-color:red;color:#fff;visibility: visible;`;
                demo.style.setProperty('color','red');
                demo.textContent = `Sorry, Please Enter Valid Email Address.`;
                conteur == 0;
            }
        }
        else{
            icons[0].style.cssText = `visibility:hidden;`;
            icons[1].style.cssText = `background-color:red;color:#fff;visibility: visible;`;
            demo.style.setProperty('color','red');
            demo.textContent = `Sorry, Please Enter Valid Email Address.`;
            conteur == 0;
        };
    };
};
    //add event for inpEmail
inpEmail.addEventListener('keyup',inputValidation);
inpEmail.addEventListener('keydown',inputValidation);
    //add event for window
window.addEventListener('load',function(){
    inpEmail.value='';
    inpEmail.focus();
});