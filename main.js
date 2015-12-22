var variable = 0;

function squareNumber(){
    var userNum = document.getElementById('num1').value;
    result = userNum * userNum;
    document.getElementById('square').innerHTML = userNum + " squared is " + result;
}

function halfNumber(){
    var userNum = document.getElementById('num2').value;
    result = userNum/2;
    document.getElementById("half").innerHTML = "Half of " + userNum + ' is ' + result;
}

halfNumber(19);

function percentOf(num1, num2){
    var percent = (num1/num2)*100;
    console.log(num1 + " is " + percent + "% of " + num2);
    return percent;
}

percentOf(10, 100);

function areaOfCircle(radius){
    var area = radius * radius * Math.PI;
    var round = Math.round(area*100)/100;
    console.log('The area for a circle with radius ' + radius + " is " + round);

    return area;
}

areaOfCircle(13);

function math(num){
    var half = halfNumber(num);
    var square = squareNumber(half);
    var circle = areaOfCircle(square);
    var percentage = percentOf(circle, square);
    
    console.log("I hope this works " + half+ " " + square + " " + circle + " " + percentage + "%");
    
}

math(5);