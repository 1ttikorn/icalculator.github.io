function calculateAge() {
  const birthDate = new Date(document.getElementById('birthDate').value);
  const currentDate = new Date();

  if (isNaN(birthDate.getTime())) {
      alert('Please enter a valid birthdate.');
      return;
  }

  const ageInMilliseconds = currentDate - birthDate;
  const ageDate = new Date(ageInMilliseconds);

  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1; // Subtract 1 to adjust for the base date (1970-01-01)

  document.getElementById('result').innerText = `Your age is approximately ${years} years, ${months} months, and ${days} days.`;
}
