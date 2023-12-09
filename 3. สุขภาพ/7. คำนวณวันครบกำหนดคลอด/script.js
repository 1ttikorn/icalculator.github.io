function calculateDueDate() {
  const pregnancyStartDate = new Date(document.getElementById('pregnancyStartDate').value);
  const pregnancyDuration = parseInt(document.getElementById('pregnancyDuration').value);

  if (isNaN(pregnancyDuration) || pregnancyDuration < 0) {
      alert('Please enter a valid pregnancy duration.');
      return;
  }

  if (isNaN(pregnancyStartDate.getTime())) {
      alert('Please enter a valid pregnancy start date.');
      return;
  }

  const dueDate = new Date(pregnancyStartDate);
  dueDate.setDate(pregnancyStartDate.getDate() + (pregnancyDuration * 7));

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = dueDate.toLocaleDateString('en-US', options);

  document.getElementById('result').innerText = `Due date is expected on: ${formattedDate}`;
}
