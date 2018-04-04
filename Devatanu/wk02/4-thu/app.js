var savingsSpan = document.querySelector(".savings-span");
var checkingSpan = document.querySelector(".checking-span");
var withdrawSavingsBtn = document.querySelector(".btn-withdraw-savings");
var depositSavingsBtn = document.querySelector(".btn-deposit-savings");
var withdrawCheckingBtn = document.querySelector(".btn-withdraw-checking");
var depositCheckingBtn = document.querySelector(".btn-deposit-checking");
var savingsInput = document.querySelector(".input-savings");
var checkingInput = document.querySelector(".input-checking");


var withdraw = function(value,primaryAc, secondaryAc){
    if((Account[primaryAc]+Account[secondaryAc])>value){
        if(Account[primaryAc]>value){
            Account[primaryAc] -= value;
        }
        else{
            Account[secondaryAc] -= value - Account[primaryAc];
            Account[primaryAc] = 0;
        }
    }
    else{
        
    }
    updateAccountDisplays();
}

var withdrawSavings = function(value){
    withdraw(value,'savings','checking');
}

var withdrawChecking = function(value){
    withdraw(value,'checking','savings');
}

var Account = {
    savings:500,
    checking:500,
    withdrawSavings: withdrawSavings,
    withdrawChecking: withdrawChecking,
    depositSavings: function(value){
        this.savings += value;
        updateAccountDisplays();
    },
    depositChecking: function(value){
        this.checking += value;
        updateAccountDisplays();
    }
};


var updateAccountDisplays = function(){
    savingsSpan.textContent = `${Number(Account.savings).toFixed(2)}`;
    checkingSpan.textContent = `${Number(Account.checking).toFixed(2)}`;
}

updateAccountDisplays();


withdrawSavingsBtn.addEventListener('click',function(){
    Account.withdrawSavings(savingsInput.value);
});

depositSavingsBtn.addEventListener('click',function(){
    Account.depositSavings(savingsInput.value);
});

withdrawCheckingBtn.addEventListener('click',function(){
    Account.withdrawChecking(checkingInput.value);
});

depositCheckingBtn.addEventListener('click',function(){
    Account.depositChecking(checkingInput.value);
});