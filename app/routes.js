const AuthenticationController = require('./controllers/AuthenticationController.js')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy.js')
const albums = require("./controllers/album.controller.js");
const songs = require("./controllers/song.controller.js");
module.exports = (app) => {
    app.post('/register', 
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    )
    app.post('/login', 
        AuthenticationController.login
    )

  // Create a new album
  app.post("/album", albums.create);

  // Retrieve all albums
  app.get("/album", albums.findAll);

  // Retrieve a single album with id
  app.get("/album/:id", albums.findOne);

  // Update a album with id
  app.put("/album/:id", albums.update);

  // Delete a album with id
  app.delete("/album/:id", albums.delete);

  // Delete all albums
  app.delete("/album", albums.deleteAll);

  //get Albums by artist title
  app.get("/artist",albums.findAllByArtist);


  // Create a new song
  app.post("/song", songs.create);

  // Retrieve all albums
  app.get("/song", songs.findAll);

  // Retrieve a single album with id
  app.get("/song/:id", songs.findOne);

  // Update a song with id
  app.put("/song/:id", songs.update);

  // Delete a song with id
  app.delete("/song/:id", songs.delete);

  // Delete all songs
  app.delete("/song", songs.deleteAll);
  
  app.get("/songs/:id", songs.findAllByAlbum)
}
