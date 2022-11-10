const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");

async function authenticate({ username, password }) {
    const user = await db.user.scope("withHash").findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.hash))) {
        throw "Username or password is incorrect";
    }

    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: "7d" });
    return { ...omitHash(user.get()), token };
}

async function getAll() {
    return await db.user.findAll();
}

async function getById(id) {
    return await getUser(id);
}

async function create(params) {
    console.log("inside create");
    if (await db.user.findOne({ where: { username: params.username } })) {
        throw 'Username "' + params.username + '"is already taken';
    }

    if (params.password) {
        params.hash = await bcrypt.hash(params.password, 10);
    }

    await db.user.create(params);
}

async function update(id, params) {
    const user = await getUser(id);

    const usernameChanged = params.user && user.username !== params.username;

    if (usernameChanged && (await db.user.findOne({ where: { username: params.username } }))) {
        throw 'Username "' + params.username + '"is already taken';
    }

    if (params.password) {
        params.hash = await bcrypt.hash(params.password, 10);
    }

    Object.assign(user, params);
    await user.save();

    return omitHash(user.get());
}

async function _delete(id) {
    const user = await getUser(id);
    await user.destroy();
}

async function getUser(id) {
    const user = await db.User.findByPk(id);
    if (!user) throw "User not found";
    return user;
}

function omitHash(user) {
    const { hash, ...userWithoutHash } = user;
    return userWithoutHash;
}

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};
