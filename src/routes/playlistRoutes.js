const express = require('express');
const playlistController = require('../controllers/playlistController');

const router = express.Router();

router.post('/playlist', playlistController.createPlaylist);
router.put('/playlist/:id', playlistController.incrementPlayCount);
router.get('/playlists', playlistController.getSortedPlaylists);

module.exports = router;
