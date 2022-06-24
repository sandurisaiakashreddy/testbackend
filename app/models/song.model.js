module.exports = (sequelize, Sequelize) => {
    const Song = sequelize.define("song", {
      album: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return Song;
  };
  