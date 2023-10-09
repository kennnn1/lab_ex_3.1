$(document).ready(function(){
    var selectedMenu;

    $.fn.display = (showConverted) => {
        $('.converted-num').text(showConverted);
    }

    $.fn.convert = () => {
      var number = $('#numberVal').val();
      var conceptName = $('.select').find(":selected").val();

      selectedMenu = conceptName;

    if (selectedMenu == "binToDec") {
      var digit = parseInt(number, 2);
      $.fn.display(digit);
    } else if (selectedMenu == "octToDec") {
      var digit = parseInt(number , 8);
      $.fn.display(digit);
    } else if (selectedMenu == "hexToDec") {
      var digit = parseInt(number , 16);
      $.fn.display(digit);
    } else if (selectedMenu == "decToBin") {
      var digit = (number >>> 0).toString(2);
      $.fn.display(digit);
    } else if (selectedMenu == "decToOct") {
      var digit = (number >>> 0).toString(8);
      $.fn.display(digit);
    } else if (selectedMenu == "decToHex") {
      var digit = (number >>> 0).toString(16);
      $.fn.display(digit);
    } else if (selectedMenu == "binToOct") {
      var decimal = parseInt(number , 2);
      var digit = decimal.toString(8);
      $.fn.display(digit);
    } else if (selectedMenu == "binToHex") {
      var decimal = parseInt(number , 2);
      var digit = decimal.toString(16);
      $.fn.display(digit);
    } else if (selectedMenu == "octToBin") {
      var decimal = parseInt(number , 8);
      var digit = decimal.toString(2);
      $.fn.display(digit);
    } else if (selectedMenu == "octToHex") {
      var decimal = parseInt(number , 8);
      var digit = decimal.toString(16);
      $.fn.display(digit);
    } else if (selectedMenu == "hexToOct") {
      var decimal = parseInt(number , 16)
      var digit = decimal.toString(8);
      $.fn.display(digit);
    } else if (selectedMenu == "hexToBin") {
      var decimal = parseInt(number , 16)
      var digit = decimal.toString(2);
      $.fn.display(digit);
    } 
  }

     $(document).on('keypress',function(e) {
      if(e.which == 13) {
        $.fn.convert();
      }
    });

    $('.convert-number').on('click', () => {
      $.fn.convert();
    });

    $(".select").on('change', function() {
      $('.converted-num').text("");
  });
});