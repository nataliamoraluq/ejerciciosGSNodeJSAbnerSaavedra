exports.getUser = (req, res) => {
    res.send(`Usuario Bibble ID: ${req.params.id}`);
};

exports.showAdmin = (req, res) => {
    res.send(`Show admin`);
};

//define y de una vez exporta la function