const addProductForm = document.createElement('form');
addProductForm.setAttribute("id", "addProductForm");

const addProductName = document.createElement('input');
addProductName.setAttribute("id", "addProductName");
addProductName.setAttribute("type", "text");
addProductName.setAttribute("name", "text");
addProductName.setAttribute("placeholder", "Prekės pavadinimas");

const addProductPrice = document.createElement('input');
addProductPrice.setAttribute("id", "addProductPrice");
addProductPrice.setAttribute("type", "number");
addProductPrice.setAttribute("name", "number");
addProductPrice.setAttribute("placeholder", "Prekės kaina");

const addProductImg = document.createElement('input');
addProductImg.setAttribute("id", "addProductImg");
addProductImg.setAttribute("type", "url");
addProductImg.setAttribute("name", "url");
addProductImg.setAttribute("placeholder", "Prekės nuotraukos nuoroda");

const addProductDescription = document.createElement('input');
addProductDescription.setAttribute("id", "addProductDescription");
addProductDescription.setAttribute("type", "text");
addProductDescription.setAttribute("name", "text");
addProductDescription.setAttribute("placeholder", "Prekės aprašymas");

const addProductLocation = document.createElement('input');
addProductLocation.setAttribute("id", "addProductLocation");
addProductLocation.setAttribute("type", "text");
addProductLocation.setAttribute("name", "text");
addProductLocation.setAttribute("placeholder", "Miestas");

const addButton = document.createElement('button');
addButton.setAttribute("id", "addButton");
addButton.setAttribute("type", "submit");
addButton.innerHTML = "Pridėti prekę";

const addProductWrapper = document.getElementById('add-product-wrapper');

addProductForm.append(addProductName, addProductPrice, addProductImg, addProductDescription, addProductLocation, addButton);
addProductWrapper.append(addProductForm);

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const nameValue = document.getElementById('addProductName').value;
    const priceValue = document.getElementById('addProductPrice').value;
    const imageValue = document.getElementById('addProductImg').value;
    const descriptionValue = document.getElementById('addProductDescription').value;
    const locationValue = document.getElementById('addProductLocation').value;

    const data = {
        name: nameValue,
        price: priceValue,
        image: imageValue,
        description: descriptionValue,
        location: locationValue,
    }

    fetch("https://6344475bdcae733e8fdbe146.mockapi.io/BikesShop", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector('h4').innerHTML = "Prekė sėkmingai įtraukta į katalogą.";
        })
        .catch((error) => {
            console.log('error', error);
            document.getElementById('add-product-wrapper').innerHTML = "Įvyko klaida - grįžkite į pagrindinį katalogą.";
        });
});