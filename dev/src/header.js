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
      this.querySelector('.s-header__menu-btn').addEventListener('click',
        () => (this.classList.toggle('s-header--menu-active'),
          document.querySelector('body').classList.toggle('hiden')))
    }
    
    stickyHeader(){
      console.log(this.getAttribute('data-sticky'));
      function addSticky(){
        if(document.documentElement.scrollTop > 200){
          this.classList.add('sticky')
        }
      }
      window.addEventListener('scroll', (e) => console.log(document.documentElement.scrollTop))
    }

  });

}





