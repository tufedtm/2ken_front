$(() => {

  /**
   * input phone mask
   * start
   */

  $('input[type=tel]').mask('+7 (999) 999-99-99');

  /**
   * input phone mask
   * end
   */


  /**
   * form styler
   * start
   */

  $('input[type=file], select').styler({
    fileBrowse: '+',
    fileNumber: 'Фотографии: %s',
    filePlaceholder: ''
  });

  /**
   * form styler
   * start
   */


  /**
   * header form
   * start
   */

  const changeAuthForm = (name) => {
    $('[data-form-type]').removeAttr('data-header-form');
    $('[data-form-type=' + name + ']').attr('data-header-form', '');
  };

  $('[data-form-type-link]').on('click', () => {
    const formType = $(this).attr('data-form-type-link');

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


  /**
   * xs nav
   * start
   */

  const xsNavToggleBtn = document.querySelector('[data-js-xs-toggle-btn]');
  const xsNavBottom = document.querySelector('[data-js-xs-bottom]');

  xsNavToggleBtn.addEventListener('click', () => {
    xsNavToggleBtn.dataset.jsXsToggleBtn = xsNavToggleBtn.dataset.jsXsToggleBtn ? '' : 'active';

    if (xsNavToggleBtn.dataset.jsXsToggleBtn === 'active') {
      xsNavToggleBtn.classList.add('active');
      xsNavBottom.classList.add('active');
    } else {
      xsNavToggleBtn.classList.remove('active');
      xsNavBottom.classList.remove('active');
    }
  });


  const xsAuthBtnSignIn = document.querySelectorAll('[data-js-xs-auth-btn=sign_in]');
  const xsAuthBtnSignUp = document.querySelectorAll('[data-js-xs-auth-btn=sign_up]');
  const xsAuthBackBtn = document.querySelectorAll('[data-js-xs-auth-back-btn]');

  const hide_xs_auth_forms = () => {
    document.querySelectorAll('[data-js-xs-auth-form]').forEach(item => {
      item.style.display = 'none'
    })
  };

  const show_xs_auth_form = formType => {
    hide_xs_auth_forms();
    const xsAuthForm = document.querySelector(`[data-js-xs-auth-form=${formType}]`);
    xsAuthForm.style.display = '';
  };

  hide_xs_auth_forms();

  xsAuthBackBtn.forEach(item => {
    item.addEventListener('click', () => {
      hide_xs_auth_forms();
    })
  });

  xsAuthBtnSignIn.forEach(item => {
    item.addEventListener('click', () => {
      show_xs_auth_form('sign_in')
    })
  });

  xsAuthBtnSignUp.forEach(item => {
    item.addEventListener('click', () => {
      show_xs_auth_form('sign_up')
    })
  });

  /**
   * xs nav
   * end
   */
});
