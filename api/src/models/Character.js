const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        species: {
          type: DataTypes.STRING,
          allowNull: true
        },
        origin: {
          type: DataTypes.STRING,
          allowNull: true
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        created: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        }
  },{
    timestamps: false,
  });
};
