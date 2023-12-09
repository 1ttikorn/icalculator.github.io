function calculateCatAge() {
  const humanYears = parseFloat(document.getElementById('catAge').value);

  if (isNaN(humanYears) || humanYears < 0) {
      alert('Please enter a valid age for your cat.');
      return;
  }

  // For the first year, 1 human year is approximately equal to 15 cat years
  // For the second year, 1 human year is approximately equal to 9 cat years
  // After that, each additional human year is approximately equal to 4 cat years
  let catYears;

  if (humanYears === 1) {
      catYears = 15;
  } else if (humanYears === 2) {
      catYears = 24;
  } else {
      catYears = 24 + (humanYears - 2) * 4;
  }

  // Round the result to two decimal places
  catYears = catYears.toFixed(2);

  document.getElementById('result').innerText = `Your cat's age is approximately ${catYears} years in cat years.`;
}
