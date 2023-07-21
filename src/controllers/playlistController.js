const playlistService = require('../services/playlistService');

class PlaylistController {
    createPlaylist(req, res) {
        const playlist = playlistService.createPlaylist(req.body.title, req.body.artists);
        res.status(201).json(playlist);
    }

    incrementPlayCount(req, res) {
        const playlist = playlistService.incrementPlayCount(req.params.id);
        if (playlist) res.status(200).json(playlist);
        else res.status(404).json({ message: 'Playlist not found' });
    }

    getSortedPlaylists(req, res) {
        const playlists = playlistService.getSortedPlaylists();
        res.status(200).json(playlists);
    }
}

module.exports = new PlaylistController();
