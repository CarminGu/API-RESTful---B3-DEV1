const db = require('D:/API RESTful - B3 DEV1/Backend/model/connect');
var { createQuery } = require('D:/API RESTful - B3 DEV1/Backend/model/connect');

console.log("CONNEXION AU CONTROLLEUR");
const mysql = require('mysql');

/* Affichage des commentaires" */
var selectQuery = "SELECT * FROM reaction";
exports.findReac = (req,res) => {
    db.query(selectQuery, (err, result) => {
        res.send(result);
   })
   console.log(JSON.stringify(req.body));
}

exports.ajoutReac = (req,res) => {
    console.log(req.body);
    var createOne = 'INSERT INTO reaction(id_reaction, like, dislike) VALUES '+'(?,?,?)';
    var inserts = [
        req.body.id_reaction,
        req.body.like,
        req.body.dislike
    ]
    createQuery = db.format(createOne, inserts);
    db.query(createQuery, (err, result) => {
        res.status(200).send({message: result});
    });
}

exports.supprReacById = (req,res) =>{
    var findById = 'SELECT * FROM reaction WHERE idReaction = ' + '?';
    var inserts = [
    req.params.id
    ];
    findByIdQuery = db.format(findById, inserts);
    db.query(findByIdQuery,  (err, result) => {
        if(result[0]){
            console.log(result[0])
            var deleteById = 'DELETE FROM localisation WHERE idReaction = ' + '?';
            var inserts = [
                req.params.id
            ];
            deleteByIdQuery = db.format(deleteById, inserts);
            db.query(deleteByIdQuery,  (err, result) => {
                if(err) {
                    res.status(500).send({message: err});
                    return;
                }
                res.status(200).send({message: 'Reaction supprimé : '+req.params.id});
            }) 
        }else{
            res.status(500).send({error: "la réaction n°"+req.params.id+" n'a pas été trouvé."});
        }
    })
}

exports.update = (req,res) => {
    var findById = 'SELECT * FROM localisation WHERE idReaction = ' + '?';
    var inserts = [
    req.params.id
    ];

    findByIdQuery = db.format(findById, inserts);
    db.query(findByIdQuery,  (err, result) => {
        if(result[0]){
            console.log(result[0])

            var updateOne = 'UPDATE reaction SET like = '+'?'+' where idReaction = '+'?';
            var inserts = [
                req.body.like,
                req.body.idReaction
            ]
            updateQuery = db.format(updateOne, inserts);
            db.query(updateQuery, (err, result) => {
                if(err) {
                    res.status(500).send({message: err});
                    return;
                }else{
                res.status(200).send({message: result});
            }
        });
    }else{
        res.status(500).send({error: "la réaction n°"+req.params.id+" n'a pas été trouvé."});
    }
})
}