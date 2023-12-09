function calculateDays() {
  const birthdate = document.getElementById("birthdate").value;

  if (!birthdate) {
      alert("กรุณากรอกวันเกิด");
      return;
  }

  const birthTimestamp = new Date(birthdate).getTime();
  const currentTimestamp = new Date().getTime();

  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const daysAlive = Math.floor((currentTimestamp - birthTimestamp) / millisecondsPerDay);

  const result = `คุณมีชีวิตอยู่มาแล้ว ${daysAlive} วัน`;

  document.getElementById("result").innerHTML = result;
}
