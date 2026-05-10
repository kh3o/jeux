// This message appears in the browser console
console.log("JavaScript is linked and working!");

// Find the button from the HTML
const button = document.getElementById("myButton");

// Add an action when the button is clicked
button.addEventListener("click", () => {
    alert("The button was clicked!");
});
