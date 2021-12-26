const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser('secret'))

app.get('/favicon.ico', (req, res) => res.status(404))

app.get('*', (req, res) => {
  console.log()
  console.log(`<-- ${req.method} ${req.path}`)
  if(req.cookies) {
    console.log('\n  cookies:')
    Object.entries(req.cookies).forEach(([k, v]) => {
      console.log(`    ${k.padStart(15)}: ${v}`)
    })
  }
  if(req.signedCookies) {
    console.log('\n  signed cookies:')
    Object.entries(req.signedCookies).forEach(([k, v]) => {
      console.log(`    ${k.padStart(15)}: ${v === false ? '<INVALID SIGNATURE> ' : v}`)
    })
  }
  res.cookie('foo-unsigned', 'bar-unsigned', { httpOnly: true })
  res.cookie('foo-signed', 'bar-signed', { httpOnly: true, signed: true })
  res.send('hello!')
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`started on port ${port}`))
