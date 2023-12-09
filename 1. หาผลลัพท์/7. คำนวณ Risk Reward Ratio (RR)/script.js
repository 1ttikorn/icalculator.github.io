function calculateRiskRewardRatio() {
  var entryPrice = parseFloat(document.getElementById("entryPrice").value);
  var stopLoss = parseFloat(document.getElementById("stopLoss").value);
  var takeProfit = parseFloat(document.getElementById("takeProfit").value);

  var resultElement = document.getElementById("result");

  if (isNaN(entryPrice) || isNaN(stopLoss) || isNaN(takeProfit) || stopLoss <= 0 || takeProfit <= 0) {
    resultElement.innerHTML = "Please enter valid values for entry price, stop loss, and take profit.";
  } else {
    var riskRewardRatio = calculateRRRatio(entryPrice, stopLoss, takeProfit);
    resultElement.innerHTML = "Risk Reward Ratio: " + riskRewardRatio.toFixed(2);
  }
}

function calculateRRRatio(entryPrice, stopLoss, takeProfit) {
  var risk = entryPrice - stopLoss;
  var reward = takeProfit - entryPrice;
  var riskRewardRatio = risk / reward;
  return riskRewardRatio;
}
