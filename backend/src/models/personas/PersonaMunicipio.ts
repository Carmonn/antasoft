import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/database.js";

export class PersonaMunicipio extends Model {
  declare id: number;
  declare persona_id: number;
  declare municipio_id: number;
}

PersonaMunicipio.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    gestor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    municipio_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "personas_municipio",
    timestamps: false,
  },
);
