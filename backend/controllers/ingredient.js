const Ingredient = require('../models/ingredient')

exports.createIngredient('/ingredient', (req, res, next) => {
  const ingredient = new Ingredient({
    nom_ingredient: req.body.nom_ingredient,
    unite: req.body.unite,
    id_cat_ingr: req.body.id_cat_ingr,
    cout_unitaire: req.body.cout_unitaire,
    quantite: req.body.quantite
  });
  ingredient.save()
  .then(() => res.status(201).json({ message: 'Ingredient créé'}))
  .catch((error) => res.status(400).json({ error: error}));
});

exports.getIngredient('/:id', (req, res, next) => {
  selectById({
    _id: req.params.id
  })
  .then((thing) => res.status(200).json(thing))
  .catch((error) => res.status(404).json({error: error})
  );
});
/*
exports.modifyIngredient('/ingredient/:id', (req, res, next) => {
  const ingredient = new Ingredient({
    _id: req.params.id,
    nom_ingredient: req.body.nom_ingredient,
    unite: req.body.unite,
    id_cat_ingr: req.body.id_cat_ingr,
    cout_unitaire: req.body.cout_unitaire,
    quantite: req.body.quantite
  });
  ingredient.updateOne({_id: req.params.id}, thing).then(
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
});*/

/*deleteIngredient('/:id', (req, res, next) => {
  delete({_id: req.params.id}).then(
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

getAllIngredient('/ingredient' +
  '', (req, res, next) => {
  selectAll().then(
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
});*/
