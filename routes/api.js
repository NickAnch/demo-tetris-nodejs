const express = require ('express');
const router = express.Router();

module.exports = (client) => {
    router.post('/timers', (req, res, next) => {
        console.log(req.body.time);
        client.query('INSERT INTO session(start_time) values($1)',
                    [req.body.time],
                    (err, res) => {
                        if (err) throw err;
                        console.log(res);
                    });
            if (res) res.json({success : "Inserted Successfully", status : 200});
    });
    return router;
}
