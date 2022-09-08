import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minLength: [
            3,
            'name must be at least 3 characters long'
        ]}
},{ timestamps: true});

export const Author = mongoose.model("Author", AuthorSchema);