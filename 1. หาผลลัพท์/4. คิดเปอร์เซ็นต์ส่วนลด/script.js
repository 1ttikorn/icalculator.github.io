function calculateDiscount() {
  const originalPrice = parseFloat(document.getElementById("originalPrice").value);
  const discountPercentage = parseFloat(document.getElementById("discountPercentage").value);

  if (isNaN(originalPrice) || isNaN(discountPercentage)) {
      alert("กรุณากรอกข้อมูลให้ถูกต้อง");
      return;
  }

  const discountAmount = (discountPercentage / 100) * originalPrice;
  const discountedPrice = originalPrice - discountAmount;

  const result = `ส่วนลด ${discountPercentage}% จะเท่ากับ ${discountAmount.toFixed(2)} บาท<br>
                  ราคาหลังหักส่วนลด: ${discountedPrice.toFixed(2)} บาท`;

  document.getElementById("result").innerHTML = result;
}
