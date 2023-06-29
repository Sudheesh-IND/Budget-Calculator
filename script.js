
//signup
function signup(){
     Name=signupName.value
     Username=signupUser.value
     Password=signupPass.value
     
     

     data={
        Name,
        Username,
        Password,
     }

     if(Username==0||Name==0||Password==0){
        invalid.innerHTML='Please fill all credentials'
     }else{
        if(Username in localStorage){
            invalid.innerHTML='Username already present'
         }else{
            window.localStorage.setItem(Username,JSON.stringify(data))
            alert('Registered Successfully')
            window.location='./index.html'
            
         }
     }
     localStorage.setItem('budgetDisName',Name)
     localStorage.setItem('budgetDisUser',Username)
     
}


//login
function login(){

   username=loginUser.value
   password=loginPass.value
   
   
   if(username==0||password==0){
      invalidLogin.innerHTML='Please fill all fields'
   }else{
      if(username in localStorage){
         
         loginData=JSON.parse(localStorage.getItem(username))
         
         if(loginData.Password==password){
            window.location='./home.html'
             alert('Login successful')
         }else{
            invalidLogin.innerHTML='Password incorrect'
         }

         // headName.innerHTML=`Account: ${loginData.username}` 
         
      } else{
         invalidLogin.innerHTML='Username incorrect'
      }
     
     
      
   }
   
}

disName=localStorage.getItem('budgetDisName')
disUser=localStorage.getItem('budgetDisUser')
homeHead.innerHTML=`Name: ${disName}`
homeUser.innerHTML=`Username: ${disUser}`
localStorage.setItem('BalanceBudget',income.value)
balanceBudget=localStorage.getItem('BalanceBudget')


function addIncome(){
  
   Source=source.value
   Income=parseInt(income.value)

    if(Source==" " ||Income==" "){
      invalidIncome.innerHTML=`Please fill details`
      balanceAmount.style.backgroundColor='red'
    }else{
      const incomeTable=document.getElementById('displayIncomePortion')
      row=incomeTable.insertRow(-1)
  
      source1=row.insertCell(0)
      income1=row.insertCell(1)
  
      source1.innerHTML=Source
      income1.innerHTML=Income

      if(balanceBudget==0){
         balance=Income
         balanceBudget=localStorage.setItem('BalanceBudget',balance)
         balanceAmount.value=balance
      }else{
        remaining=localStorage.getItem('BalanceBudget')
        balance2=parseInt(remaining)+Income
        localStorage.setItem('BalanceBudget',balance2)
        balanceAmount.value=balance2
      }
   
   
      balanceAmount.style.backgroundColor='green'
      balanceAmount.style.color='white'
      balanceAmount.style.fontSize='2rem'

      invalidIncome.innerHTML=``
    }

    
   
    document.getElementById('incomeForm').reset()
}

// Expence


function reduceExpense(){
   Category=category.value
   Expense=amount.value
   
   balance=localStorage.getItem('BalanceBudget')
   Balance=parseInt(balance)
   
   if(Balance<Expense){
      invalidExpense.innerHTML=`Insufficient Balance`
   }
   else{
      
      remainingAmount=Balance-Expense
      balanceAmount.value=remainingAmount
      localStorage.setItem('BalanceBudget',remainingAmount)

      balanceAmount.style.backgroundColor='red'
      balanceAmount.style.color='white'
      balanceAmount.style.fontSize='2rem'

      const displayExpense=document.getElementById('displayExpense')
      expenseTable=displayExpense.insertRow(-1)
      category1=expenseTable.insertCell(0)
      expense1=expenseTable.insertCell(1)

      category1.innerHTML=Category
      expense1.innerHTML=Expense

      invalidExpense.innerHTML=``
   } 
   document.getElementById('expenseReset').reset()
}

//logout
function logout(){
   localStorage.clear()
   window.location='./index.html'
     alert('Logging out?')
}

//clear all
function clearAll(){
   window.location='./home.html'
}
