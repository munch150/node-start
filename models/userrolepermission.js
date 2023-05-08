'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRolePermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserRolePermission.belongsTo(models.UserRole)
      models.UserRole.hasMany(UserRolePermission)
      UserRolePermission.belongsTo(models.User)
      models.User.hasMany(UserRolePermission)
      // define association here
    }
  }
  UserRolePermission.init({
    userId: DataTypes.INTEGER,
    userRoleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserRolePermission',
  });
  return UserRolePermission;
};