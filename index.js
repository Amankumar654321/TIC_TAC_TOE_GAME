function myfunction() {
 
    // Setting DOM to all boxes or input field
    var i1,i2,i3,i4,i5,i6,i7,i8,i9;

    i1= document.querySelector("#i1").value;
    i2= document.querySelector("#i2").value;
    i3= document.querySelector("#i3").value;
    i4= document.querySelector("#i4").value;
    i5= document.querySelector("#i5").value;
    i6= document.querySelector("#i6").value;
    i7= document.querySelector("#i7").value;
    i8= document.querySelector("#i8").value;
    i9= document.querySelector("#i9").value;
 
    // Checking if Player X won or not and after
    // that disabled all the other fields
    if ((i1 == 'x' || i1 == 'X') && (i2 == 'x' ||
        i2 == 'X') && (i3 == 'x' || i3 == 'X')) {
        document.querySelector("#print")
            .innerHTML = "Player X won";
        document.querySelector("#i4").disabled = true;
        document.querySelector("#i5").disabled = true;
        document.querySelector("#i6").disabled = true;
        document.querySelector("#i7").disabled = true;
        document.querySelector("#i8").disabled = true;
        document.querySelector("#i9").disabled = true;
        window.alert('Player X won');
    }
    else if ((i1 == 'x' || i1 == 'X') && (i4 == 'x' ||
        i4 == 'X') && (i7 == 'x' || i7 == 'X')) {
        document.querySelector("#print")
            .innerHTML = "Player X won";
        document.querySelector("#i2").disabled = true;
        document.querySelector("#i3").disabled = true;
        document.querySelector("#i5").disabled = true;
        document.querySelector("#i6").disabled = true;
        document.querySelector("#i8").disabled = true;
        document.querySelector("#i9").disabled = true;
 
        window.alert("Player X won");
    }
    else if ((i7 == 'x' || i7 == 'X') && (i8 == 'x' ||
        i8 == 'X') && (i9 == 'x' || i9 == 'X')) {
        document.querySelector("#print")
            .innerHTML = "Player X won";
        document.querySelector("#i1").disabled = true;
        document.querySelector("#i2").disabled = true;
        document.querySelector("#i3").disabled = true;
        document.querySelector("#i4").disabled = true;
        document.querySelector("#i5").disabled = true;
        document.querySelector("#i6").disabled = true;
        window.alert("Player X won");
    }
    else if ((i3 == 'x' || i3 == 'X') && (i6 == 'x' ||
        i6 == 'X') && (i9 == 'x' || i9 == 'X')) {
        document.querySelector("#print")
            .innerHTML = "Player X won";
        document.querySelector("#i1").disabled = true;
        document.querySelector("#i2").disabled = true;
        document.querySelector("#i4").disabled = true;
        document.querySelector("#i5").disabled = true;
        document.querySelector("#i7").disabled = true;
        document.querySelector("#i8").disabled = true;
        window.alert("Player X won");
    }
    else if ((i1 == 'x' || i1 == 'X') && (i5 == 'x' ||
        i5 == 'X') && (i9 == 'x' || i9 == 'X')) {
        document.querySelector("#print")
            .innerHTML = "Player X won";
        document.querySelector("#i2").disabled = true;
        document.querySelector("#i3").disabled = true;
        document.querySelector("#i4").disabled = true;
        document.querySelector("#i6").disabled = true;
        document.querySelector("#i7").disabled = true;
        document.querySelector("#i8").disabled = true;
        window.alert("Player X won");
    }
    else if ((i3 == 'x' || i3 == 'X') && (i5 == 'x' ||
        i5 == 'X') && (i7 == 'x' || i7 == 'X')) {
        document.querySelector("#print")
            .innerHTML = "Player X won";
        document.querySelector("#i1").disabled = true;
        document.querySelector("#i2").disabled = true;
        document.querySelector("#i4").disabled = true;
        document.querySelector("#i6").disabled = true;
        document.querySelector("#i8").disabled = true;
        document.querySelector("#i9").disabled = true;
        window.alert("Player X won");
    }
    else if ((i2 == 'x' || i2 == 'X') && (i5 == 'x' ||
        i5 == 'X') && (i8 == 'x' || i8 == 'X')) {
        document.querySelector("#print")
            .innerHTML = "Player X won";
        document.querySelector("#i1").disabled = true;
        document.querySelector("#i3").disabled = true;
        document.querySelector("#i4").disabled = true;
        document.querySelector("#i6").disabled = true;
        document.querySelector("#i7").disabled = true;
        document.querySelector("#i9").disabled = true;
        window.alert("Player X won");
    }
    else if ((i4 == 'x' || i4 == 'X') && (i5 == 'x' ||
        i5 == 'X') && (i6 == 'x' || i6 == 'X')) {
        document.querySelector("#print")
            .innerHTML = "Player X won";
        document.querySelector("#i1").disabled = true;
        document.querySelector("#i2").disabled = true;
        document.querySelector("#i3").disabled = true;
        document.querySelector("#i7").disabled = true;
        document.querySelector("#i8").disabled = true;
        document.querySelector("#i9").disabled = true;
        window.alert("Player X won");
    }
 
    // Checking of Player X finish
    // Checking for Player 0 starts, Is player 0 won or
    // not and after that disabled all the other fields
    else if ((i1 == '0' || i1 == '0') && (i2 == '0' ||
    i2 == '0') && (i3 == '0' || i3 == '0')) {
        document.querySelector("#print")
            .innerHTML = "Player 0 won";
            document.querySelector("#i4").disabled = true;
            document.querySelector("#i5").disabled = true;
            document.querySelector("#i6").disabled = true;
            document.querySelector("#i7").disabled = true;
            document.querySelector("#i8").disabled = true;
            document.querySelector("#i9").disabled = true;
            window.alert("Player 0 won");
    }
    else if ((i1 == '0' || i1 == '0') && (i4 == '0' ||
        i4 == '0') && (i7 == '0' || i7 == '0')) {
        document.querySelector("#print")
            .innerHTML = "Player 0 won";
            document.querySelector("#i2").disabled = true;
            document.querySelector("#i3").disabled = true;
            document.querySelector("#i5").disabled = true;
            document.querySelector("#i6").disabled = true;
            document.querySelector("#i8").disabled = true;
            document.querySelector("#i9").disabled = true;
            window.alert("Player 0 won");
    }
    else if ((i7 == '0' || i7 == '0') && (i8 == '0' ||
        i8 == '0') && (i9 == '0' || i9 == '0')) {
        document.querySelector("#print")
            .innerHTML = "Player 0 won";
            document.querySelector("#i1").disabled = true;
            document.querySelector("#i2").disabled = true;
            document.querySelector("#i3").disabled = true;
            document.querySelector("#i4").disabled = true;
            document.querySelector("#i5").disabled = true;
            document.querySelector("#i6").disabled = true;
            window.alert("Player 0 won");
    }
    else if ((i3 == '0' || i3 == '0') && (i6 == '0' ||
        i6 == '0') && (i9 == '0' || i9 == '0')) {
        document.querySelector("#print")
            .innerHTML = "Player 0 won";
            document.querySelector("#i1").disabled = true;
            document.querySelector("#i2").disabled = true;
            document.querySelector("#i4").disabled = true;
            document.querySelector("#i5").disabled = true;
            document.querySelector("#i7").disabled = true;
            document.querySelector("#i8").disabled = true;
            window.alert("Player 0 won");
    }
    else if ((i1 == '0' || i1 == '0') && (i5 == '0' ||
        i5 == '0') && (i9 == '0' || i9 == '0')) {
        document.querySelector("#print")
            .innerHTML = "Player 0 won";
            document.querySelector("#i2").disabled = true;
            document.querySelector("#i3").disabled = true;
            document.querySelector("#i4").disabled = true;
            document.querySelector("#i6").disabled = true;
            document.querySelector("#i7").disabled = true;
            document.querySelector("#i8").disabled = true;
            window.alert("Player 0 won");
    }
    else if ((i3 == '0' || i3 == '0') && (i5 == '0' ||
        i5 == '0') && (i7 == '0' || i7 == '0')) {
        document.querySelector("#print")
            .innerHTML = "Player 0 won";
            document.querySelector("#i1").disabled = true;
            document.querySelector("#i2").disabled = true;
            document.querySelector("#i4").disabled = true;
            document.querySelector("#i6").disabled = true;
            document.querySelector("#i8").disabled = true;
            document.querySelector("#i9").disabled = true;
            window.alert("Player 0 won");
    }
    else if ((i2 == '0' || i2 == '0') && (i5 == '0' ||
        i5 == '0') && (i8 == '0' || i8 == '0')) {
        document.querySelector("#print")
            .innerHTML = "Player 0 won";
            document.querySelector("#i1").disabled = true;
            document.querySelector("#i3").disabled = true;
            document.querySelector("#i4").disabled = true;
            document.querySelector("#i6").disabled = true;
            document.querySelector("#i7").disabled = true;
            document.querySelector("#i9").disabled = true;
            window.alert("Player 0 won");
    }
    else if ((i4 == '0' || i4 == '0') && (i5 == '0' ||
        i5 == '0') && (i6 == '0' || i6 == '0')) {
        document.querySelector("#print")
            .innerHTML = "Player 0 won";
            document.querySelector("#i1").disabled = true;
            document.querySelector("#i2").disabled = true;
            document.querySelector("#i3").disabled = true;
            document.querySelector("#i7").disabled = true;
            document.querySelector("#i8").disabled = true;
            document.querySelector("#i9").disabled = true;
            window.alert("Player 0 won");
    }
 
    // Checking of Player 0 finish
    // Here, Checking about Tie
    else if ((i1 == 'X' || i1 == '0') && (i2 == 'X'
        || i2 == '0') && (i3 == 'X' || i3 == '0') &&
        (i4 == 'X' || i4 == '0') && (i5 == 'X' ||
        i5 == '0') && (i6 == 'X' || i6 == '0') &&
        (i7 == 'X' || i7 == '0') && (i8 == 'X' ||
        i8 == '0') && (i9 == 'X' || i9 == '0')) {
            document.querySelector("#print")
                .innerHTML = "Match Tie";
            window.alert("Match Tie");
    }
    else {
 
        // Here,"#Print"ng Result
        if (flag == 1) {
            document.querySelector("#print")
                .innerText = "Player X Turn";
        }
        else {
            document.querySelector("#print")
                .innerText = "Player 0 Turn";
        }
    }
}
 
