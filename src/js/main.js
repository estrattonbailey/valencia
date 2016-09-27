// import valencia from '../../../index.js'

const feed = window.valencia.default({
  token: '207617934.c76948d.91f3cd6735ac4cf09c01aa8fab1145e7',
  count: 4
}, (data) => {
  console.log(data)
})

window.feed = feed
