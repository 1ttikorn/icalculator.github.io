function calculateSavings() {
  const tripCost = parseFloat(document.getElementById('tripCost').value);
  const savingsPerMonth = parseFloat(document.getElementById('savingsPerMonth').value);

  if (isNaN(tripCost) || isNaN(savingsPerMonth) || savingsPerMonth <= 0) {
      alert('Please enter valid values for estimated trip cost and savings per month.');
      return;
  }

  const monthsToSave = Math.ceil(tripCost / savingsPerMonth);
  const years = Math.floor(monthsToSave / 12);
  const remainingMonths = monthsToSave % 12;

  document.getElementById('result').innerText = `You need to save for ${years} years and ${remainingMonths} months to afford the trip.`;
}
