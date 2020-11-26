const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        Users_id: {type: DataTypes.INTEGER,autoIncrement: true,primaryKey: true},
        email: { type: DataTypes.STRING, allowNull: false },
        userName: { type: DataTypes.STRING, allowNull: false },
        passwordHash: { type: DataTypes.STRING, allowNull: false },
        title: { type: DataTypes.STRING },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING},
        acceptTerms: { type: DataTypes.BOOLEAN },
        role: { type: DataTypes.STRING, allowNull: false },
        usersPhoto: { type: DataTypes.STRING},
        userAddress: { type: DataTypes.STRING },
        userPhone: { type: DataTypes.STRING },
        userDOB: { type: DataTypes.DATE },
        userStatus: { type: DataTypes.STRING },
        verificationToken: { type: DataTypes.STRING },
        verified: { type: DataTypes.DATE },
        socialProvider:{ type: DataTypes.STRING },
        socialUserId:{ type: DataTypes.STRING },
        resetToken: { type: DataTypes.STRING },
        resetTokenExpires: { type: DataTypes.DATE },
        passwordReset: { type: DataTypes.DATE },
        created: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        updated: { type: DataTypes.DATE },
        isVerified: {
            type: DataTypes.VIRTUAL,
            get() { return !!(this.verified || this.passwordReset); }
        }
    };

    const options = {
        // disable default timestamp fields (createdAt and updatedAt)
        timestamps: false, 
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: ['passwordHash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }        
    };

    return sequelize.define('users_table', attributes, options);
}