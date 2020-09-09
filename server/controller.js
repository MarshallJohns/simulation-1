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
    },

    editProduct: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { name, price, image_url } = req.body

        db.update_product([id, name, price, image_url]).then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send('Could not edit Product')
                console.log(err.message)
            })
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params

        db.delete_product([id]).then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send('Could not delete Product')
                console.log(err.message)
            })

    }


}