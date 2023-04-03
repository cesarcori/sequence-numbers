function fibonacciNumber() {
  let fibo_number = document.getElementById("enter-value").value;

  let n1 = 0, n2 = 1, nextTerm; // variables

  for (let i = 1; i <= fibo_number; i++) {
      document.getElementById("result-fibonacci").innerText = n1
      console.log(n1)
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
  }
}
