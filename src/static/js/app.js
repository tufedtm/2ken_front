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

  const show_xs_bottom = () => {
    xsNavToggleBtn.classList.add('active');
    xsNavBottom.classList.add('active');
  };

  xsNavToggleBtn.addEventListener('click', () => {
    xsNavToggleBtn.dataset.jsXsToggleBtn = xsNavToggleBtn.dataset.jsXsToggleBtn ? '' : 'active';

    if (xsNavToggleBtn.dataset.jsXsToggleBtn === 'active') {
      show_xs_bottom();
    } else {
      xsNavToggleBtn.classList.remove('active');
      xsNavBottom.classList.remove('active');
    }
  });


  const xsBtn = document.querySelectorAll('[data-js-xs-btn]');
  const xsAuthBackBtn = document.querySelectorAll('[data-js-xs-back-btn]');

  const hide_xs_content = () => {
    document.querySelectorAll('[data-js-xs-content]').forEach(item => {
      item.style.display = 'none'
    })
  };

  const show_xs_content = (formType) => {
    hide_xs_content();
    document.querySelector(`[data-js-xs-content=${formType}]`).style.display = '';
  };

  hide_xs_content();

  xsAuthBackBtn.forEach(item => {
    item.addEventListener('click', () => {
      hide_xs_content();
    })
  });

  xsBtn.forEach(item => {
    item.addEventListener('click', () => {
      const contentName = item.getAttribute('data-js-xs-btn');

      if (contentName === 'catalog') {
        show_xs_bottom();
      }

      show_xs_content(contentName);
    })
  });

  /**
   * xs nav
   * end
   */
});
