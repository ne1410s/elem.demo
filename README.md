# @ne1410s/demo

## A custom element for demonstration purposes and to serve as a project template.

```html
<ne14-demo-tooltip reveal="Hey!">
  <p>Hello world</p>
</ne14-demo-tooltip>
```

- **Use:** `<script src="PATH_TO_UMD_SCRIPT"></script>`
- **Extend:** _npm i -S @ne1410s/demo_

### Attributes

```html
<ne14-demo-tooltip corner="3" reveal="Definition here"
  >YO' STUFF<ne14-demo-tooltip></ne14-demo-tooltip
></ne14-demo-tooltip>
```

- **corner**: If specified, the reveal text is positioned in a corner of the screen:
  - 1: Top-left, 2: Top-right, 3: Bottom-right, 4: Bottom-left
- **reveal**: The definition text that gets shown on hover

### Events

```javascript
const tooltip = document.querySelector('ne14-demo-tooltip');

tooltip.addEventListener('...', () => {
  console.log('Event fired!');
});
```

- _There are no bespoke events raised in the internal workings of this element_

### Methods

- _There are no bespoke methods exposed in this element_

### Properties

- `set` **corner** (number): Sets the attribute with the corresponding value
- `set` **reveal** (string): Sets the attribute with the corresponding value
