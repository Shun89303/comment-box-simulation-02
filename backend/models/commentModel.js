let db;

export function setDB(database) {
    db = database;
}

export async function createComment(comment) {
    return await db.collection('comments').insertOne(comment);
}

export async function getComments() {
    return await db.collection('comments').find().toArray();
}