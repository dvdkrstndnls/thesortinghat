module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Giving the Users model a name of type STRING
    name: DataTypes.STRING,
    age: DataTypes.INTEGER, //integer   ///validation would be ideal
    gender: DataTypes.STRING,
    location: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    submission_date: DataTypes.DATE , ///date format validation would be idea
    team: DataTypes.STRING,


  });

  // Author.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Author.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

  return Users;
};

