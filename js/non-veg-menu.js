const nonVegSection1 = document.querySelector('.non-veg-section1');
const nonVegSection2 = document.querySelector('.non-veg-section2');
const nonVegSection3 = document.querySelector('.non-veg-section3');


const nonVegProducts = [
    {
        imgSrc: '../image/chicken kadhai.png',
        title: 'Chicken Kadai',
        price: '₹200',
        rating: '5.0'
    },
    {
        imgSrc: '../image/chicken lolipop.jpg',
        title: 'Chicken Lollipop',
        price: '₹100',
        rating: '4.5'
    },
    {
        imgSrc: '../image/chicken roasted.jpg',
        title: 'Chicken Roasted',
        price: '₹150',
        rating: '5.0'
    },
    {
        imgSrc: '../image/chicken kabab.jpg',
        title: 'Chicken Kabab',
        price: '₹60',
        rating: '4.5'
    },
    {
        imgSrc: '../image/fish fry.jpg',
        title: 'Fish Fry',
        price: '₹150',
        rating: '5.0'
    },
    {
        imgSrc: '../image/chicken biryani.jpg',
        title: 'Chicken Biryani',
        price: '₹150',
        rating: '4.5'
    },
    {
        imgSrc: '../image/mutton biryani.png',
        title: 'Mutton Biryani',
        price: '₹200',
        rating: '5.0'
    },
    {
        imgSrc: '../image/chicken fried.jpg',
        title: 'Chicken Fried',
        price: '₹120',
        rating: '5.0'
    },
    {
        imgSrc: '../image/breadomellete555.png',
        title: 'Bread Omelet',
        price: '₹50',
        rating: '5.0'
    },
    {
        imgSrc: '../image/shawarma.jpeg',
        title: 'Chicken Shawarma',
        price: '₹150',
        rating: '4.5'
    },
    {
        imgSrc: '../image/chicken kabab.jpg',
        title: 'Chicken Kabab',
        price: '₹100',
        rating: '4.5'
    },
    {
        imgSrc: '../image/squid fry.jpg',
        title: 'Squid Fry',
        price: '₹150',
        rating: '4.5'
    },
    {
        imgSrc: '../image/chicken korma.png',
        title: 'Chicken Korma',
        price: '₹120',
        rating: '5.0'
    },
    {
        imgSrc: '../image/mutton-curry.png',
        title: 'Mutton Curry',
        price: '₹150',
        rating: '5.0'
    },
    {
        imgSrc: '../image/chickenmomos.jpg',
        title: 'Chicken Momos',
        price: '₹200',
        rating: '5.0'
    }
];



nonVegProducts.slice(0, 5).forEach(product => {
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
    nonVegSection1.innerHTML += productHTML;
});

nonVegProducts.slice( 5,10).forEach(product => {
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
    nonVegSection2.innerHTML += productHTML;
});

nonVegProducts.slice(10, 15).forEach(product => {
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
    nonVegSection3.innerHTML += productHTML;
});
