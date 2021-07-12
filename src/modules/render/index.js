'use strict';

class CustomRender extends HTMLElement {
  constructor() {
    super();
    console.log('hello');
  }
}

customElements.define('custom-render', CustomRender);
