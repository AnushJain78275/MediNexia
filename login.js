document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Perform API request to fetch data from Google Sheets
    // Replace 'SHEET_ID' and 'API_KEY' with your actual values
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/1VaQlE38j1CH7bJt3elQ-QP3uYZ8is-I2XKMee_a_dD4/values/Sheet1!A:B?key=AIzaSyD-zK6ePYZBrGKK0AKTrctUrMwgcb5L27Q`)
      .then(response => response.json())
      .then(data => {
        var sheetData = data.values;
        var found = false;
        
        for (var i = 0; i < sheetData.length; i++) {
          if (sheetData[i][0] === username && sheetData[i][1] === password) {
            found = true;
            break;
          }
        }
        
        if (found) {
          window.location.href = "indey.html";
        } else {
          document.getElementById("error-message").textContent = "User not found";
        }
      })
      .catch(error => {
        console.error("Error fetching data from Google Sheets:", error);
      });
  });
  