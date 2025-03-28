const posts = require('../data/posts');

function index (req, res){
    res.json(posts);
};

// function show (req, res){
//     res.send('Dettagli del dolce ' + req.params.id);
// };

function show(req, res) {
    // Ottieni l'id del post dalla richiesta
    const id = parseInt(req.params.id);
    // Trova il post corrispondente
    const post = posts.find(post => post.id === id);
  //if con condizione l'aver trovato un post
    if (post) {
        // Restituisci il post in formato json
      res.json(post);
    } else {
        //In caso di errore
      res.status(404).json({ message: 'Post non trovato' });
    }
  }

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