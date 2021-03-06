// Survey.ts: The survey model.
import { DataTypes, Model, Relationships } from "../depts";
import { User } from "./User";

export class Survey extends Model {
  static table = "surveys";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      length: 50,
    },
    description: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
      length: 200,
    },
    userId: Relationships.belongsTo(User),
  };

  // This function is rewritten on database/relations.ts
  static user() {}

  // Model record
  id!: number;
  name!: string;
  description!: string;
}
