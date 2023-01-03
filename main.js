 
    //login Button event handler section
    const loginBtn=document.getElementById('login');
    loginBtn.addEventListener("click", function(){
        const mail = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        if(mail === "" || password === ""){
            alert("UserName or Password is incorrect!");
        }
         else{
            const loginArea=document.getElementById('login-area');
            loginArea.style.display='none';
            const transactionArea=document.getElementById('transaction-area');
            transactionArea.style.display='block';
        }
        
    })

  //login pages logo resizing section
             const logoMoving=document.getElementById('logo');
             logoMoving.addEventListener('click', function(){
                  
                  logoMoving.style.width='150px';
                  logoMoving.style.height='100px'
             })
 //deposit button event handler section
             const depositBtn=document.getElementById('deposit');
             depositBtn.addEventListener('click', function(){
                //   const depositNumber=getInputNumber('depositAmount');
             //Minimize 2 lines below using function//
             const depositAmount=document.getElementById('depositAmount').value;
             const depositNumber=parseFloat(depositAmount);
                     
                  if(depositNumber < 0 || depositAmount === ""){
                       alert("Deposit Number cannot be Negative or Empty");
                  }
                  else{
                       
             updateSpanText('currentDeposit', depositNumber);
             updateSpanText('currentBalance', depositNumber);
                                 /////This section minimize by function/////
             // const currentDeposit=document.getElementById('currentDeposit').innerText;
             // const currentDepositNumber=parseFloat(currentDeposit);
             // const totalDeposit=currentDepositNumber+depositNumber;
             // document.getElementById('currentDeposit').innerText=totalDeposit;

             // const currentBalance=document.getElementById('currentBalance').innerText;
             // const currentBalanceNum=parseFloat(currentBalance);
             // const totalBalance=currentBalanceNum+depositNumber;
             // document.getElementById('currentBalance').innerText=totalBalance;

             document.getElementById('depositAmount').value="0";
                  }

            

         })
          //Withdraw Section Start from here
         const withdrawBtn=document.getElementById('withdraw');
                  withdrawBtn.addEventListener('click', function(e){

                    //    const withdrawNumber=getInputNumber("withdrawAmount");
                        const withdrawAmount = document.getElementById('withdrawAmount').value;
                        const withdrawNumber = parseFloat(withdrawAmount);
                        
                     if( withdrawNumber < 0 || withdrawAmount === "" ){
                       alert("Withdraw number cannot be Negative or Empty");
                     }
                     else{
                       updateSpanText('currentWithdraw', withdrawNumber);
                       updateAfterWithdrawBalance('currentBalance', withdrawNumber);
                                 //Minimize 2 lines below using function//
                       // const withdrawAmount=document.getElementById('withdrawAmount').value;
                       // const withdrawAmountNumber=parseInt(withdrawAmount);
                       document.getElementById('withdrawAmount').value="0";
                     }
                       
                  });
                 



         //Function for GetInput Transaction//
         function getInputNumber(id){
             const amount=document.getElementById(id).value;
             const amountNumber=parseFloat(amount);
             return amountNumber;
         }

         // Function for Deposit Transaction//
         function updateSpanText(id, newNumber){
             const current=document.getElementById(id).innerText;
             const  currentNumber=parseFloat(current);
             const totalAmount=currentNumber+newNumber;
             document.getElementById(id).innerText=totalAmount;
         }
         //After withdraw Total Balance

         function updateAfterWithdrawBalance(id, newNumber){
             const current=document.getElementById(id).innerText;
             const  currentNumber=parseFloat(current);
             const totalAmount=currentNumber-newNumber;
             document.getElementById(id).innerText=totalAmount;
         }


//logout Section

const logOut = document.getElementById("logout");
logOut.addEventListener('click', function(id){
    console.log("Someone clicked me");
            const loginArea=document.getElementById('login-area');
            loginArea.style.display='block';
            const transactionArea=document.getElementById('transaction-area');
            transactionArea.style.display='none';
    
});
const createAcct = document.getElementById("createAccount");
createAcct.addEventListener('click', function(){
    console.log("Someone clicked me");
    const loginArea=document.getElementById('login-area');
    loginArea.style.display='none';
    const signupArea=document.getElementById('signup-area-1');
    signupArea.style.display='block';
    
});

//Store Create Account Data From SignUpDataForm

document.getElementById("accountDataForm").addEventListener("submit", function(){
    submitData();
});

function submitData (e){
    const getInputValue = id => document.getElementById(id).value;
    const firstName =getInputValue("firstN");
    const lastName = getInputValue("lastN");
    const fullName = `${firstName} ${lastName}`;
    const dateOfBirth = getInputValue("birth-date");
    const mobileNumber = getInputValue("m-number");
    const newPassword = getInputValue("n-password");
    const id = Math.floor(Math.random()*100000000) + '';

    const user = {id, fullName, dateOfBirth, mobileNumber, newPassword};

    let users = [];
  if (localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem('users'));
  }
  issues.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  document.getElementById('accountDataForm').reset();
  e.preventDefault();
  
  
}
console.log(user);
