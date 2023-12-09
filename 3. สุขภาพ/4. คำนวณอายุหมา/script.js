function calculateDogAge() {
  const humanYears = parseFloat(document.getElementById('dogAge').value);

  if (isNaN(humanYears) || humanYears < 0) {
      alert('Please enter a valid age for your dog.');
      return;
  }

  let dogYears;

  if (humanYears <= 2) {
      // For the first 2 years, 1 human year is equal to 10.5 dog years
      dogYears = humanYears * 10.5;
  } else {
      // For each additional year, 1 human year is equal to 4 dog years
      dogYears = 2 * 10.5 + (humanYears - 2) * 4;
  }

  // Round the result to two decimal places
  dogYears = dogYears.toFixed(2);

  document.getElementById('result').innerText = `Your dog's age is approximately ${dogYears} years in dog years.`;
}
