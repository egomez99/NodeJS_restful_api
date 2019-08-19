//contactController.js
//Import contact Model
Contact = require('./contactModel');

//Handle index actions
exports.index = function (req, res){
  Contact.get(function(err, contacts){
    if(err)
      res.json({
        status:'error',
        message: err
      });

    res.json({
      status: 'success',
      message: 'Contacts retrieved Succesfully',
      data: contacts
    });
  })
};

//Handle create contact functions
exports.new = function (req, res){
  var contact = new Contact();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.gender = req.body.gender;
  contact.email = req.body.email;
  contact.phone = req.body.phone;

  //Save contact and check errors
  contact.save(function(err){
    if(err)
      res.json(err);

    res.json({
      message: 'New contact created!',
      data: contact
    });
  })
};

//Handle Vire contact info
exports.view = function(req, err){
  Contact.findById(req.params.contact_id, function(err, contact){
    if(err)
      res.send(err)
    res.json({
      message: 'Contact details loading',
      data: contact
    });
  });
};

//Handle update contact info
exports.update = function(req, err){
  Contact.findById(req.params.contact_id, function (err, contact) {
          if (err)
              res.send(err);
  contact.name = req.body.name ? req.body.name : contact.name;
          contact.gender = req.body.gender;
          contact.email = req.body.email;
          contact.phone = req.body.phone;
  // save the contact and check for errors
          contact.save(function (err) {
              if (err)
                  res.json(err);
              res.json({
                  message: 'Contact Info updated',
                  data: contact
              });
          });
      });
  };

// Handle delete contact
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
            res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};
