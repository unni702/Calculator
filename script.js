function clickBtn(val) {
  if(val===00){
    document.getElementById('screen').value+=00
  }
  document.getElementById('screen').value+=val
}
function screenClear(){
  document.getElementById('screen').value=""
}
function equalBtn() {
  let val = document.getElementById('screen').value
  let result = eval(val)
  document.getElementById('screen').value = result
}
function delBtn(){
  let delValue=document.getElementById('screen')
  delValue.value=delValue.value.slice(0, -1)
}