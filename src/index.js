import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById('add-text').value
  document.getElementById('add-text').value = ''
  const div = document.createElement('div')
  console.log(div)
  alert(inputText)
}

document.getElementById("add-button").addEventListener('click', () => onClickAdd())