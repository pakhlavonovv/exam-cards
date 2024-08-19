const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(response => response.json())
  .then(product => {
    const info_product = document.getElementById('info_product');
    info_product.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <p><b>Price: $${product.price}</b></p>
    `;
  })
  .catch(error => console.error(error));
