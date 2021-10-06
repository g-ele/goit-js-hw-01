function checkStorage(available, ordered) {
    let message;
     if (ordered === 0) { // Change this line
        message =  'There are no products in the order!';
      } else if (ordered > available) { // Change this line
        message = 'Your order is too large, there are not enough items in stock!';
      } else {
        message = 'The order is accepted, our manager will contact you';
      }
    
      return message;
    }
    console.log(checkStorage(100, 50));
    console.log(checkStorage(100, 130));
    console.log(checkStorage(70, 0));
    console.log(checkStorage(200, 20));
    console.log(checkStorage(200, 250));
    console.log(checkStorage(150, 0));