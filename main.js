let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

const iputElement =  document.getElementById('inputField');


addToDoButton.addEventListener('click',function(){
  let toDoText = inputField.value.trim();
  if (toDoText !== ''){

      let paragraph = document.createElement('p');
      paragraph.innerText = toDoText;
      toDoContainer.appendChild(paragraph);
      inputField.value = '';
  


paragraph.addEventListener('click', function(){

  paragraph.style.textDecoration = 'line-through';

});


paragraph.addEventListener('dblclick', function(){

paragraph.remove();

const iputElement =  document.getElementById



});
}
});



