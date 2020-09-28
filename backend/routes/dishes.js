const router = require('express').Router()
let Dish = require('../models/dish')

router.route('/').get((req, res) => {
    Dish.find()
        .then(dish => res.json(dish))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const date = Date(req.body.date)
    const email = req.body.email
    const password = req.body.password


    const newDish = new Dish({
        date,
        email,
        password
    })

    newDish.save()
        .then(() => res.json("Dish added"))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Dish.findById(req.params.id)
        .then(dish => res.json(dish))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    Dish.findByIdAndDelete(req.params.id)
        .then(() => res.json("Dish deleted."))
        .catch(err => res.status(400).json('Error: ' + err))
})


router.route('/update/:id').post((req, res) => {
    Dish.findById(req.params.id)
        .then(dish => {
            dish.date = Date.parse(req.body.date)
            dish.email = req.body.email
            dish.password = req.body.password

            dish.save()
                .then(() => res.json("Dish updated!"))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router