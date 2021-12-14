const express = require('express');
const router = express.Router();

const Ingredient = require('../models/ingredient');

router.post('/', (req, res, next) => {
  const ingredient = new Ingredient({
    nom_ingredient: req.body.nom_ingredient,
    unite: req.body.unite,
    id_cat_ingr: req.body.id_cat_ingr,
    cout_unitaire: req.body.cout_unitaire,
    quantite: req.body.quantite
  });
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'Ingredient saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

router.get('/:id', (req, res, next) => {
  Ingredient.findOne({
    _id: req.params.id
  }).then(
    (thing) => {
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
});

router.put('/:id', (req, res, next) => {
  const ingredient = new Ingredient({
    _id: req.params.id,
    nom_ingredient: req.body.nom_ingredient,
    unite: req.body.unite,
    id_cat_ingr: req.body.id_cat_ingr,
    cout_unitaire: req.body.cout_unitaire,
    quantite: req.body.quantite
  });
  Thing.updateOne({_id: req.params.id}, thing).then(
    () => {
      res.status(201).json({
        message: 'Ingredient updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

router.delete('/:id', (req, res, next) => {
  Ingredient.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Ingredient Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

router.get('/' +
  '', (req, res, next) => {
  Ingredient.find().then(
    (ingredients) => {
      res.status(200).json(ingredients);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

module.exports = router;