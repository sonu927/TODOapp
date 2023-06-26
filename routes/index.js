const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');


router.get('/',homeController.home);//for main home page

router.post('/create-task',homeController.create);//for creating new tasks

router.get('/delete-task',homeController.delete);//for deleting the tasks

module.exports = router;