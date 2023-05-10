const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const blogSwiper = new Swiper('.blog-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.blog-swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.blog-swiper-button-next',
      prevEl: '.blog-swiper-button-prev',
    },
  });

  const quotesSwiper = new Swiper(".quotes-swiper", {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1.3,
    // centeredSlides: true,
    spaceBetween: 64,
    grabCursor: true,
    pagination: {
      el: ".quotes-swiper-pagination",
      clickable: true,
    },
  });


  // document.querySelectorAll('.faq_main_elem').forEach((item) =>
  //   item.addEventListener('onClick', () => {
  //     document.querySelector('.faq_btn_active').classList.remove('.none')
  //   })

  // )

  let btn = document.querySelectorAll('.faq_btn');
  let btnActive = document.querySelectorAll('.faq_btn_active');


  btn.forEach(function(el){
    el.addEventListener('click', function(){
      let parent = el.parentNode.parentNode;
      parent.querySelector('h2').classList.add('active_text');
      parent.querySelector('.faq_btn_active').classList.remove('none');
      parent.querySelector('.faq_btn').classList.add('none');
      parent.querySelector('.faq_main_elem_content').classList.remove('none');
    })
  }) 

  btnActive.forEach(function(el){
    el.addEventListener('click', function(){
      let parent = el.parentNode.parentNode;
      parent.querySelector('h2').classList.remove('active_text');
      parent.querySelector('.faq_btn_active').classList.add('none');
      parent.querySelector('.faq_btn').classList.remove('none');
      parent.querySelector('.faq_main_elem_content').classList.add('none');
    })
  })
  
