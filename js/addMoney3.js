document.getElementById('quota-donation-btn').addEventListener('click',function(){
  console.log('added money')
  const addMoney = getInputById('quota-donation-input');
console.log(addMoney)
if(isNaN(addMoney) || addMoney < 0){
  alert('Sorry,Could not endorse your donation');
  return;
}
if(typeof addMoney === 'number'){
  const balance = getTextById('quota-balance')
  const newBalance = addMoney + balance;
  document.getElementById('quota-balance').innerText = newBalance;
  const accountBalance = getTextById('account-balance');
  const totalAccountBalance = accountBalance - addMoney
  if(totalAccountBalance < 0){
    alert('Sorry!Failed to donate');
    return;
  }
  document.getElementById('account-balance').innerText = totalAccountBalance;
  const now = new Date();
  const time = now.toLocaleTimeString('en-BD',{hour12:false})
  const p = document.createElement('p');
  p.innerText = `Added:${addMoney}Tk. New Balance: ${newBalance}.Time:${time}`;
  console.log(p)
  document.getElementById('history-container').appendChild(p);
}
else{
  alert('Sorry,Failed to donate your money');
}
}
)