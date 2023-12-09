function calculateInterest() {
  var principal = parseFloat(document.getElementById("principal").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var years = parseInt(document.getElementById("years").value);

  var resultElement = document.getElementById("result");

  if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal <= 0 || rate <= 0 || years <= 0) {
    resultElement.innerHTML = "Please enter valid values for principal, rate, and years.";
  } else {
    var totalInterest = calculateCompoundInterest(principal, rate, years);
    resultElement.innerHTML = "Total interest after " + years + " years: $" + totalInterest.toFixed(2);
  }
}

function calculateCompoundInterest(principal, rate, years) {
  var totalInterest = principal * Math.pow(1 + rate / 100, years) - principal;
  return totalInterest;
}
