import { DemoTooltip } from './demo-tooltip/demo-tooltip';

if ('customElements' in window) {
  window.customElements.define('ne14-demo-tooltip', DemoTooltip);
}

export { DemoTooltip };
