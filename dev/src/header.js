if(!customElements.get('s-header')){
  customElements.define('s-header', class SHeader extends HTMLElement {
    constructor() {
      super();  // all atr from html elem
    }
  
    connectedCallback(){
      // this.querySelector('.header').addEventListener('click', () => this.querySelector('.header').classList.add('active'))
    }
  
  });

}





