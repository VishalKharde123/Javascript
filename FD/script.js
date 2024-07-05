document.addEventListener("DOMContentLoaded", function () {
    console.log("SDJ");
    var addButton = document.getElementById("AddButton");

    function addFeedback() {
        var name = prompt("Enter your name");
        var pos = prompt("Enter your position");
        var message = prompt("Enter your message");
        console.log(name + pos + message);

        var feedback = document.createElement('p');

        var container = document.getElementById("container");

        var rs = "<div><h3>" + name + "</h3></div> <div><h5> " + pos + "</h5></div>" + message;


        feedback.innerHTML = rs;

        feedback.style.border = '2px solid black';
        feedback.style.width = '30%';
        feedback.style.borderRadius = '10px';

        container.appendChild(feedback);
    }

    addButton.addEventListener('click', addFeedback);
});