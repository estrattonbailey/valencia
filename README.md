# putz
A tiny progress bar library for AJAX and SPAs in ES6. Full API with the ability to *putz*: increment randomly to simulate loading events.

ES6 Source: **~655bytes gzipped**
UMD: **~1kb gzipped** 

## Install
```
npm i putz --save
```

## Usage
```javascript
import putz from 'putz'

/**
 * Default
 *
 * Inserts loader as first child of
 * document.body, with default options
 */
const loader = putz()

/**
 * With options
 */
const loader = putz(document.getElementById('header'), {
  classname: 'putz',
  speed: 200,
  trickle: 5
})

// Start loading
loader.start()

// Randomly increment
loader.inc()

// Increment by 15
loader.inc(15)

// Go to 50%
loader.go(50)

// Randomly increment every 100ms
loader.putz(100)

// Go to 100% and hide
loader.end()
```

## Required CSS
Replace `putz` here with the classname you passed to the `classname` option, and replace transition speed with the value passed to the `speed` option.
```css
.putz {
  position: fixed;
  width: 100%;
  left: 0; top: 0;
  z-index: 1000;
}
.putz__inner {
  position: absolute;
  width: 100%;
  left: 0; top: 0;
  height: 2px;
  background-color: #00C9FC;
  transition: transform 200ms ease-in-out; 
  transform: translateX(-100%);
}
```

## Related Projects
- [nprogress](https://github.com/rstacruz/nprogress/) Slim progress bars for Ajax'y applications. by [@rstacruz](https://github.com/rstacruz)
- [nanobar](https://github.com/jacoborus/nanobar) Very lightweight progress bars. by [@jacoborus](https://github.com/jacoborus)

MIT License
