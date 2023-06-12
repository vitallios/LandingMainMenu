"use strict";

var forms = document.querySelectorAll('.email__form');
jQuery(document).ready(function () {
  jQuery("form").submit(function () {
    // Событие отправки с формы
    var form_data = jQuery(this).serialize(); // Собираем данные из полей

    jQuery.ajax({
      type: "POST",
      // Метод отправки
      url: "sendform.php",
      // Путь к PHP обработчику sendform.php
      data: form_data,
      success: swal({
        title: "Спасибо за заявку!",
        type: "success",
        showConfirmButton: false,
        timer: 2000
      })
    });
    forms[0].reset();
    forms[1].reset();
    modalEmail.classList.add('none');
    menuBtn.classList.remove('open');
    menuOpen = false;
    mobailMenu.style.left = '-80%';
    window.document.body.classList.remove('hidden');
    $(this).find('input, textarea').prop('disabled', false);
    event.preventDefault();
  });
});
var btn = $('#button');
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.removeClass('none');
  } else {
    btn.addClass('none');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});