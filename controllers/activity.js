const Activity = require('../../EETACTimeBankServer/models/activity');

// Devuelve una lista con todas las actividades
exports.selectAllActivities = function (req, res) {
    Activity.find({}, { __v: false }, function (err, activities) {
        if(err){
            console.log(err);
            return res.status(202).send({'result': 'ERROR'});  // Devuelve un JSON
        }else{
            return res.status(200).send(activities);           // Devuelve un JSON
        }
    });
};

// Devuelve las actividad buscada
exports.selectOneActivity = function (req, res) {
    Activity.findOne({ _id: req.params.id }, { __v: false }, function (err, activity) {
        if(err){
            console.log(err);
            return res.status(202).send({'result': 'ERROR'});  // Devuelve un JSON
        }else{
            return res.status(200).send(activity);             // Devuelve un JSON
        }
    });
};

// Inserta una nueva actividad
exports.insertActivity = function (req, res) {
    Activity(req.body).save(function (err) {
        if(err){
            console.log(err);
            return res.status(202).send({'result': 'ERROR'});     // Devuelve un JSON
        }else{
            return res.status(201).send({'result': 'INSERTADO'}); // Devuelve un JSON
        }
    });
};

// Actualiza la información de una actividad
exports.updateActivity = function (req, res) {
    Activity.update({ _id: req.params.id }, req.body, function(err) {
        if (err) {
            console.log(err);
            return res.status(202).send({'result': 'ERROR'});       // Devuelve un JSON
        }else{
            return res.status(200).send({'result': 'ACTUALIZADO'}); // Devuelve un JSON
        }
    });
};

// Elimina de la Base de Datos la actividad buscada
exports.deleteActivity = function (req, res) {
    Activity.remove({ _id: req.params.id }, function(err) {
        if(err){
            console.log(err);
            return res.status(202).send({'result': 'ERROR'});     // Devuelve un JSON
        }else{
            return res.status(200).send({'result': 'ELIMINADO'}); // Devuelve un JSON
        }
    });
};