document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementsByName("username")[0].value;
  var password = document.getElementsByName("password")[0].value;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "login.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.success) {
        alert("Login successful!");
        // Redirect to dashboard or protected page
        window.location.href = "dashboard.html"
      } else {
        alert("Invalid username or password. Please try again.");
      }
    }
  };
  var params = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
  xhr.send(params);
});

  