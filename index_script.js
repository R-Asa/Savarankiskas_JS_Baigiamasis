fetch("https://6344475bdcae733e8fdbe146.mockapi.io/BikesShop")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.sort((a, b) => {
            return a.price - b.price
        })
        console.log("data", data);


        const productWrapper = document.getElementById('product-wrapper');

        data.forEach((product) => {
            const productCard = document.createElement('div');
            productCard.setAttribute("id", "productCard");
            productCard.innerHTML = "";

            const productPicture = document.createElement('div');
            productPicture.setAttribute("id", 'productPicture');
            productPicture.setAttribute("alt", 'Product picture');
            productPicture.style.backgroundImage = `url(${product.image})`;

            const productInfo = document.createElement('div');
            productInfo.setAttribute("id", "productInfo");

            const productName = document.createElement('div');
            productName.setAttribute("id", "productName");

            const textProductName = document.createElement('h3');
            textProductName.setAttribute("id", "textProductName");
            textProductName.style.color = '#339900';
            textProductName.style.fontSize = '16px';
            textProductName.innerHTML = `${product.name}`;

            const productPrice = document.createElement('div');
            productPrice.setAttribute("id", "productPrice");

            const textProductPrice = document.createElement('h2');
            textProductPrice.style.color = '#606060';
            textProductPrice.style.fontSize = '18px';
            textProductPrice.setAttribute("id", "textProductPrice");
            textProductPrice.innerHTML = `${product.price} €`;

            productName.append(textProductName);
            productPrice.append(textProductPrice);
            productInfo.append(productName, productPrice);
            productCard.append(productPicture, productInfo);
            productWrapper.append(productCard);

            productPicture.addEventListener("click", () => {
                localStorage.setItem("productID", product.id);
                window.location.replace("./productDescription.html");
            });
        });
    })
    .catch((error) => {
        console.log('error', error);
        document.getElementById('product-wrapper').innerHTML = "Įvyko klaida - grįžkite į pagrindinį katalogą.";
    });