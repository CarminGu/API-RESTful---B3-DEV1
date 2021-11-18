console.log('Etape 0');

var requete = require("D:/API RESTful - B3 DEV1/Backend/controlleur/controlleurReaction");

console.log('Etape 1');

module.exports = app => {
    var router = require('express').Router();

    //Affiche les Reaction
    router.get('/', requete.findReac);
    console.log('Etape 2');

    router.post('/', requete.ajoutReac);

    router.delete('/', requete.supprReac);

    router.put('/', requete.modifReac)

    //app.use('/Reac', router);
    //console.log('Etape 3');

    app.use('/Backend/routes/routeReaction',function(req,res){        
    });
}