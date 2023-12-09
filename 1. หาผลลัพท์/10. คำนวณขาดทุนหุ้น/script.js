function calculate() {
  var initialValue = parseFloat(document.getElementById('initialValue').value);
  var currentValue = parseFloat(document.getElementById('currentValue').value);

  if (isNaN(initialValue) || isNaN(currentValue)) {
      alert("โปรดป้อนข้อมูลที่ถูกต้อง");
      return;
  }

  var loss = initialValue - currentValue;
  var percentageToBreakEven = (loss / initialValue) * 100;

  var resultElement = document.getElementById('result');
  resultElement.innerHTML = 'ขาดทุน: ' + loss.toFixed(2) + ' บาท<br>เปอร์เซ็นต์ที่ต้องการเพื่อกลับมาที่จุดเริ่มต้น: ' + percentageToBreakEven.toFixed(2) + '%';
}
