$(document).ready(function () {
  console.log('ready!')

  $('#login').on('click', function () {
    $.ajax({
      url: '/api/student/get',
      success: function (result) {
        $('#form3Example3').val(result.name)
        $('#form3Example4').val(result.age)
      },
    })
  })
})
