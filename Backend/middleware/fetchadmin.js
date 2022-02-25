var jwt = require('jsonwebtoken');
const JWT_SECRET="vatsalpatelapp";

const fetchadmin = (req, res, next) => {
    // Get the admin from the jwt token and add id to req object
    const token = req.header('authtoken');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token 1" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        console.log(data);
        console.log(data.admin);
        req.admin = data.admin;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchadmin;