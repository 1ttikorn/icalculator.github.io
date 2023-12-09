function calculate() {
    var buyPrice = parseFloat(document.getElementById('buyPrice').value);
    var sellPrice = parseFloat(document.getElementById('sellPrice').value);
    var quantity = parseInt(document.getElementById('quantity').value);

    if (isNaN(buyPrice) || isNaN(sellPrice) || isNaN(quantity)) {
        alert("โปรดป้อนข้อมูลที่ถูกต้อง");
        return;
    }

    var totalCost = buyPrice * quantity;
    var totalRevenue = sellPrice * quantity;
    var profit = totalRevenue - totalCost;
    var profitPercentage = (profit / totalCost) * 100;

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'กำไรทั้งหมด: ' + profit.toFixed(2) + ' บาท<br>เปอร์เซ็นต์กำไร: ' + profitPercentage.toFixed(2) + '%';
}
