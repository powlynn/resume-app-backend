var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

  //get
  app.get('/experience/:id', (req, res) => {
    const details = { _id: new ObjectID("5a68c866dd24194fafd66b2d")};

    db.collection('experience').findOne(details, (err, item) => {
      if(err){
        res.send({'error':'An error has occured'});
      }else {
        res.send(item);
      }
    })
  });

  app.get('/experience', (req, res) => {
    db.collection('experience').find({}).toArray(function(err, item){
      res.send(item);
    });
  });

  //post
  app.post('/experience', (req, res) => {

    const experience = {
       company: req.body.company,
       role: req.body.role,
       city: req.body.city,
       state: req.body.state,
       startDate: req.body.startDate,
       endDate: req.body.endDate,
       summary: req.body.summary,
       source: req.body.source,
       skills: req.body.skills
    };

    db.collection('experience').insert(experience, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  //delete
  app.delete('/experience/:id', (req, res) => {
    const id = req.params.id;

    const details = { '_id': new ObjectID(id) };
    db.collection('experience').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {

      }
    });
  });

  //update (add later)

};
