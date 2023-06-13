module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        is_admin: {
			type: DataTypes.INTEGER,
			defaultValue: 1,
		},
        actions: {
			type: DataTypes.STRING,
			defaultValue: 1,
		},
    });

    User.prototype.toJSON = function () {
        let values = Object.assign({}, this.get());
        delete values.password;
        return values;
    }

    return User;
}