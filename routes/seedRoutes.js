import express from "express"
import movieData from "../data/movies.js"
import db from "../db/conn.js"

const router = express.Router();

const MovieCollection = db.collection("movies")

router.get("/", async (req, res) =>{

    // ************* Movies ************************

    // Movies - delete any data already present
    try {
    await MovieCollection.deleteMany({});

    // Movies - populate the data
    await MovieCollection.insertMany(movieData);

    // Movies - create index's
    await MovieCollection.createIndex({ title : 1});
    await MovieCollection.createIndex({ year : 1});

    res.json({
        message: "The movies were seeded.",
        moviecount: "The movie count was " + movieData.length

    })

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ Error: "Something went wrong with the seeding process" });
    }

})

export default router;
