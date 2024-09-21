const snackSection1 = document.querySelector('.snacks-section1');
const snackSection2 = document.querySelector('.snacks-section2');


const SnacksProducts = [
    {
        imgSrc: '../image/chakli.jpg',
        title: 'Chakli',
        price: '$50',
        rating: '4.0'
    },
    {
        imgSrc: '../image/sandwich.jpg',
        title: 'Sandwich',
        price: '₹15',
        rating: '5.0'
    },
    {
        imgSrc: '../image/samosa.png',
        title: 'Samosa',
        price: '₹30',
        rating: '4.0'
    },
    {
        imgSrc: '../image/aalo ticki.jpg',
        title: 'Aalo Ticki',
        price: '₹50',
        rating: '5.0'
    },
    {
        imgSrc: '../image/vada pav.jpg',
        title: 'Wada Pav',
        price: '₹30',
        rating: '4.0'
    },
    {
    imgSrc: '../image/gulab.jpg',
    title: 'Gulab Jamun',
    price: '₹50',
    rating: '4.5',
    
  },
  {
    imgSrc: '../image/cham cham.jpeg',
    title: 'Cham Cham',
    price: '₹240',
    rating: '4.5',
   
  },
  {
    imgSrc: '../image/Rasgulla.jpg',
    title: 'Rasgulla',
    price: '₹150',
    rating: '4.0',
    
  },
  {
    imgSrc: '../image/kesar ladoo.jpg',
    title: 'Kesar Laddo',
    price: '₹400',
    rating: '5.0',
   
  },
  {
    imgSrc: '../image/apple pie.jpg',
    title: 'Apple Pie',
    price: '₹100',
    rating: '4.0',
    
  }
    
   
   
];



SnacksProducts.slice(0, 5).forEach(product => {
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
    snackSection1.innerHTML += productHTML;
});

SnacksProducts.slice(5,10).forEach(product=>{
    const productHTML =`<div class="swiper-slide box">
      <img src="${product.imgSrc}" alt="${product.title}">
      <h3>${product.title}</h3>
      <div class="price">${product.price}</div>
      <div class="stars">
        ${'★'.repeat(Math.floor(product.rating))}
        ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
      </div>
      <a href="payment.html" class="btn">Buy Now</a>
    </div>`;
    snackSection2.innerHTML +=productHTML;
})

