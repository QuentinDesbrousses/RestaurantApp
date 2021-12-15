const model = require("./model");

exports.Utilisateur = class Utilisateur{
  
}

const pool = require('../config/db');


// toutes les requêtes sql genre select, selectAll, definition des queries, exécution des requêtes
//avoir tous les utilisateurs
app.get('/utilisateur',async(req,res)=>{
    try {
      const allUtilisateurs = await pool.query("select * from utilisateur");
      res.json(allUtilisateurs.rows);
    } catch (error) {
      console.error(error.message);
    }
  })
  
  //avoir un utilisateur
  app.get('/utilisateur/:id',async(req,res)=>{
    try {
      const utilisateur = await pool.query("select * from utilisateur where id_utilisateur=$1",[req.params.id]);
      res.json(utilisateur.rows[0]);
    } catch (error) {
      console.error(error.message);
    }
  })
  
  //créer un utilisateur
  app.post('/utilisateur',async(req,res)=>{
    try {
      //wait
      const nom = req.body.nom;
      const prenom = req.body.prenom;
      const email= req.body.email;
      const description = req.body.description;
      const newUtilisateur = await pool.query("INSERT INTO Utilisateur(description,nom,prenom,email) values ($1,$2,$3,$4) ",[description,nom,prenom,email]);
      res.json(newUtilisateur);
    } catch (error) {
      console.error(error.message);
    }
  })
  
  //modifier un utilisateur
  
  app.put('/utilisateur/:id',async(req,res)=>{
    try {
      const nom = req.body.nom;
      const prenom = req.body.prenom;
      const description = req.body.description;
      const email= req.body.email;
      const updateUtilisateur = await pool.query("update utilisateur set nom = $1, prenom = $2, description = $3, email=$4 where id_utilisateur=$5",[nom,prenom,description,email,req.params.id])
      res.json("utilisateur mis a jour");
    } catch (error) {
      console.error(error.message);
    }
    
  })
  
  //delete un utilisateur
  
  app.delete('/utilisateur/:id',async(req,res)=>{
    try {
      const deleteUtilisateur = await pool.query("delete from utilisateur where id_utilisateur=$1",[req.params.id])
    } catch (error) {
      console.error(error.message);
    }
  })