const iceCreamSection1 = document.querySelector('.Ice-Cream-section1')
const iceCreamSection2 = document.querySelector('.Ice-Cream-section2')

const IceCreamProducts = [
    {
        imgSrc: '../image/Amul-Cup-American-Nuts.jpg',
        title: 'American Nuts',
        price: '₹150',
        rating: '4.5'
      },
      {
        imgSrc: '../image/BLUE-BUNNY-ICE-CREAM-VANILLA-B.png',
        title: 'Blue Bunny',
        price: '₹200',
        rating: '5.0'
      },
      {
        imgSrc: '../image/blue bell.png',
        title: 'Blue Bell',
        price: '₹250',
        rating: '4.0'
      },
      {
        imgSrc: '../image/magnum.png',
        title: 'Magnum',
        price: '₹250',
        rating: '4.0'
      },
      {
        imgSrc: '../image/vanilla.png',
        title: 'Vanilla',
        price: '₹100',
        rating: '5.0'
      },
      {
        imgSrc: '../image/black cheery.png',
        title: 'Black Cherry',
        price: '₹200',
        rating: '5.0'
      },
      {
        imgSrc: '../image/black current.jpg',
        title: 'Black Current',
        price: '₹200',
        rating: '5.0'
      },
      {
        imgSrc: '../image/butter scotch.jpg',
        title: 'Butter Scotch',
        price: '₹120',
        rating: '3.5'
      },
      {
        imgSrc: '../image/espresso.png',
        title: 'Espresso',
        price: '₹150',
        rating: '5'
      },
      {
        imgSrc: '../image/strawberry.jpg',
        title: 'Strawberry',
        price: '₹120',
        rating: '5'
      }
]



IceCreamProducts.slice(0,5).forEach(product=>{
    const productHTML = `
    <div class="swiper-slide box">
      <img src="${product.imgSrc}" alt="${product.title}">
      <h3>${product.title}</h3>
      <div class="price">${product.price}</div>
      <div class="stars">
        ${'★'.repeat(Math.floor(product.rating))}
        ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
      </div>
      <a href="payment.html" class="btn">Buy Now</a>
    </div>`;
    iceCreamSection1.innerHTML += productHTML;
})

IceCreamProducts.slice(5,10).forEach(product =>{
    const productHTML = `
    <div class="swiper-slide box">
      <img src="${product.imgSrc}" alt="${product.title}">
      <h3>${product.title}</h3>
      <div class="price">${product.price}</div>
      <div class="stars">
        ${'★'.repeat(Math.floor(product.rating))}
        ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
      </div>
      <a href="payment.html" class="btn">Buy Now</a>
    </div>`;
    iceCreamSection2.innerHTML += productHTML;
})