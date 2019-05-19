const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.adicionaUsuario = functions.https.onRequest(async (req, res) => {
  const nome = req.query.nome;
  const usuario = {nome: nome};
  
  db.collection('usuarios').where('nome', '==', nome).get()
    .then(result => {
        if (result.docs.length == 0 && nome.trim() != '' && !nome.match(/[^a-z ]/i)) {
            db.collection("usuarios").add(usuario);
            res.json(usuario);
        } else {
            res.json({error: true});
        }
    });
});
