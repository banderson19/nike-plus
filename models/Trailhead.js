const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trailhead extends Model { }

Trailhead.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    trail_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    dog_friendly: {
        type: DataTypes.TINYINT
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'trailhead'
  }
);


module.exports = Trailhead;