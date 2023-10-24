document.getElementById('run').addEventListener('click', function() {
  const bish = parseInt(document.getElementById('bish').value);
  const bosh = parseInt(document.getElementById('bosh').value);
  const limit = parseInt(document.getElementById('limit').value);
  let output = '';

  if (isNaN(bish) || isNaN(bosh) || isNaN(limit) || bish <= 0 || bosh <= 0 || limit <= 0) {
    output = 'Vänligen ange giltiga positiva tal.';
  } else {
    for (let i = 1; i <= limit; i++) {
      let line = '';
      if (i % bish === 0) {
        line += 'Bish';
      }
      if (i % bosh === 0) {
        line += 'Bosh';
      }
      output += line || i;
      if (i < limit) {
        output += ', ';
      }
    }
  }

  document.getElementById('output').innerText = output;
});