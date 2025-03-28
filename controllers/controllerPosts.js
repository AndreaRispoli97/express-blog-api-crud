const posts = require('../posts');

function index (req, res){
    res.json(posts);
};

function show (req, res){
    res.send('Dettagli del dolce ' + req.params.id);
};

function store (req, res){
    res.send('Creazione nuovo dolce');
};

function update (req, res){
    res.send('Modifica integrale del dolce ' + req.params.id);
};

function modify (req, res){
    res.send('Modifica parziale del  dolce ' + req.params.id);
};

function destroy (req, res){
    res.send('Eliminazione del dolce ' + req.params.id);
};


module.exports = {index, show, store, update, modify, destroy}