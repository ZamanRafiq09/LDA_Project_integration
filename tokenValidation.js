// Function to check authentication status
function checkAuthentication() {
  // Check if a token exists in localStorage
  if (!localStorage.getItem("token")) {
    // If token doesn't exist, redirect user to the login page
    window.location.href = "Admin_Login.html";
  }
}

// Call the function when the body is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Call the function to check authentication only once
  checkAuthentication();
});

// Add event listener to the logout button
document.getElementById("logout")?.addEventListener("click", function () {
  // Remove the token from localStorage
  localStorage.removeItem("token");
  // Redirect user to the login page
  window.location.href = "Admin_Login.html";
});

function checkUnAuth(response) {
  if (!response.ok) {
    if (response.status === 401) {
      // Handle 401 Unauthorized error here
      window.location.href = "Admin_Login.html";
      localStorage.clear();
      return;
    } else {
      // Handle other errors
      console.error("Error:", response.statusText);
    }
  } else {
    return true;
  }
}
