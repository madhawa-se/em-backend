import { Schema, model } from "mongoose";
import { Gender, IEmployee } from "../../defs/interfaces/Employee";

const employeeSchema = new Schema<IEmployee>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  gender: { type: String, Gender, required: true },
  photo:{ type: String, Gender, required: true }
});

employeeSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

employeeSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: function (_doc, ret) {   delete ret._id  }
});

export const Employee = model<IEmployee>('Employee', employeeSchema);