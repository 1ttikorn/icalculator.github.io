function calculatePercentage() {
  const wins = parseInt(document.getElementById("wins").value);
  const losses = parseInt(document.getElementById("losses").value);

  if (isNaN(wins) || isNaN(losses)) {
      alert("กรุณากรอกตัวเลขเท่านั้น");
      return;
  }

  const totalGames = wins + losses;
  const winPercentage = (wins / totalGames) * 100;
  const lossPercentage = (losses / totalGames) * 100;

  const result = `เปอร์เซ็นต์การชนะ: ${winPercentage.toFixed(2)}%, เปอร์เซ็นต์การแพ้: ${lossPercentage.toFixed(2)}%`;

  document.getElementById("result").innerHTML = result;
}
