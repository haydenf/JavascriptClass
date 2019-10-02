const contacts = [];
const newResource = (req, res) => {
    res.render('contact');
};

const index = (req, res) => {
    res.json(contacts);
};

const create = (req, res) => {
    let {email, name} = req.body;
    let contact = {name, email};
    contacts.push(contact);
    res.render('success');
    console.log(contacts)
};

module.exports = {
    newResource,
    index,
    create
};