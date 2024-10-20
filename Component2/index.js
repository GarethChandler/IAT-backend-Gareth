import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;
//const mongoose = require('mongoose');

async function main() {
    const uri = "mongodb+srv://glchand05:2SUmEzhsY24TF5bx@iatcluster.jqt04.mongodb.net/IAT_microservices?retryWrites=true&w=majority&appName=IATCluster";
    try {
        await mongoose.connect(uri);
        const db = mongoose.connection.db;
        const dbName = db.databaseName;
        console.log(`Connected to MongoDB Atlas using Mongoose! Database Name: ${dbName}`);

        const collections = await db.listCollections().toArray();
        console.log(`Database Info: ${dbName} has ${collections.length} collections`);

    } catch (e) {
        console.error(e);
    }
}
main().catch(console.error);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})