function openInNewTab(url) {
    window.open(url, '_blank');
  }

function redirectTo(url) {
  window.location.href = url;
}
  

// window dragging
// window.addEventListener("DOMContentLoaded", function() {
//     // your code here
//     var draggableElement = document.getElementById("draggable");
//     var offsetX = 0;
//     var offsetY = 0;
//     var isDragging = false;
  
//     draggableElement.addEventListener("mousedown", function(e) {
//       offsetX = e.clientX - draggableElement.offsetLeft;
//       offsetY = e.clientY - draggableElement.offsetTop;
//       isDragging = true;
//       draggableElement.style.cursor = "grabbing";
//     });
  
//     document.addEventListener("mousemove", function(e) {
//       if (isDragging) {
//         var x = e.clientX - offsetX;
//         var y = e.clientY - offsetY;
//         draggableElement.style.left = x + "px";
//         draggableElement.style.top = y + "px";
//       }
//     });
  
//     document.addEventListener("mouseup", function() {
//       isDragging = false;
//       draggableElement.style.cursor = "move";
//     });
//   });
  