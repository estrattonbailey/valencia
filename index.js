import jsonp from 'micro-jsonp'

export default ({ token, posts }, callback) => {
  return
  token && jsonp(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&count=${posts || 1}`, {
    response: (err, data) => {
      if (err) console.log(err)
      callback(data)
    }
  })
}
