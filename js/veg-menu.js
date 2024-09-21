const vegSection1 = document.querySelector('.veg-section-1');
const vegSection2 = document.querySelector('.veg-section-2');
const vegSection3 = document.querySelector('.veg-section-3');

const vegProducts = [
    {
        imgSrc: '../image/12.-Grilled-Paneer.jpg',
        title: 'Grilled Paneer',
        price: '₹150',
        rating: 5
      },
      {
        imgSrc: '../image/panner_chilli.jpg',
        title: 'Paneer Chilli',
        price: '₹100',
        rating: 4
      },
      {
        imgSrc: '../image/grilled_sandwich.jpg',
        title: 'Grilled Sandwich',
        price: '₹100',
        rating: 4.5
      },
      {
        imgSrc: '../image/Pasta-with-Tomato-Cream-Sauce-4.jpg',
        title: 'Pasta',
        price: '₹80',
        rating: 5
      },
      {
        imgSrc: '../image/aalo_paratha.jpg',
        title: 'Aalo Paratha(4 pc)',
        price: '₹100',
        rating: 3.5
      },
      {
        imgSrc: '../image/Paneer-Makhani.jpg',
        title: 'Paneer-Makhani',
        price: '₹70',
        rating: 5
      },
      {
        imgSrc: '../image/dal_makhani.jpg',
        title: 'Dal-makhani',
        price: '₹100',
        rating: 4.5
      },
    
    
    
      {
          imgSrc :'../image/mixed_vegetables.jpg',
          title :'Mix-vegetables',
          price : '₹100',
          rating :'3.5'
          
      },
      {
          imgSrc : '../image/Veg-Momos-2-scaled-e1620712323714-1300x809.jpg',
          title : 'Momos',
          price :'₹100',
          rating :'4.3'
      },
      {
          imgSrc : '../image/schezwan-veg-fried-rice.jpg',
          title : 'Schezwan rice',
          price :'₹150',
          rating :'4.3'
      },
    
      {
          imgSrc : '../image/mushroom_masala.jpg',
          title : 'mashroom masala',
          price : '₹200',
          rating : '4.5'
      },
      {
          imgSrc : '../image/mushroom_masala.jpg',
          title : 'mashroom masala',
          price : '₹200',
          rating : '4.5'
    
      },
      {
          imgSrc : '../image/tandoori-paneer-tikka_662214-4178.jpg',
          title : 'tandoori-paneer-tikka',
          price : '₹200',
          rating : '4.5'
          
      },
      {
          imgSrc : '../image/tandoori-paneer-tikka_662214-4178.jpg',
          title : 'tandoori-paneer-tikka',
          price : '₹200',
          rating : '4.5'
          
      },
      {
          imgSrc : '../image/mushroom chilli.jpg',
          title : 'mushroom chilli',
          price : '₹250',
          rating : '4.4'
          
      },
    
    
      {
          imgSrc : '../image/burger.jpg',
          title : 'Burger',
          price : '₹250',
          rating : '4.4'
          
      },
      {
          imgSrc : '../image/brown-rice-dosa-recipe.jpg',
          title : 'Dosa',
          price : '₹50',
          rating : '4.4'
          
      },
      {
          imgSrc : '../image/idli_istock.jpg',
          title : 'Idli',
          price : '₹50',
          rating : '4.4'
          
      },
      {
          imgSrc : '../image/soya_chunks.jpg',
          title : 'Soya chunks',
          price : '₹150',
          rating : '4.4'
          
      },
      {
          imgSrc : '../image/paneer pulav.jpg',
          title : 'panner pulav',
          price : '₹150',
          rating : '4.4'
          
      },
];

vegProducts.slice(0, 5).forEach(product => {
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
    vegSection1.innerHTML += productHTML;
});

vegProducts.slice(5, 10).forEach(product => {
    const productHTML = `
    <div class="swiper-slide box">
      <img src="${product.imgSrc}" alt="${product.title}">
      <h3>${product.title}">
      <div class="price">${product.price}</div>
      <div class="stars">
        ${'★'.repeat(Math.floor(product.rating))}
        ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
      </div>
      <a href="payment.html" class="btn">Buy Now</a>
    </div>`;
    vegSection2.innerHTML += productHTML;
});

vegProducts.slice(10, 15).forEach(product => {
    const productHTML = `
    <div class="swiper-slide box">
      <img src="${product.imgSrc}" alt="${product.title}">
      <h3>${product.title}">
      <div class="price">${product.price}</div>
      <div class="stars">
        ${'★'.repeat(Math.floor(product.rating))}
        ${product.rating % 1 !== 0 ? '<i class="fas fa-star-half-alt"></i>' : ''}
      </div>
      <a href="payment.html" class="btn">Buy Now</a>
    </div>`;
    vegSection3.innerHTML += productHTML;
});









































































