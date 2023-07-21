const Playlist = require('../models/playlist');
const { v4: uuidv4 } = require('uuid');

class PlaylistRepository {
    constructor() {
        this.playlists = [];
    }

    createPlaylist(title, artists) {
        const newPlaylist = new Playlist(uuidv4(), title, artists, 0);
        this.playlists.push(newPlaylist);
        return newPlaylist;
    }

    incrementPlayCount(id) {
        const playlist = this.playlists.find(pl => pl.id === id);
        if (playlist) playlist.songPlayCount += 1;
        return playlist;
    }

    getSortedPlaylists() {
        return this.playlists.sort((a, b) => b.songPlayCount - a.songPlayCount);
    }
}

module.exports = new PlaylistRepository();
