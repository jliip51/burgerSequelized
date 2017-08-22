'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args:[1, 50],
          msg: "Your to-do item name must be between 3 and 50 characters.  Please try again."
        }
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    count_eaten: {
      type: DataTypes.INTEGER,
      defaulValue: 0
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burgers;
};
