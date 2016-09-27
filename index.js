import jsonp from 'micro-jsonp'

export default ({ token, count }, cb) => {
  const data = {
    images: [],
    next: () => console.log('Awaiting response...'),
    res: {}
  }

  const response = (err, res) => {
    if (err) console.log(err)

    data.images = res.data
    data.next = next(res.pagination.next_url)
    data.res = res

    return {
      images: data.images,
      next: data.next,
      res
    }
  }

  const next = url => done => get(url, (err, res) => done ? done(response(err, res)) : cb(response(err, res)))

  const get = (url, done) => jsonp(url, {
    response: done 
  })

  get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&count=${count || 1}`, response)

  return data 
}
