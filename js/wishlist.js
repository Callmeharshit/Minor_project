document.addEventListener("DOMContentLoaded", function() {
    // Sample wishlist items
    const wishlistItems = [
      { id: 1, name: "Nike Air Force 1", price: 100, image: "nike_air_force_1.jpg" },
      { id: 2, name: "Adidas Ultraboost", price: 150, image: "adidas_ultraboost.jpg" },
      { id: 3, name: "Puma Suede Classic", price: 80, image: "puma_suede_classic.jpg" }
    ];
  
    const wishlistContainer = document.getElementById("wishlist-items");
  
    // Render wishlist items
    function renderWishlistItems() {
      wishlistContainer.innerHTML = "";
      wishlistItems.forEach(item => {
        const wishlistItem = document.createElement("div");
        wishlistItem.classList.add("wishlist-item");
        wishlistItem.innerHTML = `
          <img src="images/${item.image}" alt="${item.name}">
          <h2>${item.name}</h2>
          <p>Price: $${item.price}</p>
          <button class="remove-button" data-id="${item.id}">Remove</button>
        `;
        wishlistContainer.appendChild(wishlistItem);
      });
    }
  
    renderWishlistItems();
  
    // Remove item from wishlist
    wishlistContainer.addEventListener("click", function(event) {
      if (event.target.classList.contains("remove-button")) {
        const itemId = parseInt(event.target.getAttribute("data-id"));
        const index = wishlistItems.findIndex(item => item.id === itemId);
        if (index !== -1) {
          wishlistItems.splice(index, 1);
          renderWishlistItems();
        }
      }
    });
  });