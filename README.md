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

### CSS Variables

Some degree of custom styling can be provided, by way of css variables:

```css
ne14-demo-tooltip {
  --src-border: 1px solid green;
  --reveal-trg-bg: rebeccapurple;
}
```

- **`--src-border-radius`** _Source item border radius. Defaults to: `3px`_
- **`--src-border`** _Source item border. Defaults to: `1px solid black`_
- **`--src-bg`** _Source item background. Defaults to: `inherit`_
- **`--src-fg`** _Source item foreground. Defaults to: `inherit`_
- **`--trg-border-radius`** _Target item border radius. Defaults to: `3px`_
- **`--reveal-src-border`** _Source item border (in reveal mode). Defaults to: `--src-border`_
- **`--reveal-src-bg`** _Source item background (in reveal mode). Defaults to: `inherit`_
- **`--reveal-src-fg`** _Source item foreground (in reveal mode). Defaults to: `inherit`_
- **`--reveal-trg-border`** _Target item border (in reveal mode). Defaults to: `1px solid black`_
- **`--reveal-trg-bg`** _Target item background (in reveal mode). Defaults to: `white`_
- **`--reveal-trg-fg`** _Target item foreground (in reveal mode). Defaults to: `inherit`_