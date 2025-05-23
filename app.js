import express from 'express'
const app = express()

// get the port from env variable
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
} )

app.listen(PORT, () => {

})
