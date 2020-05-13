
$(function () {
    // połaczenie ceny z wyborem pizzy
    $("#pizza").change(function () {
      let price = $(this).val()
      $('#priceP').text(price)
    });
  
  
    $("#sauce").change(function () {
      let price_s = $(this).val()
      $('#priceS').text(price_s)
    });
  
    function order() {
     
      // wszystko do input nazwisko       
      let surname = $('#surname').val();
      if (surname === null || surname == "") {
        $('#surname').css('border', '2px solid red')
        $(this).attr('title');
        $('#p1').css('opacity', '1')
      } else {
        $('#surname').css('border', '2px solid #eeeeee')
        $('#p1').css('opacity', '0')
      }
  
      // wszystko do input ulica
      let street = $('#street').val();
      if (street === null || street == "") {
        $('#street').css('border', '2px solid red')
        $(this).attr('title');
        $('#p2').css('opacity', '1')
      } else {
        $('#street').css('border', '2px solid #eeeeee')
        $('#p2').css('opacity', '0')
      }
  
      // wszystko do input numer
      let number = $('#number').val();
      if (number === null || number >= 1) {
        $('#number').css('border', '2px solid #eeeeee')
        $('#p3').css('opacity', '0')
      } else {
        $('#number').css('border', '2px solid red')
        $(this).attr('title');
        $('#p3').css('opacity', '1')
      }
  
      // wszystko do input kod
      let zip_kode = $('#zip_kode').val();
      if (zip_kode === null || zip_kode >= 1) {
        $('#zip_kode').css('border', '2px solid #eeeeee')
        $('#p4').css('opacity', '0')
      } else {
        $('#zip_kode').css('border', '2px solid red')
        $(this).attr('title');
        $('#p4').css('opacity', '1')
      }
  
      // wszystko do input city
      let city = $('#city').val();
      if (city === null || city == "") {
        $('#city').css('border', '2px solid red')
        $(this).attr('title');
        $('#p4').css('opacity', '1')
      }
      else {
        $('#city').css('border', '2px solid #eeeeee')
        $('#p4').css('opacity', '0')
      }
  
      // wszystko do wybierz pizze 
      let pizzaPrice = $('#pizza').val();
      if (pizzaPrice === null || pizzaPrice > 0) {
        $('#pizza').css('border', '2px solid #eeeeee')
        $('#p5').css('opacity', '0')
      }
      else {
        $('#pizza').css('border', '2px solid red')
        $('#p5').css('opacity', '1')
      }
  
      // wszystko do sosu
      let sauce = $('#sauce').val();
      if (sauce === null || sauce >= 0) {
        $('#sauce').css('border', '2px solid #eeeeee')
      }
      else {
        $('#sauce').css('border', '2px solid red')
      }
  
  
      // do checkboxa
      let c = $("#check");
      if (c.is(":checked")) {
        $('#text').css('color', '#eeeeee')
        $('#p6').css('opacity', '0')
      } else {
        $('#p6').css('opacity', '1')
      }
    }
  
  
  
  
    $('#btn').click(function (e) {
      e.preventDefault()
      order()
    })
  })