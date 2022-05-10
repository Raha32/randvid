const express = require('express');
const router = express.Router();
const videoID = require('../models/videoID')

//Get all
router.get('/', async (req, res) => {

    try{
        const videosid = await videoID.find();
        res.json(videosid);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

//Get one
router.get('/:id', getvideoID, (req, res) =>{

    res.json(res.videoid)

})

//Create one
router.post('/', async (req, res) => {
    const videoid = new videoID({
        videoID: req.body.videoID
    })
    try {
        const newvideoIDs = await videoid.save()
        res.status(201).json(newvideoIDs);
    } catch (err){
        res.status(400).json({message: err.message })
    }
})

//Update one
router.patch('/:id', getvideoID, async (req,res)=>{

    if (req.body.videoID != null) {
        res.videoid.videoID = req.body.videoID
    }
    try {
        const updatedID = await res.videoid.save()
        res.json(updatedID)
    }  catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Delete one
router.delete('/:id', getvideoID, async (req,res)=>{
    try{
        await res.videoid.remove()
        res.json({message: "video ID deleted."})
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

async function getvideoID(req, res, next){
    let videoid
    try{
        videoid = await videoID.findById(req.params.id)
        if (videoid == null) {
            return res.status(404).json({ message: 'Cannot find video ID.' })     
        }        
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

    res.videoid = videoid;
    next()
}

module.exports = router;