$(() => {

  /**
   * form styler
   * start
   */

  $('input[type=radio], input[type=checkbox]').styler();

  /**
   * form styler
   * start
   */


  /**
   * header form
   * start
   */

  function changeAuthForm(name) {
    $('[data-form-type]').removeAttr('data-header-form');
    $('[data-form-type=' + name + ']').attr('data-header-form', '');
  }

  $('[data-form-type-link]').on('click', function () {
    let formType = $(this).attr('data-form-type-link');

    changeAuthForm(formType);
  });

  /**
   * header form
   * end
   */


  /**
   * catalog detail slider
   * start
   */

  $('[data-js-lightslider]').lightSlider({
    item: 1,
    controls: true,
    loop: true,
    pager: false
  });

  /**
   * catalog detail slider
   * end
   */
});
