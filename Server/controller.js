module.exports = {

    create: (req, res) => {
        // console.log("Hello!", req.body)
        const db = req.app.get('db');
        
//Post________
        db.create_favorites({
            user_id: req.user.id,
            event_name: req.body.name,
            event_url: req.body.url,
            event_image: req.body.images[0].url,
            event_start: req.body.dates.start.localDate,
            event_min_price: req.body.priceRanges[0].min,
            event_max_price: req.body.priceRanges[0].max,
            venue_url: req.body._embedded.venues[0].url,
            venue_image: req.body._embedded.venues[0].images[0].url,
            venue_name: req.body._embedded.venues[0].name
        }).then((favorites) => { console.log( 'LOOK HERE YOU DUMMIES',favorites )
            res.sendStatus( 200 )})
            .catch((err) => {
                console.log(err);
                res.status(500).send(err)})
    },

    

//Get________
    read: (req, res) => {
        const db = req.app.get('db');
        console.log(req.user.id)
        db.get_favorites([req.user.id ])
            .then((favorites) => res.status(200).send(favorites))
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    }, 

//Patch______
    makeFavorite: (req, res) => {
        const db = req.app.get('db');
        console.log(req.user.id)
        db.add_favorite([req.user.id])
            .then((favorites) => res.status(200).send(favorites))
            .catch(err => res.status(500).send(err))
    },


//Patch______
    makeSuperFavorite: (req, res) => {
        const db = req.app.get('db');
        console.log(req.user.id, req.params.id)
        db.add_superFavorite([req.params.id, req.user.id])
            .then((favorites) => {
                req.app.get('db').get_favorites([req.user.id]).then((results)=> {
                    res.status(200).send(results)
                })
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
    },

//Delete______
    delete: (req, res) => {
        console.log(req.params.id, req.user.id)
        const db = req.app.get('db');
        db.delete_favorite([ req.user.id, req.params.id])
            .then((favorites) => {
                res.status(200).send(favorites)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
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