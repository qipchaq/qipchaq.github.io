// Create a "close" button and append it to each list item
function tagClose() {
    let myNodelist = document.getElementsByClassName("ulLIs");
    // var i;
    for (i = 0; i < myNodelist.length; i++) {
        const span = document.createElement("SPAN");
        const txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}

// Click on a close button to hide the current list item
function close() {
    let close = document.getElementsByClassName("close");
    // var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li");
    li.className = "ulLIs";
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Пожалуйста, напишите задачу!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    tagClose()

    close()

    li.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false)
}

























// // Create a "close" button and append it to each list item
// let myNodelist = document.querySelectorAll("LI");
// // var i;
// for (i = 0; i < myNodelist.length; i++) {
//     const span = document.createElement("SPAN");
//     const txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// function close() {
//     let close = document.getElementsByClassName("close");
//     // var i;
//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function () {
//             const div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
// }

// // Add a "checked" symbol when clicking on a list item
// let list = document.querySelector('ul');
// list.addEventListener('click', function (ev) {
//     if (ev.target.tagName === 'LI') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//     const li = document.createElement("li");
//     const inputValue = document.getElementById("myInput").value;
//     const t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";

//     const span = document.createElement("SPAN");
//     const txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);

//     close()
// }