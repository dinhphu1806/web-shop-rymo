ScrollReveal({ 
    // reset: true, // tắt đi khi scroll quay lại sẽ k chuyển động
    distance: '100px',
    duration: 2500,
    delay: 400
});
ScrollReveal().reveal('.banner-title', { 
    delay: 500,
    origin: 'left'
});

ScrollReveal().reveal('.banner-h1', { 
    delay: 500,
    origin: 'right'
});
ScrollReveal().reveal('.banner-shop-container', { 
    delay: 500,
    origin: 'top'
});

ScrollReveal().reveal('.underline', { 
    delay: 500,
    origin: 'left'
});