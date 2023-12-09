function calculateLotSize() {
  var accountBalance = parseFloat(document.getElementById("accountBalance").value);
  var riskPercentage = parseFloat(document.getElementById("riskPercentage").value);
  var stopLoss = parseFloat(document.getElementById("stopLoss").value);

  var resultElement = document.getElementById("result");

  if (isNaN(accountBalance) || isNaN(riskPercentage) || isNaN(stopLoss) || accountBalance <= 0 || riskPercentage <= 0 || stopLoss <= 0) {
    resultElement.innerHTML = "Please enter valid values for account balance, risk percentage, and stop loss.";
  } else {
    var lotSize = calculateLotSizeFormula(accountBalance, riskPercentage, stopLoss);
    resultElement.innerHTML = "Recommended Lot Size: " + lotSize.toFixed(2);
  }
}

function calculateLotSizeFormula(accountBalance, riskPercentage, stopLoss) {
  var riskAmount = (accountBalance * riskPercentage) / 100;
  var lotSize = riskAmount / stopLoss;
  return lotSize;
}
