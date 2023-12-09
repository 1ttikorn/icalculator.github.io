function calculateDays() {
  const startDate = new Date(document.getElementById('startDate').value);
  const endDate = new Date(document.getElementById('endDate').value);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      alert('Please enter valid start and end dates.');
      return;
  }

  const timeDifference = endDate.getTime() - startDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  document.getElementById('result').innerText = `Number of days between the two dates: ${daysDifference} days`;
}
