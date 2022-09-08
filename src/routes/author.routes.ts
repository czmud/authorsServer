import * as AuthorsController from "../controllers/author.controller";
import express from "express";

export const AllAuthorRoutes = (app: express.Application) => {
    app.get("/api/authors/", AuthorsController.findAllAuthors);
    app.get("/api/authors/:id", AuthorsController.findOneAuthor);
    app.post("/api/authors/new", AuthorsController.createNewAuthor);
    app.put("/api/authors/update/:id", AuthorsController.updateAuthor);
    app.delete("/api/authors/delete/:id", AuthorsController.deleteAuthor);
};