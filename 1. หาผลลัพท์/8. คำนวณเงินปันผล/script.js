function calculate() {
  var dividendRate = parseFloat(document.getElementById('dividendRate').value);
  var initialStockValue = parseFloat(document.getElementById('initialStockValue').value);
  var monthlyStockValue = parseFloat(document.getElementById('monthlyStockValue').value);

  if (isNaN(dividendRate) || isNaN(initialStockValue) || isNaN(monthlyStockValue)) {
      alert("โปรดป้อนข้อมูลที่ถูกต้อง");
      return;
  }

  var totalDividends = 0;
  var totalStockValue = initialStockValue;

  for (var i = 1; i <= 12; i++) {
      totalDividends += (totalStockValue * dividendRate / 100);
      totalStockValue += monthlyStockValue;
  }

  var resultElement = document.getElementById('result');
  resultElement.innerHTML = 'เงินปันผลทั้งหมด: ' + totalDividends.toFixed(2) + ' บาท';
}
