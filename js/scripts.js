var testButton = document.getElementById('testButton');
var testDiv = document.getElementById('testDiv');
if (testButton) {
    testButton.onclick = function () { return alert('oops!'); };
}
