const shoes = [
    { name: "Nike Air Max", price: 120 },
    { name: "Adidas Ultraboost", price: 150 },
    { name: "Puma RS-X", price: 100 },
    { name: "Reebok Classic", price: 80 },
    { name: "New Balance 574", price: 90 }
];

function search() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";

    const filteredShoes = shoes.filter(shoe => shoe.name.toLowerCase().includes(searchInput));

    if (filteredShoes.length === 0) {
        searchResults.innerHTML = "No results found.";
    } else {
        filteredShoes.forEach(shoe => {
            const shoeDiv = document.createElement("div");
            shoeDiv.textContent = `${shoe.name} - $${shoe.price}`;
            searchResults.appendChild(shoeDiv);
        });
    }
}
