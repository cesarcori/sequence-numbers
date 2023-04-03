function fibonacciNumber() {

  let fibo_number = document.getElementById("enter-value").value;

  let num1 = 0, num2 = 1, sum; // variables

  for (let i = 1; i <= fibo_number; i++) {

    document.getElementById("result-fibonacci").innerText = num1
    console.log(num1)

    sum = num1 + num2;
    num1 = num2;
    num2 = sum;

  }

}

