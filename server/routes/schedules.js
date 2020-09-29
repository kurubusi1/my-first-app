const express = require('express');
const Schedule = require('../model/schedule');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');


router.get('', function(req, res){
    Schedule.find({}, function(err, foundSchedules) {
        res.json(foundSchedules)
    })





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

// router.post('/input', function(req, res){

//     const { username, email, password, confirmPassword } = req.body;

//     上記と同様の意味
//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;
//     const confirmPassword = req.body.confirmPassword;

//     if(!username) {
//         return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill username!'}]})
//     }
//     if(!email) {
//         return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill email!'}]})
//     }
//     if(!password) {
//         return res.status(422).send({errors: [{title: 'User error', detail: 'Please fill password!'}]})
//     }
//     if(password !== confirmPassword) {
//         return res.status(422).send({errors: [{title: 'User error', detail: 'Please check passwords!'}]})
//     }

//     User.findOne({email}, function(err,foundUser) {
//         if(err) {
//             return res.status(422).send({errors: [{title: 'User error', detail: 'Something went wrong!'}]})
//         }
//         if(foundUser) {
//             return res.status(422).send({errors: [{title: 'User error', detail: 'User already exist!'}]})
//         }
//         const user = User({username, email, password})
//         user.save(function(err) {
//             if(err) {
//                 return res.status(422).send({errors: [{title: 'User error', detail: 'Something went wrong!'}]})
//             }
//             return res.json({"registerd": true})
//         })

//     })

// });

module.exports = router;