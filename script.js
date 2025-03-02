document.addEventListener("DOMContentLoaded", function () {
    let searchInput = document.getElementById("my-search");
    let productList = document.getElementById("product-list");
    let productItems = Array.from(document.querySelectorAll("#product-list .productItems"));

    searchInput.addEventListener("keyup", function () {
        let query = searchInput.value.trim().toLowerCase();

        if (query.length > 0) {
            // Products को filter करो
            let filteredProducts = productItems.filter(item => {
                let productName = item.querySelector(".productContent h3").textContent.toLowerCase();
                return productName.includes(query);
            });

            // पहले पूरी लिस्ट को साफ़ करो
            productList.innerHTML = "";

            // Matching Products को पहले जोड़ो
            filteredProducts.forEach(item => productList.appendChild(item));

            // बाकी के products को add करो (जो match नहीं हुए)
            productItems.forEach(item => {
                if (!filteredProducts.includes(item)) {
                    productList.appendChild(item);
                }
            });
        } else {
            // अगर search खाली हो जाए, तो products को वापस original order में रखो
            productItems.forEach(item => productList.appendChild(item));
        }
    });
});