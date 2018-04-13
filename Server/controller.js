module.exports = {

    create: (req, res) => {
        const db = req.app.get('db');

        db.create_favorites([
            req.body.user_id,
            req.body.event_name,
            req.body.event_image,
            req.body.event_start,
            req.body.event_min_price,
            req.body.event_max_price,
            req.body.venue_url,
            req.body.venue_image,
            req.body.venue_name
        ]).then((favorites) => res.status(200).send(favorites))
            .catch((err) => res.status(500).send(err))
    },

    read: (req, res) => {
        const db = req.app.get('db');
        
        // db.get_favorites({id:})
        // .then((favorites) => res.status(200).send(favorites))
        // .catch(() => res.status(500).send())
        console.log('req.user', req.user)
        console.log('req.session.user', req.session.user)
        res.status(200).send({ reqUser: req.user, sessionUser: req.session.user })
    }, 
    update: (req, res) => {
        const db = req.app.get('db');

        // db.get_favorites()
        // .then((favorites) => {
        //     if (db.get_favorites() === true;)
        // }

        //Help with UPDATE
        const updateID = req.params.id;
        const favoritesIndex = favorites.findIndex(favorite => favorites.id == updateID);
        let favorite = favorites[favoritesIndex];

        favorites[favoritesIndex] = {
            id: favorites.id,
            text: text || favorite.text,
            time: favorite.time
        };

        res.status(200).send(favorites);
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        favoritesIndex = favorites.findIndex( favorite => favorites.id == deleteID );
        favorites.splice(favoritesIndex, 1);
        res.status(200).send( favorites );
    }
}