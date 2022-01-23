const db = require('../data/dbConfig');

module.exports = {
    find,
    findByName, remove
}

async function find() {
    const foundCandidate = await db('candidates as c').select(
        'c.id',
        'c.avatar_url',
        'c.name',
        'c.email',
        'c.bio',
        'c.stack',
        'c.location',
        'c.hireable',
        'c.headline',
        'c.city',
        'c.country',
        'c.address',
        'c.real_url',
        'c.login as username',
    );
    return foundCandidate;
}

async function findById(id) {
    const candidateId = await db('candidate as c').select(
        'c.id',
        'c.avatar_url',
        'c.name',
        'c.email',
        'c.bio',
        'c.hireable',
        'c.headline',
        'c.stack',
        'c.location',
        'c.city',
        'c.country',
        'c.address',
        'c.real_url',
        'c.login as username',
    )
    .where('c.id', `${id}`);
    return candidateId;
}

async function findByName(name) {
  const foundName = await db("candidates").where({ name: name });
  return foundName;  
}

async function remove(id) {
    const candidateiD = await db("candidates").where({ id }).delete();
    return candidateiD;
}