# Homework Module 2.3 GIGIH 3.0 - Spotify Playlist Server

## Introduction

build a simple Express.js server which manages a Spotify-like playlist.

## Requirements

1. The server should utilize a client architecture (Model, Service, Repository, Controller, Route).
2. The playlist should be created as a model, including properties such as id (which should be automatically generated), title, artists, etc.
3. The server should track the song play count in the playlist.
4. The server should provide a feature to get a list of songs, sorted by the most played song.

## Installation

- **Prerequisites:** You need Node.js and npm installed on your local machine. You can download Node.js from [here](https://nodejs.org/en/download/).
- **Clone the repository:** `git clone https://github.com/yourusername/spotify-playlist-server.git`
- **Navigate to the directory:** `cd spotify-playlist-server`
- **Install dependencies:** `npm install`
- **Start the server:** `node app/server.js`

## Endpoints

- **Create a new playlist:** `POST /playlist`. This endpoint expects a JSON body with the `title` and `artists` properties.
- **Increment the song play count:** `PUT /playlist/:id`. This endpoint increments the song play count of the playlist with the given ID.
- **Get all playlists:** `GET /playlists`. This endpoint returns the list of all playlists, sorted by the most played song.

## API Documentation

Detailed API documentation can be found on my [Postman documentation page](https://documenter.getpostman.com/view/15041975/2s946k6qr5).

## Testing with Curl

- **Create a new playlist:** `curl -X POST -H "Content-Type: application/json" -d '{"title":"My Playlist","artists":["Artist1","Artist2"]}' http://localhost:3000/playlist`
- **Increment song play count:** `curl -X PUT http://localhost:3000/playlist/<playlist_id>`
- **Get list of playlists:** `curl http://localhost:3000/playlists`

This project is an assignment for Homework Module 2.3 GIGIH 3.0. Please consult the course instructor or teaching assistants if you encounter any issues.
