const express = require('express')
const app = express()

app.use("/css",express.static("./css"))
app.use("/js",express.static("./js"))
app.use("/images",express.static("./images"))
app.use("/fonts",express.static("./fonts"))
app.use("/sass",express.static("./sass"))

app.get('/', (req, res) => res.sendFile(__dirname+"/index.html"))
app.get('/find_a_property', (req, res) => res.sendFile(__dirname+"/find_a_property.html"))
app.get('/rent_your_property', (req, res) => res.sendFile(__dirname+"/rent_your_property.html"))
app.get('/signup', (req, res) => res.sendFile(__dirname+"/signup.html"))

app.listen(3000, () => console.log('Example server listening on port 3000'))