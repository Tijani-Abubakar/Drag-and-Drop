let lists = document.querySelectorAll('.list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');


Array.from(lists).forEach(function(list)  {
    list.addEventListener('dragstart', function(e) {
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e) {
            rightBox.appendChild(selected);
            selected = null;
        });


        leftBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e) {
            leftBox.appendChild(selected);
            selected = null;
        })
    })
})


// let lists = document.querySelectorAll('.list');
// let rightBox = document.getElementById('right');
// let leftBox = document.getElementById('left');
// let selected = null;

// // Dragover event listener for rightBox
// rightBox.addEventListener("dragover", function(e) {
//     e.preventDefault();
// });

// // Drop event listener for rightBox
// rightBox.addEventListener("drop", function(e) {
//     rightBox.appendChild(selected);
//     selected = null;
// });

// // Dragover event listener for leftBox
// leftBox.addEventListener("dragover", function(e) {
//     e.preventDefault();
// });

// // Drop event listener for leftBox
// leftBox.addEventListener("drop", function(e) {
//     leftBox.appendChild(selected);
//     selected = null;
// });

// // Attach dragstart event listener to each list item
// Array.from(lists).forEach(function(list) {
//     list.addEventListener('dragstart', function(e) {
//         selected = e.target;
//     });
// });


