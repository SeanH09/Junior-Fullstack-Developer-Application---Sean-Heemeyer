function FibonacciString(x){
    var Numbers = [];
    number = 0;
    FirstNumber = 0;
    SecondNumber = 1;
    while(x > number)
    {
        //First number 0
        Numbers.push(number);
        //Number is now set to 1 after the first itteration
        number = FirstNumber + SecondNumber; 
        //First number is now set to the value of the previous second number
        FirstNumber = SecondNumber;
        //The Second number is now set to the value of the latest number
        SecondNumber = number;
    }

    return Numbers;
}

var result = FibonacciString(6);

document.write(result);