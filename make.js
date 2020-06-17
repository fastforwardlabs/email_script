let fs = require('fs')
let request = require('request')
let url = 'https://blog.fastforwardlabs.com/newsletters/2020-06.html'
let inlineCss = require('inline-css')
let pretty = require('pretty')
let HTMLParser = require('node-html-parser')

request.get(url, (err, res, body) => {
  inlineCss(body, { url: 'https://blog.fastforwardlabs.com' }).then(body => {
    let html = pretty(body)
    fs.writeFileSync(`email.html`, html)
    console.log('email made')
  })
})
