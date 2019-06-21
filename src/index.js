const express = require('express');

const feature1 = require('./feature1');

const app = express();

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`),
);

app.get('/', (req, res) => {
  res.send(`Hello ${feature1.registerName(req)}`);
});

app.get('/feature/version', (req, res) => {
    const featureVersion = process.env.FEATURE_VERSION;
    console.log(featureVersion);
    res.send(!!featureVersion ? featureVersion : 'UNDEFINED')
});
