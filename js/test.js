//variables
let paypal = document.getElementById('paypal');
let amazon = document.getElementById('amazon');
let bitcoin = document.getElementById('bitcoin');
let payment = document.getElementById('payment');
let creditCard = document.getElementById('credit-card')
let otherInterest = document.getElementById('other-intrest');
let otherCheckBox = document.getElementById('other-check')
let errorBox = document.getElementById('errorBox');
let name = document.getElementById('name');
let email = document.getElementById('email');
let zip = document.getElementById('zip');
let ccNum = document.getElementById('cc_num');
let cvv = document.getElementById('cvv');

//name not a num error message
let nameErrorNAN = document.createElement('p');
nameErrorNAN.innerHTML = "*Name can not contain numbers.";
nameErrorNAN.setAttribute('id', 'error');
nameErrorNAN.style.display = 'none';

//name length error message
let nameErrorP = document.createElement('p');
nameErrorP.innerHTML = "*Name must be at least one character long.";
nameErrorP.setAttribute('id', 'error');
nameErrorP.style.display = 'none';


//email has @ error message
let emailErrorP = document.createElement('p');
emailErrorP.innerHTML = "* Must provide a valid email.";
emailErrorP.setAttribute('id', 'error');
emailErrorP.style.display = 'none';

//zip length error message
let zipLengthError = document.createElement('p');
zipLengthError.innerHTML = "*Zip Code must contain 5 digits.";
zipLengthError.setAttribute('id', 'error');
zipLengthError.style.display = 'none';

//zip is num error message
let zipErrorP = document.createElement('p');
zipErrorP.innerHTML = "*Zip Code must only contain numbers.";
zipErrorP.setAttribute('id', 'error');
zipErrorP.style.display = 'none';

//cc length error message
let ccLengthError = document.createElement('p');
ccLengthError.innerHTML = "* Credit Card must be between 13 and 16 digits long.";
ccLengthError.setAttribute('id', 'error');
ccLengthError.style.display = 'none';

//cc is num error message
let ccErrorP = document.createElement('p');
ccErrorP.innerHTML = "* Credit Card must only contain numbers.";
ccErrorP.setAttribute('id', 'error');
ccErrorP.style.display = 'none';

//CVV length error message
let cvvLengthError = document.createElement('p');
cvvLengthError.innerHTML = "* CVV must be 3 digits long.";
cvvLengthError.setAttribute('id', 'error');
cvvLengthError.style.display = 'none';

//CVV is num error message
let cvvErrorP = document.createElement('p');
cvvErrorP.innerHTML = "* CVV must only contain numbers.";
cvvErrorP.setAttribute('id', 'error');
cvvErrorP.style.display = 'none';  


//append error messages to errorBox div
errorBox.appendChild(nameErrorNAN);
errorBox.appendChild(nameErrorP);
errorBox.appendChild(emailErrorP);
errorBox.appendChild(zipLengthError);
errorBox.appendChild(zipErrorP);
errorBox.appendChild(ccLengthError);
errorBox.appendChild(ccErrorP);
errorBox.appendChild(cvvLengthError);
errorBox.appendChild(cvvErrorP);

//validate name
name.addEventListener('blur', (event) => {
    let nameValue = event.target.value;
    for(let n = 0; n < nameValue.length; n+=1){
        if(isNaN(nameValue[n]) == false){
            nameErrorNAN.style.display = 'block';
        }else {
            nameErrorNAN.style.display = 'none';
        }
    }
    if(nameValue.length < 2){
        nameErrorP.style.display = 'block';
    }else {
        nameErrorP.style.display = 'none';
    }
});

//validate email
function emailIsValid (email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

email.addEventListener('blur', (event) => {
    let emailValue = event.target.value;
    if(emailIsValid(emailValue) == true){
        emailErrorP.style.display = 'none';
    }else{
        emailErrorP.style.display = 'block';
    }
   
});

//validate zip
zip.addEventListener('blur', (event) => {
    let zipValue = event.target.value;
    for(let n = 0; n < zipValue.length; n+=1){
        if(isNaN(zipValue) == true){
            zipErrorP.style.display = 'block';
        }else{
            zipErrorP.style.display = 'none';
        }
    };
    if(zipValue.length != 5){
        zipLengthError.style.display = 'block';
    }else{
        zipLengthError.style.display = 'none';
    }
});


//Adds text area if other is selected in interests fieldset 
 otherCheckBox.onclick = () =>{
        if(otherCheckBox.checked == true){
        otherInterest.style.display = 'block';
    } else {
        otherInterest.style.display = 'none';
    }
};



//Adds or removes validation for CC, paypal, amazon, bitcoin payments as needed
payment.addEventListener('click', () => {
    if(payment.value === 'credit card') {
        creditCard.style.display = 'block';
        if(bitcoin.style.display == 'block' || amazon.style.display == 'block' || paypal.style.display == 'block'){
            bitcoin.style.display = 'none';
            amazon.style.display = 'none';
            paypal.style.display = 'none';
        }
    
    } else if(payment.value === 'paypal'){
       paypal.style.display = 'block';
       if(bitcoin.style.display == 'block' || amazon.style.display == 'block' || creditCard.style.display == 'block' ){
        bitcoin.style.display = 'none';
        amazon.style.display = 'none';
        creditCard.style.display = 'none';
       };
       
    }else if (payment.value === 'bitcoin'){
        bitcoin.style.display = 'block';
        if(amazon.style.display == 'block' || paypal.style.display == 'block' || creditCard.style.display == 'block' ){
            paypal.style.display = 'none';
            amazon.style.display = 'none';
            creditCard.style.display = 'none';
        };
        
    }else if (payment.value === 'amazon'){
        amazon.style.display = 'block';
        if(bitcoin.style.display == 'block' || paypal.style.display == 'block' || creditCard.style.display == 'block' ){
            bitcoin.style.display = 'none';
            paypal.style.display = 'none';
            creditCard.style.display = 'none';
        };
        
    };
});

//validate cc number
ccNum.addEventListener('blur', (event) => {
    let ccValue = event.target.value;
    for( let n = 0; n < ccValue.length; n+=1){
        if(isNaN(ccValue[n])){
            ccErrorP.style.display = 'block';
        } else {
            ccErrorP.style.display = 'none';
        }
    };
    if(ccValue.length >= 13 && ccValue.length <= 16){
        ccLengthError.style.display = 'none';
    } else {
        ccLengthError.style.display = 'block';
    }
});

//validate cvv
cvv.addEventListener('blur', (event) =>{
    let cvvValue = event.target.value;
    for( let n = 0; n < cvvValue; n+=1){
        if(isNaN(cvvValue[n])){
            cvvErrorP.style.display = 'block';
        }else{
            cvvErrorP.style.display = 'none';
        }
    };
    if(cvvValue.length != 3){
        cvvLengthError.style.display = 'block';
    }else{
        cvvLengthError.style.display = 'none';
    }
})





    


    
  





