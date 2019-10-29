// server data:
// const contacts = [];
const ContactModel = require('./../database/models/contact_model');

function index (req, res){
    ContactModel.find()
        .then(contacts => {
                res.render('allcontacts', {
                allData: contacts
            })
        })
        .catch(error => {
            return res.status(500).send(`Error: ${error}`);
        })
};

const newResource = (req, res) => {
    res.render('contact');
}

const create = (req, res) => {
    let {name, email, inquiry} = req.body;
    let contact = {name, email, inquiry};


    ContactModel.create(contact)
        .then(contact => {
            res.render('success')
        })
        .catch(error => {
            res.status(500).send(`Error: ${error}`);
        })
    res.render('success');
};

// const newResource = (req, res) => {
//     res.render('contact');
// }

// const index = (req, res) => {
//     res.json(contacts);
// }

// const create = (req, res) => {
//     let {name, email} = req.body;
//     let contact = {name, email};
//     contacts.push(contact);
//     res.render('success');
// }

module.exports = {newResource, index, create};