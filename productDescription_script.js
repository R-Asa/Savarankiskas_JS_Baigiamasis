const productID = localStorage.getItem("productID");

const getOneProduct = () => {
    fetch(`https://6344475bdcae733e8fdbe146.mockapi.io/BikesShop/${productID}`)
        .then((response) => {
            return response.json();
        })
        .then((product) => {
            console.log("success", product);

            const productWrapper = document.getElementById('product-wrapper');

            const productCard = document.createElement('div');
            productCard.setAttribute("id", "productCard");
            productCard.innerHTML = "";

            const productPicture = document.createElement('div');
            productPicture.setAttribute("id", 'productPicture');
            productPicture.setAttribute("alt", 'Product picture');
            productPicture.style.backgroundImage = `url(${product.image})`;

            const productDeleteButton = document.createElement('div');
            productDeleteButton.setAttribute("id", "productDeleteButton");

            const deleteButton = document.createElement('button');
            deleteButton.setAttribute("id", "deleteButton");
            deleteButton.innerHTML = "X";
            deleteButton.addEventListener("click", () => {
                deleteProduct(product.id, productCard);
            });

            const productInfo = document.createElement('div');
            productInfo.setAttribute("id", "productInfo");

            const productName = document.createElement('div');
            productName.setAttribute("id", "productName");

            const textProductName = document.createElement('h3');
            textProductName.setAttribute("id", "textProductName");
            textProductName.style.color = '#339900';
            textProductName.style.fontSize = '16px';
            textProductName.innerHTML = `${product.name}`;

            const productLocation = document.createElement('div');
            productLocation.setAttribute("id", "productLocation");

            const textProductLocation = document.createElement('h5');
            textProductLocation.style.color = '#339900';
            textProductLocation.style.fontSize = '14px';
            textProductLocation.innerHTML = `${product.location}`;

            const productPrice = document.createElement('div');
            productPrice.setAttribute("id", "productPrice");

            const textProductPrice = document.createElement('h2');
            textProductPrice.setAttribute("id", "textProductPrice");
            textProductPrice.style.color = '#606060';
            textProductPrice.style.fontSize = '20px';
            textProductPrice.innerHTML = `${product.price} €`;

            const productDescription = document.createElement('div');
            productDescription.setAttribute("id", 'productDescription');

            const textProductDescription = document.createElement('p');
            textProductDescription.setAttribute("id", 'textProductDescription');
            textProductDescription.style.color = '#606060';
            textProductDescription.style.fontSize = '14px';
            textProductDescription.innerHTML = `${product.description}`;

            productName.append(textProductName);
            productLocation.append(textProductLocation);
            productPrice.append(textProductPrice);
            productDeleteButton.append(deleteButton);
            productInfo.append(productName, productLocation, productPrice);
            productDescription.append(textProductDescription);
            productCard.append(productPicture, productDeleteButton, productInfo, productDescription);
            productWrapper.append(productCard);
        });
};
getOneProduct();

const deleteProductCard = document.getElementById('productCard');

const deleteProduct = (id, deleteProductCard) => {
    fetch(`https://6344475bdcae733e8fdbe146.mockapi.io/BikesShop/${id}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            deleteProductCard.innerHTML = "";
            setTimeout(() => {
                document.querySelector('h4').innerHTML = "Prekė sėkmingai pašalinta iš katalogo.", 2000;
            }, 2000)

        })
        .catch((error) => {
            console.log('error', error);
            document.querySelector('h4').innerHTML = "Įvyko klaida - grįžkite į pagrindinį katalogą.";
        });
};