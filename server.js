const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
const path = require('path')
const port = process.env.REACT_APP_API_PORT || 5000
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY

// enable CORS using npm package
let cors = require('cors');
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// make sure you amend the path.
// in this case the react application will be packaged in the build directory
// we use '/*' so that we don't get the typical error "Cannot GET"
app.use(express.static(path.join(__dirname, '/build')))
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// verify reCAPTCHA response
app.post('/verify', (req, res) => {
    if(req.body['token'] === undefined || req.body['token'] === '' || req.body['token'] === null)
    {
        return res.json({"response": "Missing token"});
    }

    let VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${req.body['token']}`;
    request(VERIFY_URL,function(error,response,body) {
        body = JSON.parse(body);

        if(body.success !== undefined && !body.success && body.score < 0.4) {
            return res.json({"response" : false});
        }
        res.json({"response" : true});
    });
});

app.listen(port, () => console.log("Listening on Port", port))