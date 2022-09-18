$(document).ready(function () {
  console.log('ready!')

  $('#login').on('click', function () {
    $.ajax({
      url: '/api/get',
      success: function (result) {
        $('#form3Example3').val(result.data)
        console.log(result)
      },
    })
  })
})
