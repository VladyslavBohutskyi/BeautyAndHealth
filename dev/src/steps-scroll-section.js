if (!customElements.get('s-steps-scroll')) {
  customElements.define('s-steps-scroll', class SStepsScroll extends HTMLElement {
    constructor() {
      super();  // all atr from html elem
    }

    connectedCallback() {
      this.scrollEvent()
    }

    checkHeight(){
      console.log(this.querySelector('.s-steps-scroll__images').getBoundingClientRect().y);
      }

    scrollEvent() {
      window.addEventListener('scroll', () => this.checkHeight())
    }


  });
}





