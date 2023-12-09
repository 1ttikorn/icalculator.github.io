function calculateChildHeight() {
  const fatherHeight = parseFloat(document.getElementById('fatherHeight').value);
  const motherHeight = parseFloat(document.getElementById('motherHeight').value);
  const childGender = document.getElementById('childGender').value;

  if (isNaN(fatherHeight) || isNaN(motherHeight)) {
      alert('Please enter valid heights for both parents.');
      return;
  }

  let childHeight;

  if (childGender === 'boy') {
      childHeight = (fatherHeight + motherHeight) / 2 + 6.35;
  } else {
      childHeight = (fatherHeight + motherHeight) / 2 - 6.35;
  }

  document.getElementById('result').innerText = `Estimated child height is approximately ${childHeight.toFixed(2)} cm.`;
}
