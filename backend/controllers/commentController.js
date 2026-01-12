import { commentModel } from "../models/index.js";

export async function uploadComment(req, res, next) {
    try {
        const text = req.body.text;
        const image = req.file || null;

        let path;
        if (image) {
            path = image.path;
        }
    
        await commentModel.createComment({
            text: text,
            imagePath: path
        })
        res.status(201).json({ message: "Comment Uploaded" })
    } catch (error) {
        next(error)
    }
}

export async function getComments(req, res, next) {
    try {
        const comments = await commentModel.getComments();
        res.status(200).json(comments);
    } catch (error) {
        next(error)
    }
}