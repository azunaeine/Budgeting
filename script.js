// Selectors
const inputBalance= document.querySelector(".balance")
const expenseName= document.querySelector(".expense-name");
const expenseAmt= document.querySelector(".expense-amt")
const form= document.querySelector("form");
const expenseContainer= document.querySelector(".expense-sub-container");
const totalBalance= document.querySelector(".total-balance");


// Event Listeners
form.addEventListener("submit", (event)=> {
    addNewExpense(event)
});



// Functions
function addNewExpense(event){
    event.preventDefault();
    
    if(inputBalance.value){
        totalBalance.innerHTML= parseInt(totalBalance.innerHTML) + parseInt(inputBalance.value);
        newExpense();
        newExpense(inputBalance.value);

        inputBalance.value= "";
        expenseName.value= "";
        expenseAmt.value= "";
    }
    else{
          newExpense();

          inputBalance.value= "";
        expenseName.value= "";
        expenseAmt.value= "";
    }
}


function newExpense(addedBalance){
    if(addedBalance){
        const expense= `
        <div class="main-expense">
            <div>
                <h4>Balance Added</h4>
                <p>${new Date().toLocaleString()}</p>
            </div>
            <h4 class="amt"><span style="color: #70C27D">+</span>$<span>${addedBalance}</span></h4>
        </div>
        `
    
        expenseContainer.insertAdjacentHTML("afterbegin", expense);
    }
    else{

    const expense= `
    <div class="main-expense">
        <div>
            <h4>${expenseName.value}</h4>
            <p>${new Date().toLocaleString()}</p>
        </div>
        <h4 class="amt"><span style="color: red">-</span>$<span>${expenseAmt.value}</span></h4>
    </div>
    `

    expenseContainer.insertAdjacentHTML("afterbegin", expense);

    const newBalance= parseInt(totalBalance.innerHTML) - parseInt(expenseAmt.value);
    totalBalance.innerHTML= newBalance;
    }

}