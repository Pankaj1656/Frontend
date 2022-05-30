const toDoBlock = document.getElementById("to-do-block");

const task = document.getElementById("header");
const toDoDragStart = (event) => {
	let toDoCardIDBeingDragged=event.target.id
  event.dataTransfer.setData('ToDoCard',toDoCardIDBeingDragged)
}
const allowDrop = (event)=>{
  event.preventDefault()
}
const toDoDrop= (event)=>{
  let toDoCardIDBeingDragged = event.dataTransfer.getData('ToDoCard')
  let toDoCardBeingDropped=document.getElementById(toDoCardIDBeingDragged)
  let parentElement=event.target
  parentElement.appendChild(toDoCardBeingDropped)

}
let idCount=1

const createToDoDiv = (task2,toDoDeadLine) => {
  const toDoCardDiv = document.createElement("div");
  const cardHeader = document.createElement("div");
  const priotityDisplaySpan = document.createElement("span");
  const deadLineDisplay = document.createElement("span");
  const cardBodyDiv = document.createElement("div");
  const cardTitleH5 = document.createElement("h5");
  const deleteButton = document.createElement("a");

  
  

  toDoCardDiv.classList = "card to-do-card";
  cardHeader.classList = "card-header";
  priotityDisplaySpan.classList = "badge rounded-pill bg-warning text-dark";
  cardBodyDiv.classList = "card-body";
  cardTitleH5.classList = "card-title";
  deleteButton.classList = "btn btn-sm btn-danger";

  toDoCardDiv.id = `to-do-card-${idCount}`

  priotityDisplaySpan.innerText = `${task2} Priority`;
  deadLineDisplay.innerText = toDoDeadLine;
  cardTitleH5.innerText = task.value;
  deleteButton.innerText = "Delete";

  switch (task2) {
    case "High":
      priotityDisplaySpan.classList = "badge rounded-pill bg-danger ";
      break;
    case "Medium":
      priotityDisplaySpan.classList = "badge rounded-pill bg-warning text-dark";
      break;
    case "Low":
      priotityDisplaySpan.classList = "badge rounded-pill bg-info text-dark";
      break;
  }
  
  toDoCardDiv.draggable = "true"
toDoCardDiv.addEventListener('dragstart', toDoDragStart)
deleteButton.addEventListener('click', () => toDoCardDiv.style.display = 'none')
  
  
  
  
  toDoCardDiv.appendChild(cardHeader);
  cardHeader.appendChild(priotityDisplaySpan);
  cardHeader.appendChild(deadLineDisplay);
  toDoCardDiv.appendChild(cardBodyDiv);
  cardBodyDiv.appendChild(cardTitleH5);
  cardBodyDiv.appendChild(deleteButton);

  toDoBlock.appendChild(toDoCardDiv);
  idCount++
}

const createToDo = () => {
  const task2 = document.getElementById("priority").value;

  const toDoDeadLine = new Date(
    document.getElementById("todo-deadline").value
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    
  });

  createToDoDiv(task2,toDoDeadLine);
  };
  
function validate(){
  let enterTask =document.getElementById('header').value
  let priority1=document.getElementById('priority').value
  let dateAndTime= document.getElementById('todo-deadline')

  if (enterTask === ''){
    firstNameInvalid.style.display = 'block'
    firstNameValid.style.display = 'none'
  } else {
    firstNameValid.style.display = 'block'
    firstNameInvalid.style.display = 'none'
  }
  
  
}

/* 
	Draggable Elements -
	[draggable = "true"]
	1. ondragStart
	2. ondrag

	Parent Elements (Where you have to drop the draggable element)
	1. onondragover
	2. ondrop
*/




//<div class="card to-do-card" style="border:none ;">
//  <div class="card-header " >
//    <span class="badge rounded-pill bg-warning text-dark " id="colour" >Medium Priority</span>
//    <span  >26-05-2022</span>
//  </div>
//  <div class="card-body">
//    <h5 class="card-title" >Complete revision of Async Await</h5>
//
//    <a class="btn btn-sm btn-danger" >Delete</a>
//  </div>
//</div>













