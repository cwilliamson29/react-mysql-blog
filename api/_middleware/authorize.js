const jwt = require("express-jwt");
const { secret } = require("config.json");
const db = require("_helpers/db");

function authorize() {
    return [
        jwt({ secret, algorithms: ["HS256"] }),
        async (req, res, next) => {
            //console.log(req.user);
            const user = await db.user.findByPk(req.user.sub);

            if (!user) return res.status(401).json({ message: "unauthorized" });

            req.user = user.get();
            next();
        },
    ];
}

module.exports = authorize;
