const President          = require('./../models/presidents');
const { presidents }     = require('./../data/presidents');

const index = (req, res) => {
    President.find()
        .exec((err, docs) => {
            if (err) { res.status(500).json({message: `Database error: ${err}`})}
            else if (docs.length === 0) {res.status(404).json({message: 'No presidents found.'})}
            else { res.status(200).json(docs) }
        })
}

const getById = (req, res) => {
    President.findById(req.params.id)
        .exec((err, president) => {
            if (!president) {
                res.status(404).json({ message: 'Could not find a president with that id' })
            } else if (err) {
                res.status(500).json({ message: `There was an error with our database: ${err}`})
            } else {
                res.status(200).json(president)
            }
        })
}

const getByNumber = (req, res) => {
    let { number } = req.params
    President.findOne({ number: number })
        .exec((err, president) => {
            if (!president) {
                res.status(404).json({ message: 'Could not find a president with that id' })
            } else if (err) {
                res.status(500).json({ message: `There was an error with our database: ${err}`})
            } else {
                res.status(200).json(president)
            }
        })
}

const getByName = (req, res) => {
    let { name } = req.params
    President.findOne({ name: name })
        .exec((err, president) => {
            if (!president) {
                res.status(404).json({ message: 'Could not find a president with that name' })
            } else if (err) {
                res.status(500).json({ message: `There was an error with our database: ${err}`})
            } else {
                res.status(200).json(president)
            }
        })
}

const create = (req, res) => {
    let president = { ...req.body }
    President.create(president)
    .then(president => res.status(200).json({ president }))
    .catch(err => res.status(500).json({ Error: err.message }))
}

const update = (req, res) => {
    President.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .exec((err, president) => {
            if(!president) {
                res.status(404).json({ message: 'Could not find president with that id.' })
            } else if (err) {
                res.status(500).json({ message: `There was an error with our database: ${err}` })
            } else {
                res.status(200).json(president);
            }
        })
}

const destroy = (req, res) => {
    President.findByIdAndDelete(req.params.id)
        .exec((err, president) => {
            if(!president) {
                res.status(404).json({ message: 'Could not find president with that id.' })
            } else if (err) {
                res.status(500).json({ message: `There was an error with our database: ${err}`})
            } else {
                res.status(200).json(president);
            }
        })
}

const seedDB = (req, res) => {
    President.create(presidents)
        .then(presidents => res.status(200).json({ presidents }))
        .catch(err => res.status(500).json({ Error: err.message }))
}

module.exports = { index, getById, getByNumber, getByName, create, update, destroy, seedDB }