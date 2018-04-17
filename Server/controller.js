module.exports = {

    create: (req, res) => {
        const db = req.app.get('db');

        db.create_favorites({
            user_id: req.body.user_id,
            event_name: req.body.event_name,
            event_url: req.body.event_url,
            event_image: req.body.event_image,
            event_start: req.body.event_start,
            event_min_price: req.body.event_min_price,
            event_max_price: req.body.event_max_price,
            venue_url: req.body.venue_url,
            venue_image: req.body.venue_image,
            venue_name: req.body.venue_name
        }).then((favorites) => res.status(200).send(favorites))
            .catch((err) => {
                console.log(err);
                res.status(500).send(err)
            })
    },

    read: (req, res) => {
        const db = req.app.get('db');
        console.log(req.user.id)
        db.get_favorites([req.user.id ])
            .then((favorites) => res.status(200).send(favorites))
            .catch(err => res.status(500).send(err))
    }, 

    makeFavorite: (req, res) => {
        const db = req.app.get('db');
        console.log(req.user.id)
        db.add_favorite([req.user.id])
            .then((favorites) => res.status(200).send(favorites))
            .catch(err => res.status(500).send(err))
    },

    makeSuperFavorite: (req, res) => {
        const db = req.app.get('db');
        console.log(req.user.id)
        db.add_superFavorite([req.user.id])
            .then((favorites) => res.status(200).send(favorites))
            .catch(err => res.status(500).send(err))
    },
    
    delete: (req, res) => {
        const db = req.app.get('db');
        db.delete_favorite([ req.body.user_id, req.body.id])
            .then((favorites) => res.status(200).send(favorites))
            .catch(err => res.status(500).send(err))
        // const deleteID = req.params.id;
        // favoritesIndex = favorites.findIndex( favorite => favorites.id == deleteID );
        // favorites.splice(favoritesIndex, 1);
        // res.status(200).send( favorites );
    },

    searchZip: (req, res) => {
        console.log('I did it!')
        res.status(200).send({name: 'Bob'})
        // axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=bWAemnJ9cD17Yoi4jF2xFJoboFUinqMH&postalCode=${req.params.zip}`)
        //     .then(response => {
        //         res.status(200).send(response.data)
        //         // this.setState({ events: res.data.results })
        //         console.log(response.data)
        //     })
    }


}