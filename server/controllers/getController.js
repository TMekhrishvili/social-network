const getController = (req, res) => {
    res.json({
        users: [
            {
                firstname: "John",
                lastname: "Doe"
            },
            {
                firstname: "Jane",
                lastname: "Doe"
            },
        ]
    });
}

module.exports = {
    getController
}