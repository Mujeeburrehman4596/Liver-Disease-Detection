document.getElementById('liver-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get user input values
    var age = parseInt(document.getElementById('age').value.trim());
    var gender = document.getElementById('gender').value;
    var bilirubin = parseFloat(document.getElementById('bilirubin').value.trim());
    var alkPhos = parseFloat(document.getElementById('alkphos').value.trim());
    var sgpt = parseFloat(document.getElementById('sgpt').value.trim());
    var sgot = parseFloat(document.getElementById('sgot').value.trim());
  
    var resultMessage = '';
  
    // Basic detection logic (not a real medical model)
    if (bilirubin > 1.2 || alkPhos > 120 || sgpt > 40 || sgot > 40) {
      resultMessage = "There is a potential risk of liver disease. Please consult a doctor for a detailed diagnosis.";
    } else {
      resultMessage = "Your liver health seems normal based on the input values.";
    }
  
    displayResult(resultMessage);
  });
  
  // Display result in the UI
  function displayResult(message) {
    document.getElementById('result-message').innerText = message;
    document.getElementById('result-message').classList.add('font-weight-bold');
  }
  