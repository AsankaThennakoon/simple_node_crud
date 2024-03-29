const User = require('./schema/user');

exports.listUsers = async(req, res) => {
    const users = await User.find();
    res.render('index', { users });
}

exports.addUsers = (req, res) => {
    res.render('add');
}

exports.createNewUser = async(req, res) => {
    const { firstName, lastName, email } = req.body;
    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email
    })

    await newUser.save();
    res.redirect('/');
}

exports.deleteUser = async(req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(200).send('Deleted');
}