function calculateCPM() {
  const cost = parseFloat(document.getElementById('cost').value);
  const impressions = parseFloat(document.getElementById('impressions').value);

  if (isNaN(cost) || isNaN(impressions) || impressions === 0) {
      alert('Please enter valid values for cost and impressions.');
      return;
  }

  const cpm = (cost / impressions) * 1000;
  document.getElementById('result').innerText = `แสดงผล Impression: ${cpm.toFixed(2)}`;
}
