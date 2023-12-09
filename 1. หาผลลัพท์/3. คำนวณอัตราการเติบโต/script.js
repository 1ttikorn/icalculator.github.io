function calculateGrowthRate() {
  const initialValue = parseFloat(document.getElementById("initialValue").value);
  const finalValue = parseFloat(document.getElementById("finalValue").value);
  const years = parseInt(document.getElementById("years").value);

  if (isNaN(initialValue) || isNaN(finalValue) || isNaN(years) || years <= 0) {
      alert("กรุณากรอกข้อมูลให้ถูกต้อง");
      return;
  }

  const growthRate = ((finalValue / initialValue) ** (1 / years) - 1) * 100;

  const result = `อัตราการเติบโต: ${growthRate.toFixed(2)}% ต่อปี`;

  document.getElementById("result").innerHTML = result;
}
