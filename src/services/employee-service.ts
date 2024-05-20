import { Employee } from "../db/schemas/employee-schemas";
import { IEmployee } from "../defs/interfaces/Employee";


export const createEmployee = (employee: IEmployee): Promise<IEmployee | null> => {
    const fakePhotoId = Math.floor(Math.random() * 100);
    const employeeObj = new Employee({ ...employee, photo: `https://randomuser.me/api/portraits/men/${fakePhotoId}.jpg` });
    return employeeObj.save();
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getEmployees = (_sort?: string[]): Promise<IEmployee[] | null> => {
    return Employee.find();
};

export const getEmployee = (id: string): Promise<IEmployee | null> => {
    return Employee.findOne({ _id: id });
};

export const updateEmployee = (id: string, employeeData: Partial<IEmployee>):Promise<IEmployee | null> => {
    return Employee.findOneAndUpdate({ _id: id }, { ...employeeData }, { new: true });
};

export const deleteEmployee = (id: string): Promise<IEmployee | null> => {
    return Employee.findOneAndDelete({ _id: id });
};

