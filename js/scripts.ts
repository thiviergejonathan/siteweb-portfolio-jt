const testButton = document.getElementById('testButton');
const testDiv = document.getElementById('testDiv');


function alertHello() {
    alert('Hello world!');
}
console.log(testButton);
if (testButton !== null) {
    testButton.onclick = alertHello;
}
