import { CustomElementBase } from '@ne1410s/cust-elems';

import markupUrl from './demo-tooltip.html';
import stylesUrl from './demo-tooltip.css';

export class DemoTooltip extends CustomElementBase {
  public static readonly observedAttributes = ['corner', 'reveal'];

  constructor() {
    super(stylesUrl, markupUrl);
  }

  set reveal(value: string) {
    this.setAttribute('reveal', value);
  }

  set corner(value: number) {
    this.setAttribute('corner', value + '');
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case 'corner':
        const target = this.root.querySelector('.reveal');
        const corner = '1234'.split('').indexOf(newValue) === -1 ? '' : newValue;
        if (corner) target.setAttribute('data-corner', corner + '');
        else target.removeAttribute('data-corner');
        break;
      case 'reveal':
        const slot = this.root.querySelector('slot[name=reveal]');
        slot.textContent = newValue;
        break;
    }
  }

  connectedCallback() {
    // on connected to dom
  }

  disconnectedCallback() {
    // on disconnected from dom
  }
}
