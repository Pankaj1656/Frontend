const imgBox = document.querySelector(".imgBox");

const whiteboxes = document.querySelectorAll(".whitebox");

imgBox.addEventListener("dragstart", (e) => {
  console.log("DragStart has been triggered");
  
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  console.log("DragEnd has been triggered");
  e.target.className = "imgBox";
});

for (whitebox of whiteboxes) {
  whitebox.addEventListener("dragover", (e) => {
    
    e.preventDefault();
    console.log("Dragover has beeen triggered");
  });
  whitebox.addEventListener("dragenter", (e) => {
      e.target.className+=' dashed'
    console.log("Dragenter has beeen triggered");
  });
  whitebox.addEventListener("dragleave", (e) => {
    console.log("Dragleave has  been triggered");
    e.target.className='whitebox';
  });
  whitebox.addEventListener("drop", (e) => {
    console.log("Drop has  been triggered");
    e.target.append(imgBox);
  });
}
