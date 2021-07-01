const db = require("../models");
const checkPassword = require("../utils/checkPassword");

module.exports = {
    create: async function(req, res) {
        try {
            const userData = await db.User.create(req.body);
            
            req.session.save(() => {
              req.session.user_id = userData.id;
              req.session.logged_in = true;
        
              res.status(201).end();
            });
          } catch (err) {
            console.log(err);
            res.status(400).json(err);
          }
    },
    login: async function(req, res) {
        try {
            const userData = await db.User.findOne({ email: req.body.email });
              
            if (!userData) {
              res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
              return;
            }
        
            const validPassword = await checkPassword(req.body.password, userData.password);
        
            if (!validPassword) {
              res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
              return;
            }
        
            req.session.save(() => {
              req.session.user_id = userData.id;
              req.session.logged_in = true;
        
              res.status(200).end();
            });
        
          } catch (err) {
            res.status(400).json(err);
          }
    },
    logout: function(req, res) {
        if (req.session.logged_in) {
            req.session.destroy(() => {
              res.status(204).end();
            });
          } else {
            res.status(404).end();
          }
    }
}