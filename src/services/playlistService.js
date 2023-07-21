const playlistRepo = require('../repositories/playlistRepositori');

class PlaylistService {
    createPlaylist(title, artists) {
        return playlistRepo.createPlaylist(title, artists);
    }

    incrementPlayCount(id) {
        return playlistRepo.incrementPlayCount(id);
    }

    getSortedPlaylists() {
        return playlistRepo.getSortedPlaylists();
    }
}

module.exports = new PlaylistService();
