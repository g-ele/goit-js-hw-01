function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
  
    switch (password) { // Change this line
        case null:  // Change this line
          message = "Canceled by user!"; // Change this line
          break;
    
        case ADMIN_PASSWORD: // Change this line
          message = "Welcome!" ; // Change this line
          break;
    
        default: // Change this line
          message ="Access denied, wrong password!" ; // Change this line
          break;
      }
    // Change code above this line
    return message;
  }