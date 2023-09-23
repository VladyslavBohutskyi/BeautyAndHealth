if(!customElements.get('s-our-clients')){

  customElements.define('s-our-clients', class SOurClients extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){
   this.initSlider()
  }

  initSlider() {
    this.speed = this.getAttribute('data-speed')
    this.apply = (this.getAttribute('data-slider_apply') == 'true' ? false : true )
    this.settings = {
      prevNextButtons: true,
      pageDots: false,
      cellAlign: 'center',
      contain: true,
      draggable: false,
      watchCSS: this.apply
    }

    this.speed == 'false' ? false : this.settings.autoPlay = +this.speed;

    this.slider = new Flickity(this.querySelector('.s-our-clients__slider'), this.settings)
  }


})

}





