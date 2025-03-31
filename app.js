console.log('Andrea');

const express = require('express');
const app = express();
const port = 3400
const router = require('./routers/routerPosts');

//per fare in modo di leggere il json
app.use(express.json());

app.use(express.static('public'));

app.use('/posts', router);

app.listen(port, () => {
    console.log(`La mia porta è ${port}`)
    });