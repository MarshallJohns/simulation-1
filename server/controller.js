module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory().then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => {
            res.status(500).send('Could not send inventory sorry!')
            console.log(err.message)
        })
    },

    addProduct: (req, res) => {
        const db = req.app.get('db')
        const { name, price, image_url } = req.body

        db.create_product([name, price, `${image_url}`])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send('Sorry could not add product')
                console.log(err.message)
            })
    }
}