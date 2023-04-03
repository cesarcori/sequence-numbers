function fibonacciNumber() {

  let fibo_number = document.getElementById("enter-value").value;

  let num1 = 0, num2 = 1, sum; // variables

  for (let i = 1; i <= fibo_number; i++) {

    const newP = document.createElement("p");
    const newContent = document.createTextNode(num1);
    newP.appendChild(newContent);

    const currentDiv = document.getElementById("result-fibonacci");
    // document.body.insertBefore(newP, currentDiv);
    currentDiv.appendChild(newP)

    sum = num1 + num2;
    num1 = num2;
    num2 = sum;

  }

}

