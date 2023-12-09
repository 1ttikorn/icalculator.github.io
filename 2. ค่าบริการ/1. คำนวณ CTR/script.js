function calculateCTR() {
  const clicks = parseFloat(document.getElementById('clicks').value);
  const impressions = parseFloat(document.getElementById('impressions').value);

  if (isNaN(clicks) || isNaN(impressions) || impressions === 0) {
      alert('Please enter valid values for clicks and impressions.');
      return;
  }

  const ctr = (clicks / impressions) * 100;
  document.getElementById('result').innerText = `CTR: ${ctr.toFixed(2)}%`;
}
