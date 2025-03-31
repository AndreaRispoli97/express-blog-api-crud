const posts = require('../data/posts');

function index(req, res) {
    console.log(req.query);
    // const tag = req.query.tag;
  
    let filteredPosts = posts; 

    if(req.query.tags){
        filteredPosts = posts.filter((post) => post.tags.includes(req.query.tags))

        return res.json(filteredPosts);
    }

    console.log(req.query.tags);
    
   // Restituisci i post filtrati in formato JSON
    res.json(posts);
  }

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
    console.log(req.body);
};

function update (req, res){
    res.send('Modifica integrale del dolce ' + req.params.id);
};

function modify (req, res){
    res.send('Modifica parziale del  dolce ' + req.params.id);
};

// function destroy (req, res){
//     res.send('Eliminazione del dolce ' + req.params.id);
// };

function destroy(req, res) {
    // Ottieni l'id del post dalla richiesta come fatto precedentemente
    const id = parseInt(req.params.id);
     // Trova l'indice del post con findIndex
    const i = posts.findIndex(post => post.id === id);
  //if in cui andiamo a dare un condizione "se il paramentro è diverso da -1"
    if (i !== -1) {
         // Rimuovi il post dall'array
      posts.splice(i, 1);
       // Stampa la lista aggiornata
      console.log('Lista post aggiornata:', posts);
       // Rispondi con stato 204 (Nessun contenuto)
      res.status(204).send();
    } else {
         // Gestisci il caso di post non trovato
        res.status(404).json({ message: 'Post non trovato' });
      }
}

module.exports = {index, show, store, update, modify, destroy}