// Function to reset game
function myfunc2() {
    location.reload();
    document.querySelector("#i1").value = '';
    document.querySelector("#i2").value = '';
    document.querySelector("#i3").value = '';
    document.querySelector("#i4").value = '';
    document.querySelector("#i5").value = '';
    document.querySelector("#i6").value = '';
    document.querySelector("#i7").value = '';
    document.querySelector("#i8").value = '';
    document.querySelector("#i9").value = '';
 
}
 
// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc3() {
    if (flag == 1) {
        document.querySelector("#i1").value = "X";
        document.querySelector("#i1").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector("#i1").value = "0";
        document.querySelector("#i1").disabled = true;
        flag = 1;
    }
}
 
function myfunc4() {
    if (flag == 1) {
        document.querySelector("#i2").value = "X";
        document.querySelector("#i2").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector("#i2").value = "0";
        document.querySelector("#i2").disabled = true;
        flag = 1;
    }
}
 
function myfunc5() {
    if (flag == 1) {
        document.querySelector("#i3").value = "X";
        document.querySelector("#i3").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector("#i3").value = "0";
        document.querySelector("#i3").disabled = true;
        flag = 1;
    }
}
 
function myfunc6() {
    if (flag == 1) {
        document.querySelector("#i4").value = "X";
        document.querySelector("#i4").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector("#i4").value = "0";
        document.querySelector("#i4").disabled = true;
        flag = 1;
    }
}
 
