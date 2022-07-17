const timeline = gsap.timeline({default: {duration: 1}})

timeline
    // .from('.header', {y: '-100%', ease: 'slow'})
    .from('.menu-item', {opacity: 0, stagger: .1})
    .from('.filter-item',{opacity: 0, stagger: .3})
    .from('.product-item',{opacity: 0, stagger: .3})