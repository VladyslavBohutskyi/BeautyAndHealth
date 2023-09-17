if (!customElements.get('s-client-section')) {
  customElements.define('s-client-section', class SClientSection extends HTMLElement {
    constructor() {
      super();  // all atr from html elem
    }

    connectedCallback() {
      console.log(this.getAttribute('data-speed'));
    }

  });

}





