function calculate() {
  // ดึงค่าจากฟอร์ม
  var investment = parseFloat(document.getElementById('investment').value);
  var rate = parseFloat(document.getElementById('rate').value);
  var years = parseInt(document.getElementById('years').value);

  // คำนวณเงินปันผล
  var futureValue = investment * Math.pow((1 + rate / 100), years);

  // แสดงผลลัพธ์
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = 'มูลค่าที่ได้: ' + futureValue.toFixed(2) + ' บาท';
}
