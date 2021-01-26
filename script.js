//login button event handler

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});


//deposite tbn handleer

const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click',function() {

    //read data from  deposit last portion
 

    //read data from deposit first portion
    //read data from current balance first portion
   const depositAmountNumber = inputAmount('depositAmount');
    spanAmount('currentDeposit',depositAmountNumber);
    spanAmount('currentBalance',depositAmountNumber);

});

const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {
     const withdrawAmountNumber =inputAmount('withdrawAmount');
    spanAmount('currentWithdraw',withdrawAmountNumber);
    spanAmount('currentBalance', -1* withdrawAmountNumber);
})

function inputAmount(id) {
    const withdrawAmount = document.getElementById(id).value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
    document.getElementById(id).value="";
    return withdrawAmountNumber;
}

function spanAmount(id, depositAmountNumber) {
    const currentAmount = document.getElementById(id).innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    const totalAmount = depositAmountNumber+currentAmountNumber ;
    document.getElementById(id).innerText= totalAmount;
}