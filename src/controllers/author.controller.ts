import { Author } from "../models/author.model";
import { Request, Response } from "express";

export const findAllAuthors = (req: Request, res: Response) => {
    Author.find()
        .then(allAuthors => res.json({ authors: allAuthors }))
        .catch(err => res.json({message: "Something went wrong", error: err }));
}

export const findOneAuthor = (req: Request, res: Response) => {
    Author.findOne({ _id: req.params.id})
        .then(oneAuthor => res.json({ author: oneAuthor }))
        .catch(err => res.json({message: "Something went wrong", error: err }));
}

export const createNewAuthor = (req: Request, res: Response) => {
    console.log("created "+JSON.stringify(req.body));
    Author.create(req.body)
        .then(newlyCreatedAuthor => res.json({ author: newlyCreatedAuthor }))
        .catch(err => res.status(400).json(err));
};

export const updateAuthor = (req: Request, res: Response) => {
    console.log("updated "+JSON.stringify(req.body));
    Author.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true })
        .then( updatedAuthor => res.json({ author: updatedAuthor }))
        .catch( err => res.status(400).json(err));
};

export const deleteAuthor = (req: Request, res: Response) => {
    console.log("deleted id: "+req.params.id);
    Author.deleteOne({_id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "something went wrong", error: err}));
};