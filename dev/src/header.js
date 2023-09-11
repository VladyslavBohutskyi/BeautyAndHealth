if (!customElements.get('s-header')) {
  customElements.define('s-header', class SHeader extends HTMLElement {
    constructor() {
      super();  // all atr from html elem
    }

    connectedCallback() {
      this.querySelector('.s-header__menu-btn').addEventListener('click',
        () => (this.classList.toggle('s-header--menu-active'),
          document.querySelector('body').classList.toggle('hiden')))
    }

  });

}





