const express = require('express');
const router = express.Router();

router.get('/test1', (req, res) => {

    return res.status(200).json({
        proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
        actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    });

});

router.get('/test2', (req, res) => {

    return res.status(200).json({
        proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
        actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    });

});

router.get('/test3', (req, res) => {
    
    return res.status(200).json({
        plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
        actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    });
    
    });

router.get('/test4', (req, res) => {
    
        return res.status(200).json({
            plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
            actual_added: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
        });
    
    });

module.exports = router;