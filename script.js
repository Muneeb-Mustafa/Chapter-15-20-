document.getElementById("Simple_alert").onclick= function(){
    alert("Hi, My name is Muneeb Mustafa")
}

// Print_my_name
function Print_name(){
    let myName = document.getElementById("input").value;
    if(!myName){
        alert('Please enter your name first!');
        return;
    }
    document.getElementById('result').innerHTML = myName
}

// Print name of cities
let cities = ["1) Faisalabad","2) Lahore ", "3) Karachi", "4) Islamabad", "5) Burewala", "6) Sheikhupra  ",  "7) Kashmir"];
    document.getElementById("Print_Cities").onclick = function(){
        for (i = 0; i<cities.length; i++){
            document.getElementById("result").innerHTML += cities[i] + "<br>";
        }
    }
    
// Add your city in table
function addCity(){
    let city = document.getElementById("input").value;
    if(!city){
        alert('Please enter your name first!');
        return;
    }
    cities.push(city);
    document.getElementById('result').innerHTML ='<span style = "color: Red; font-size: 20px">' +  city + "</span> has been Successfully added in cities."
}

// Generate Table
// function table(){
//     let num = document.getElementById('input').value;
//     if(!num){
//         prompt("Please enter your name first to generate a table");
//         return;
//     }
//     for(i = 1; i <= 10; i++){
//         `${num} * ${i} = ${num * i}<br>`
//         document.getElementById('result').innerHTML += num;

//     }
// }
function table() {
    let num = document.getElementById('input').value;

    // Check if the input field is empty
    if (!num) {
        alert("Please enter a number to generate a table");
        return;
    }

    // Parse the input to ensure it's a number
    num = parseInt(num);

    // Create a table element
    let tableHTML = '<table class="table table-bordered">';

    // Create table rows and cells for the multiplication table
    for (let i = 1; i <= 10; i++) {
        tableHTML += '<tr>';
        tableHTML += `<td class="center">${num} * ${i}</td>`;
        tableHTML += '<td>=</td>';
        tableHTML += `<td>${num * i}</td>`;
        tableHTML += '</tr>';
    }

    tableHTML += '</table>';

    // Display the table in the result div
    document.getElementById('result').innerHTML = tableHTML;
}

function clearInput() {
    document.getElementById('input').value = "";
}

function clearOutput() {
    document.getElementById('result').innerHTML = "";
}


document.getElementById("clear_input").onclick = function(){
    document.getElementById('input').value = '';
}


document.getElementById("clear_output").onclick = function(){

    document.getElementById('result').innerHTML = ('');
}





















