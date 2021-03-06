var express = require('express');
var router = express.Router();
//var request = require('request');

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', {title: 'Express'});
// });
router.get('/', function(req, res) {
  res.sendFile('index', { root: 'public' });
});

var recipe = [
  {
    name: 'Basil Cream Chicken',
    imageUrl: 'images/img/bg-img/skillet-basil-cream-chicken-6-of-6.jpg',
    instructions: 'Place milk and breadcrumbs in seperate bowl',
    ingredients: 'chicken breast and breadcrumbs'
  },
  {
    name: 'Ham Fried Rice',
    imageUrl: 'images/img/bg-img/ham_fried_rice.jpg',
    instructions: 'Cook rice',
    ingredients: 'rice'+'\n'+'ham'
  },
  {
    name: 'Green Chile Chicken Enchiladas',
    imageUrl: 'images/img/bg-img/creamyGreenChileChickenEnchiladas.jpg',
    instructions: 'Cook Enchiladas',
    ingredients: 'enchiladas'
  }
];

router.get('/recipe', function(req, res) {
  console.log("In Recipes");
  res.send(recipe);
});

router.post('/recipe', function(req, res) {
    console.log("In Recipes Post");
    console.log(req.body);
    recipe.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 

module.exports = router;