import { Employee } from "../db/schemas/employee-schemas";
import { IEmployee } from "../defs/interfaces/Employee";


export const createEmployee = (employee: IEmployee) => {
    const fakePhotoId = Math.floor(Math.random() * 100);
    const employeeObj = new Employee({ ...employee, photo: `https://randomuser.me/api/portraits/men/${fakePhotoId}.jpg`});
    return employeeObj.save();
};

export const getEmployees = (sort?: string[]) => {
    return Employee.find();
};

export const getEmployee = (id: string) => {
    return Employee.findOne({ _id: id });
};

export const updateEmployee = (id: string, employeeData: Partial<IEmployee>) => {
    return Employee.findOneAndUpdate({ _id: id }, { ...employeeData }, { new: true });
};

export const deleteEmployee = (id: string) => {
    return Employee.findOneAndDelete({ _id: id });
};

