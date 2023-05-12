document.addEventListener("DOMContentLoaded", button);

function button() {

    let button = document.createElement("button");
    let btnText = document.createTextNode("Add square!");
    button.className = "button";
    button.appendChild(btnText);
    document.body.appendChild(button);

    let id = 0;


    button.addEventListener("click", buttonClick);
    function buttonClick() {

        id++;

        let square = document.createElement("div");
        square.id = id;
        square.className = "squares";
        let p = document.createElement("p");
        let squareText = document.createTextNode(id);
        p.appendChild(squareText);
        square.appendChild(p);
        document.body.appendChild(square);
        p.style.opacity = "0";


        square.addEventListener("mouseenter", hover);
        function hover() {
            p.style.opacity = "1";
        }


        square.addEventListener("mouseleave", noHover);
        function noHover() {
            p.style.opacity = "0";
        }


        square.addEventListener("click", squareClick);
        function squareClick() {

            let num = Math.floor(Math.random() * 6);

            if (num === 0) {
                square.style.backgroundColor = "red";
            } else if (num === 1) {
                square.style.backgroundColor = "orange";
            } else if (num === 2) {
                square.style.backgroundColor = "yellow";
            } else if (num === 3) {
                square.style.backgroundColor = "green";
            } else if (num === 4) {
                square.style.backgroundColor = "blue";
            } else if (num === 5) {
                square.style.backgroundColor = "purple";
            }
        }


        square.addEventListener("dblclick", squareDoubleClick);
        function squareDoubleClick() {

            if (square.id % 2 === 0) {

                let elementID = parseInt(square.id) + 1;
                let element = document.getElementById(elementID);

                if (element == null) {
                    alert("Square with ID " + elementID + " does not exist.")
                } else {
                    element.parentNode.removeChild(element);
                }
            } else {

                let elementID = parseInt(square.id) - 1;
                let element = document.getElementById(elementID);

                if (element == null) {
                    alert("Square with ID " + elementID + " does not exist.")
                } else {
                    element.parentNode.removeChild(element);
                }
            }
        }
    }
}