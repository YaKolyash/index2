$('form').on('submit', function(e) {
  e.preventDefault();
  let this_form = $(this)[0];
  let form_data = new FormData(this_form);
  
  $.ajax({
    url: '/main.php',
    type: 'POST',
    data: form_data,
    processData: false,
    contentType: false,
    success: function() {
      $('.какой-топопап').fadeIn(300)
    }
  })
})