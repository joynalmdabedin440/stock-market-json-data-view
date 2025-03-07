const express = require('express')
const cors = require('cors')
const stock_data= require("./stock_market_data.json")
const port = 5000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send(stock_data)

})

app.listen(port, () => {
    console.log('successfully run');
    
})