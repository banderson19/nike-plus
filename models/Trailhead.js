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
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    longitude: {
        type: DataTypes.DECIMAL,
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