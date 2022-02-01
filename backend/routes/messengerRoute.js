const { getFriends,messageUploadDB } = require('../controllers/messengerController');
const {authMiddleware}=require('../middleware/authMiddleware');
const router=require('express').Router();

router.get('/get-friends',authMiddleware,getFriends);
router.post('/send-message',authMiddleware,messageUploadDB);

module.exports=router;