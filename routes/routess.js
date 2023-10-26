const express = require('express')
const router = express.Router()
const {processor, motherboards, graphicsCards, ssds, rams} = require('../data/pcparts')

// Get routes
router.get('/', (req, res)=>{
    res.render('home')
})
// All processors
router.get('/processor', (req, res)=>{
    res.render('processor', {
        proc: processor
    })
})
// All motherboards
router.get('/motherboard', (req, res)=>{
    res.render('motherboard', {
        motherbd: motherboards
    })
})
// All grafixcards
router.get('/gfxcards', (req, res)=>{
    res.render('gfxcards', {
        gfxc: graphicsCards
    })
})
// ssd
router.get('/ssd', (req, res)=>{
    res.render('ssd', {
        ssd: ssds
    })
})
// rams
router.get('/ram', (req, res)=>{
    res.render('ram', {
        ram: rams
    })
})
// Parts details routes
router.get('/processor/:slug', (req, res)=>{
    const selectedProcessor = processor.filter(element=>{
        if(req.params.slug == element.slug){
            return element
        }
    })
    res.render('parts_detail', {
        proc: selectedProcessor[0]
    })
})

router.get('/motherboard/:slug', (req, res)=>{
    const selectedMotherBD = motherboards.filter(element=>{
        if(req.params.slug == element.slug){
            return element
        }
    })
    res.render('motherbd_details', {
        motherbd: selectedMotherBD[0]
    })
})

router.get('/gfxcards/:slug', (req, res)=>{
    const selectedGFXCard = graphicsCards.filter(element=>{
        if(req.params.slug == element.slug){
            return element
        }
    })
    res.render('gfxc_detail', {
        gfxc: selectedGFXCard[0]
    })
})

router.get('/ram/:slug', (req, res)=>{
    const selectedRAM = rams.filter(element=>{
        if(req.params.slug == element.slug){
            return element
        }
    })
    res.render('ram_detail', {
        ram: selectedRAM[0]
    })
})

router.get('/ssd/:slug', (req, res)=>{
    const selectedRAM = ssds.filter(element=>{
        if(req.params.slug == element.slug){
            return element
        }
    })
    res.render('ssd_detail', {
        ssd: selectedRAM[0]
    })
})
// Direct buy routes
router.get('/processor/buy/:slug', (req, res)=>{
    const selectedElement = processor.filter(element=>{
        if(req.params.slug == element.slug){
            return element
        }
    });
    res.render('buy', {
        element: selectedElement[0]
    });
});

router.get('/gfxcards/buy/:slug', (req, res)=>{
    const selectedElement = graphicsCards.filter(element=>{
        if(req.params.slug == element.slug){
            return element
        }
    })
    res.render('buy', {
        element: selectedElement[0]
    })
})
router.get('/motherboard/buy/:slug', (req, res)=>{
    const selectedElement = motherboards.filter(element=>{
        if(req.params.slug == element.slug){
            return element
        }
    })
    res.render('buy', {
        element: selectedElement[0]
    })
})
router.get('/ram/buy/:slug', (req, res)=>{
    const selectedElement = rams.filter(element=>{
        if(req.params.slug == element.slug){
            return element
        }
    })
    res.render('buy', {
        element: selectedElement[0]
    })
})
router.get('/ssd/buy/:slug', (req, res)=>{
    const selectedElement = ssds.filter(element=>{
        if(req.params.slug == element.slug){
            return element
        }
    })
    res.render('buy', {
        element: selectedElement[0]
    })
})

module.exports = router
