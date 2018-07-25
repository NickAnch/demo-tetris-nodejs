const express = require ('express');
const router = express.Router();

module.exports = (client) => {
    router.post('/timers', (req, res, next) => {
        console.log(req.body.time);
        client.query('INSERT INTO session(start_time) values($1)',
                    [req.body.time],
                    (err, res) => {
                        console.log(res);
                    });
        res.send(req.body);
    });
    return router;
}
