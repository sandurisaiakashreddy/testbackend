module.exports = (sequelize, Sequelize) => {
  const Album = sequelize.define("album", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    artist:{
      type: Sequelize.STRING
    }
  });

  return Album;
};
