document.addEventListener("DOMContentLoaded", function() {
    // Sample user information
    const userInfo = {
      name: "John Doe",
      email: "john@example.com",
      address: "123 Shoe Street, City, Country",
      phoneNumber: "123-456-7890"
    };
  
    const userInfoContainer = document.getElementById("user-info");
  
    // Render user information
    function renderUserInfo() {
      userInfoContainer.innerHTML = `
        <div class="profile-info">
          <h2>User Information</h2>
          <p><strong>Name:</strong> ${userInfo.name}</p>
          <p><strong>Email:</strong> ${userInfo.email}</p>
          <p><strong>Address:</strong> ${userInfo.address}</p>
          <p><strong>Phone Number:</strong> ${userInfo.phoneNumber}</p>
          <button id="edit-profile-button">Edit Profile</button>
        </div>
      `;
    }
  
    renderUserInfo();
  
    // Handle edit profile button click
    document.getElementById("edit-profile-button").addEventListener("click", function() {
      // Redirect to edit profile page or show a modal for editing
      alert("Redirecting to edit profile page...");
      // Example of redirection: window.location.href = "edit-profile.html";
    });
  });