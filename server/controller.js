module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_houses().then(houses => res.status(200).send(houses)).catch(err => {
            console.log(err)
            res.status(500).send({ errorMessage: 'Something went wrong with our database! Our Engineers have been notified.' })
        })
    },
    addHouse: (req, res) => {
        const db = req.app.get('db')
        const { name, address, city, state,
            zip, img, mortgage, rent } = req.body;

        db.create_house([name, address, city, state,
            zip, img, mortgage, rent]).then(result => {
                res.sendStatus(200)
            }).catch(err => {
                console.log(err)
                res.status(500).send({errorMessage: 'Something went wrong with adding a house to the database. Our Engineers have been notified!'})
            })
        
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        res.sendStatus(200)
    }
}