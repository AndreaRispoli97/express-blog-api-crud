console.log('Andrea');

const express = require('express');
const app = express();
const port = 3400
const router = require('./routers/routerPosts');


app.use(express.json());

app.use(express.static('public'));

app.use('/posts', router);

app.listen(port, () => {
    console.log(`La mia porta è ${port}`)
    });