document.addEventListener('DOMContentLoaded', function() {
    var addToCartBtn = document.getElementById('addToCartBtn');
    var modal = document.getElementById('cartModal');
    var closeBtn = document.getElementsByClassName('close')[0];
  
    addToCartBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });





  