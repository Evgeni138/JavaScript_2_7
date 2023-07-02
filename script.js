const data = JSON.parse(dataProducts);

const product = document.querySelector('.product');

data.forEach(element => {
    const productItem = document.createElement('div');
    productItem.id = element.id;
    productItem.classList.add("product_rectangle");
    product.appendChild(productItem);

    productInsert = document.createElement('div');
    productInsert.classList.add("product_insert");
    productItem.appendChild(productInsert);

    const productPicture = document.createElement('img');
    const imgClass = element.picture_class;
    imgClass.forEach(element => {
        productPicture.classList.add(`${element}`);
    });
    productPicture.src = element.picture;
    productInsert.appendChild(productPicture);

    const productBrand = document.createElement('h3');
    productBrand.classList.add("product_head");
    productBrand.textContent = element.brand;
    productItem.appendChild(productBrand);

    const productDescription = document.createElement('p');
    productDescription.classList.add("product_text");
    productDescription.textContent = element.description;
    productItem.appendChild(productDescription);

    const productPrice = document.createElement('p');
    productPrice.classList.add("product_price");
    productPrice.textContent = element.price;
    const productPriceCurrency = document.createElement('p');
    productPriceCurrency.classList.add("product_price");
    productPriceCurrency.textContent = element.currency;
    productPrice.innerHTML = productPriceCurrency.innerHTML + productPrice.innerHTML;
    productItem.appendChild(productPrice);
});

const productItems = document.querySelectorAll('.product_rectangle');
console.log(productItems);
productItems.forEach(item => {
    item.addEventListener('click', () => {
        const id = item.id;

        data.forEach(element => {
            if (element.id === id) {
                // console.log(element);
                const cartsDiv = document.querySelector('.cart');

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart__product');
                cartItem.id = id;
                cartsDiv.appendChild(cartItem);

                const cartImg = document.createElement('img');
                const imgClass = element.picture_class;
                imgClass.forEach(element => {
                    cartImg.classList.add(element);
                });
                cartImg.classList.remove('product_img');
                cartImg.classList.add('product_img3');
                cartImg.src = element.img;
                cartItem.appendChild(cartImg);

                const cartContent = document.createElement('div');
                cartContent.classList.add('cart__content');
                cartItem.appendChild(cartContent);

                const cartABrand = document.createElement('a');
                cartABrand.href = '#';
                cartABrand.classList.add('cart__link');
                cartContent.appendChild(cartABrand);

                const cartBrand = document.createElement('h3');
                cartBrand.classList.add('cart__brand');
                cartBrand.textContent = element.brand;
                cartABrand.appendChild(cartBrand);

                const cartACategory = document.createElement('a');
                cartACategory.href = '#';
                cartACategory.classList.add('cart__link');
                cartContent.appendChild(cartACategory);

                const cartCategory = document.createElement('h3');
                cartCategory.classList.add('cart__category');
                cartCategory.textContent = element.category;
                cartACategory.appendChild(cartCategory);

                const cartUl = document.createElement('ul');
                cartUl.classList.add('cart__ul');
                cartContent.appendChild(cartUl);

                const cartLinkPrice = document.createElement('li');
                cartLinkPrice.classList.add('cart__list');
                cartUl.appendChild(cartLinkPrice);

                const cartPriceText = document.createElement('p');
                cartPriceText.classList.add('cart__text');
                cartPriceText.textContent = 'Price: ';
                cartLinkPrice.appendChild(cartPriceText);

                const cartPriceCost = document.createElement('p');
                cartPriceCost.classList.add('cart__cost');
                const cartPriceCurrency = document.createElement('span');
                cartPriceCurrency.classList.add('cart__currency');
                cartPriceCurrency.textContent = element.Currency;
                cartPriceCost.textContent = element.Price;
                cartPriceCost.innerHTML = cartPriceCurrency.innerHTML + cartPriceCost.innerHTML;
                cartLinkPrice.appendChild(cartPriceCost);

                const cartLinkColor = document.createElement('li');
                cartLinkColor.classList.add('cart__list');
                cartUl.appendChild(cartLinkColor);

                const cartColor = document.createElement('p');
                cartColor.classList.add('cart__text');
                cartColor.textContent = 'Color: ' + element.Color;
                cartLinkColor.appendChild(cartColor);

                const cartLinkSize = document.createElement('li');
                cartLinkSize.classList.add('cart__list');
                cartUl.appendChild(cartLinkSize);

                const cartSize = document.createElement('p');
                cartSize.classList.add('cart__text');
                cartSize.textContent = 'Size: ' + element.Size;
                cartLinkSize.appendChild(cartSize);

                const cartLinkQuantity = document.createElement('li');
                cartLinkQuantity.classList.add('cart__list');
                cartUl.appendChild(cartLinkQuantity);

                const cartQuantity = document.createElement('p');
                cartQuantity.classList.add('cart__text');
                cartQuantity.textContent = 'Quantity: ';
                cartLinkQuantity.appendChild(cartQuantity);

                const cartInput = document.createElement('input');
                cartInput.classList.add('cart__input');
                cartInput.type = 'number';
                cartInput.inputMode = 'numeric';
                cartInput.value = element.Quantity;
                cartLinkQuantity.appendChild(cartInput);

                const cartAEl = document.createElement('a');
                cartAEl.classList.add('cart__a');
                cartAEl.href = "#";
                cartContent.append(cartAEl);
                const cartCross = document.createElement('img');
                cartCross.classList.add('cart__svg');
                cartCross.src = './img/Vector.svg';
                cartAEl.append(cartCross);
            }
            if (cartsDiv.innerHTML.trim() === "Cart items") {
                cartsDiv.style.display = 'none';
            } else {
                cartsDiv.style.display = 'block';
            }
        });



    });
});

const cartsDiv = document.querySelector('.cart');
cartsDiv.textContent = "Cart items";

if (cartsDiv.innerHTML.trim() === "Cart items") {
    cartsDiv.style.display = 'none';
} else {
    cartsDiv.style.display = 'block';
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("cart__a")) {
        const block = event.target.parentNode.parentNode;
        console.log('123');
        block.remove();
    } else if (event.target.classList.contains("cart__svg")) {
        const block = event.target.parentNode.parentNode.parentNode;
        console.log('123');
        block.remove();
    }
    if (cartsDiv.innerHTML.trim() === "Cart items") {
        cartsDiv.style.display = 'none';
    } else {
        cartsDiv.style.display = 'flex';
    }
});

