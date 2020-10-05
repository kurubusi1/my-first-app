const express = require('express');
const Schedule = require('../model/schedule');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');


router.get('', function(req, res){
    Schedule.find({}, function(err, foundSchedules) {
        res.json(foundSchedules)
    })




// router.get('', function(req, res){
//     Schedule.find({}, function(err, foundSchedules) {
//         res.json(foundSchedules)
//     })




    // const {email, password} = req.body;

    // if(!email) {
    //     return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill email!'}]})
    // }
    // if(!password) {
    //     return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill password!'}]})
    // }

    // User.findOne({email},function(err, foundUser){
    //     if(err) {
    //         return res.status(422).send({errors: [{title: 'User error', detail: 'Something went wrong!'}]})
    //     }
    //     if(!foundUser) {
    //         return res.status(422).send({errors: [{title: 'User error', detail: 'User is not exist!'}]})
    //     }
    //     if(!foundUser.hasSamePassword(password)) {
    //         return res.status(422).send({errors: [{title: 'User error', detail: 'Incorrect password!'}]})
    //     }
    //     const token = jwt.sign({
    //         userId: foundUser.id,
    //         username: foundUser.username
    //       }, config.SECRET, { expiresIn: '1h' });

    //     return res.json(token);
    // } )
});

router.post('/input', function(req, res){

    const { plan, gameJoin, hopeGame, freeWords, userName, date} = req.body;

    // 上記と同様の意味
    // const username = req.body.username;
    // const email = req.body.email;
    // const password = req.body.password;
    // const confirmPassword = req.body.confirmPassword;

    if(!plan) {
        return res.status(422).send({errors: [{title: 'Input error', detail: 'Please select plan!'}]})
    }
    if(!gameJoin) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please select gameJoin!'}]})
    }
    if(!hopeGame) {
        return res.status(422).send({errors: [{title: 'User error', detail: 'Please select hopeGame!'}]})
    }

    const schedule = Schedule({plan, gameJoin, hopeGame, freeWords, userName, date})
        schedule.save(function(err) {
            if(err) {
                return res.status(422).send({errors: [{title: 'Schedule error', detail: 'Something went wrong!'}]})
            }
            return res.json({"Inputed your shcedule": true})
        })

    // Schedule.findOne({email}, function(err,foundUser) {
    //     if(err) {
    //         return res.status(422).send({errors: [{title: 'User error', detail: 'Something went wrong!'}]})
    //     }
    //     if(foundUser) {
    //         return res.status(422).send({errors: [{title: 'User error', detail: 'User already exist!'}]})
    //     }
    //     const schedule = Schedule({plan, gameJoin, hopeGame, freeWords, userName, date})
    //     schedule.save(function(err) {
    //         if(err) {
    //             return res.status(422).send({errors: [{title: 'Schedule error', detail: 'Something went wrong!'}]})
    //         }
    //         return res.json({"Inputed your shcedule": true})
    //     })

    // })

});

module.exports = router;