function myfunc7() {
    if (flag == 1) {
        document.querySelector("#i5").value = "X";
        document.querySelector("#i5").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector("#i5").value = "0";
        document.querySelector("#i5").disabled = true;
        flag = 1;
    }
}
 
function myfunc8() {
    if (flag == 1) {
        document.querySelector("#i6").value = "X";
        document.querySelector("#i6").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector("#i6").value = "0";
        document.querySelector("#i6").disabled = true;
        flag = 1;
    }
}
 
function myfunc9() {
    if (flag == 1) {
        document.querySelector("#i7").value = "X";
        document.querySelector("#i7").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector("#i7").value = "0";
        document.querySelector("#i7").disabled = true;
        flag = 1;
    }
}
 
function myfunc10() {
    if (flag == 1) {
        document.querySelector("#i8").value = "X";
        document.querySelector("#i8").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector("#i8").value = "0";
        document.querySelector("#i8").disabled = true;
        flag = 1;
    }
}
 
function myfunc11() {
    if (flag == 1) {
        document.querySelector("#i9").value = "X";
        document.querySelector("#i9").disabled = true;
        flag = 0;
    }
    else {
        document.querySelector("#i9").value = "0";
        document.querySelector("#i9").disabled = true;
        flag = 1;
    }
}