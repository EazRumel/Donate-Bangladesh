function getInputById(id){
  const inputValue = document.getElementById(id).value;
  console.log(inputValue,id)
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}
function getTextById(id){
const textValue = document.getElementById(id).innerText
const textNumber = parseFloat(textValue);
return textNumber;
}

function showSectionById(id){
  document.getElementById('history-section').classList.add('hidden');
  document.getElementById('main-section').classList.add('hidden');
  //to make it visible
  document.getElementById(id).classList.remove('hidden')
}
console.log('function added')