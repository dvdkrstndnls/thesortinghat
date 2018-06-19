module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Users model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: DataTypes.STRING,
    // submission_date: DataTypes.DATE , ///date format validation would be idea, commented out because sequelize's createdat is taking care of this functionality
    team: DataTypes.STRING
  });

  User.sync();
  return User;
  module.exports = User.name;
};
