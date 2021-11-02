import Config from "../../../config";
import mongoose from "mongoose";

class Mongo{
    private uri: string;

    constructor(){
        this.uri=Config.MONGO_URI;
    }

    async init(){
        await mongoose.connect(this.uri);
        console.log('Mongo connected');
    }
}

export const MongoDb = new Mongo();