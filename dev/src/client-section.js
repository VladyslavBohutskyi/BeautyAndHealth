if (!customElements.get('s-client-section')) {
  customElements.define('s-client-section', class SClientSection extends HTMLElement {
    constructor() {
      super();  // all atr from html elem
    }

    connectedCallback() {
      console.log(this.getAttribute('data-speed'));
      this.initSlider()
    }

    initSlider(){
      this.speed = this.getAttribute('data-speed')
      this.settings = {
        autoPlay: +this.speed,
        prevNextButtons: true,
        pageDots: false,
        cellAlign: 'left',
        contain: true,
      }

      this.speed == 'false' ? false : this.settings.autoPLay = +this.speed


      this.slider = new Flickity(this.querySelector('.s-clients-section__slider'), this.settings)
    }


  });
}





