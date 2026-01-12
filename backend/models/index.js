import * as commentModel from './commentModel.js';

export function initModels(db) {
    commentModel.setDB(db);
}

export {
    commentModel
}