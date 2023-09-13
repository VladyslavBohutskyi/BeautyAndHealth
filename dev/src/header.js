if (!customElements.get('s-header')) {
  customElements.define('s-header', class SHeader extends HTMLElement {
    constructor() {
      super();  // all atr from html elem
    }

    connectedCallback() {
      this.mobMenu()
      this.stickyHeader()
    }


    mobMenu() {
      this.querySelector('.s-header__menu-btn').
        addEventListener(
          'click', () =>
        (this.classList.toggle('s-header--menu-active'),
          document.querySelector('body').classList.toggle('hiden')))
    }

    stickyHeader() {
      console.log(this.getAttribute('data-sticky'));
      const _this = this
      function addSticky() {
        if (document.documentElement.scrollTop > 200) {
          document.querySelector('#shopify-section-header').classList.add('sticky')
        } else {
          document.querySelector('#shopify-section-header').classList.remove('sticky')
        }
      }
      window.addEventListener('scroll', (e) => addSticky())
    }

  });

}





