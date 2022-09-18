$(document).ready(function () {
  console.log('ready!')

  $('#login').on('click', function () {
    $.ajax({
      url: 'https://thesis-ten.vercel.app//api/get',
      type: 'GET',
      callback: function (result) {
        $('#form3Example3').val(result)
      },
    })
  })
})
