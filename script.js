function addProduct(imagePath, productName) {
    const productList = document.getElementById('product-list');
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = productName;
    const p = document.createElement('p');
    p.textContent = productName;
    productCard.appendChild(img);
    productCard.appendChild(p);
    productList.appendChild(productCard);
}