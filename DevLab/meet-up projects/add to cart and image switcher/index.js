const smallImages = $('.small-img img');
const largeImage = $('.big-image img');
const cart = $('.cart');

smallImages.each(function () {
  $(this).on('click', () => {
    removeActive(smallImages);
    $(this).addClass('active');
    largeImage.attr('src', $(this).attr('src'));
  });
});

const removeActive = (items) => {
  items.each(function () {
    $(this).removeClass('active');
  });
};






// products
const products = $('.products > div');

products.each(function () {
  const image = $(this).find('img');
  const name = $(this).find('.name');
  const price = $(this).find('.price');
  const addToCart = $(this).find('button');

  addToCart.on('click', () => {
    addCartFunct(name, image, price, addToCart);
  });
});



// add to cart
function addCartFunct(name, img, price, addToCart) {
  const imageSrc = img.attr('src');

  const nameEl = $('<p>');
  nameEl.text(name.text());
  const priceEl = $('<p>');
  priceEl.text(price.text());

  const div = $('<div>');
  div.append(nameEl, priceEl);

  const imageEL = $('<img>');
  imageEL.attr('src', imageSrc);

  const remove = $('<button>');
  remove.addClass('remove');
  remove.text('Remove');
    remove.on('click', function () {
      $(this).parent().remove();  
      if (cart.find('* > div').length == 0){
    emptyCart.show()
  }
    });


  const cart_item = $('<div>');
  cart_item.addClass('cart-item');
  cart_item.append(imageEL, div, remove);
  cart.append(cart_item);
    const emptyCart = $('.empty-cart')

  if( cart.find('* > div').length > 0){
    emptyCart.hide()
  }
}