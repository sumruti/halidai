const config = require('./common/config/env.config.js');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const BookingRouter = require('./apis/booking/routes.config');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.get('/', async (req, res) => {
       res.send("Apis working")
})



app.use(bodyParser.json());

BookingRouter.routesConfig(app);



app.listen(process.env.PORT || 3000, function () {
    console.log('app listening at port %s', config.port);
});
