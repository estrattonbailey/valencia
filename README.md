# valencia
Tiny helper to fetch Instagram posts. **553 bytes gzipped.**

## Install
```bash
npm i valencia --save
```

## Usage
```javascript
import valencia from 'valencia'

const feed = valencia({
  token: 'ACCESS_TOKEN',
  count: 4 // # of posts to fetch
}, ({ images, res, next }) => {
  // render data
})

console.dir(feed)
/*
{
  images: [...], // 4 images fetched and metadata
  res: {...}, // full response from Instagram
  next: function(done) // fetch next 4 posts
}
*/

feed.next(({images, res, next}) => // render next posts)
```

## Dependencies 
- [micro-jsonp](https://github.com/estrattonbailey/micro-jsonp/) A hyper-minimal standalone jsonp implementation in ES6. by [@estrattonbailey](https://github.com/estrattonbailey)

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)
