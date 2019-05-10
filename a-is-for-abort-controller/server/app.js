const express = require('express')
const app = express()

app.get('/never-gonna-give-you-a-response', () => {})

app.listen(3000, () => console.log('I am C-3PO, Human Cyborg Relations. How might I serve you?'))
