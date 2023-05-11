function openInNewTab(url) {
    window.open(url, '_blank');
  }

function redirectTo(url) {
  window.location.href = url;
}
  
  
window.onload = function() {
    const button1 = document.querySelector("#button1");
    const button2 = document.querySelector("#button2");
    const content = document.querySelector("#content");

    button1.addEventListener("click", function() {
    content.innerHTML = "<p>You clicked Button 1!</p>";
    });

    button2.addEventListener("click", function() {
    content.innerHTML = "<p>You clicked Button 2!</p>";
    });
  }