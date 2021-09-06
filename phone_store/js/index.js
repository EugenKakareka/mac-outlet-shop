const toHTML = (item) => `  <div class='cards__item'>     
<div class="card">
<div class="card__img">
    <img src=img/${item.imgUrl} alt='iphone'>
</div>
<div class="card__content">
    <h4 class="card__title">${item.name}</h4>
    <div class="card__stock">
    <img src= alt="close">
    <div>
    <span>${item.inStock}</span> left
        in stock
    </div>    
    </div>
    <div class="card__price">Price <span>${item.price}$</span></div>
    <button class="btn card__btn" type="submit">Add to cart</button>
</div>
<div class="reviews">
    <div class="reviews__statistic">
        <div class="reviews__proc"><span>${item.reviews}%</span> Positive reviews</div>
        <div class="reviews__avarage">Above avarage</div>
    </div>
    <div class="reviews__orders">
        <span class="reviews__amount"></span>
        <span>orders</span>
    </div>
    <span class="heart">
    <img src="./img/icons/like_filled.svg" alt="heart"></span>
</div>
</div>
</div>

`;

function render() {
    const html = items.map(item => toHTML(item)).join('')
    document.querySelector('.cards').innerHTML = html
}

render()