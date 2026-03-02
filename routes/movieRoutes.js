import express from "express"
import db from "../db/conn.js"
import { ObjectId } from 'mongodb';

const router = express.Router();

// Specify/Choose Collection
const collection = db.collection("movies");

// Get all Movies
router.get("/",async (req,res) =>  {

    // Perform Action 
    let getall = await collection.find({}).sort("name", 1).toArray();

    // Return results
    res.json(getall)

})

// Get one Movie
router.get("/:id",async (req,res) =>  {

    // Perform Action 
    let getone = await collection.findOne({ "_id": new ObjectId(req.params.id)});

    // Return results
    res.json(getone)

})

// Add a movie
router.post("/", async (req, res) => {

    // Perform Action 
    let newmovie  = await collection.insertOne(req.body);

    // Return results
    res.json(newmovie);

})

// Edit (Patch) a movie
router.patch("/:id", async (req, res) => {

    // Perform Action 
    let updmovie = await collection.updateOne(
        { "_id": new ObjectId(req.params.id)}, 
        { $set: {  "title": req.body.title,
          "year": req.body.year,
          "rating": req.body.rating,
          "genre": req.body.genre
        }}
    )
    // Return results
    res.json(updmovie);

})

export default router;