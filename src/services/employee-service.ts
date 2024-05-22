import { Employee } from "../db/schemas/employee-schemas";
import { Gender, IEmployee } from "../defs/interfaces/Employee";


export const createEmployee = (employee: IEmployee): Promise<IEmployee | null> => {
    const fakePhotoId = Math.floor(Math.random() * 100);
    const employeeObj = new Employee({ ...employee, photo: `https://randomuser.me/api/portraits/${(employee.gender===Gender.Male)?"men":"women"}/${fakePhotoId}.jpg` });
    return employeeObj.save();
};

export const getEmployees = (sort?: { key: string, orderby: string }): Promise<IEmployee[] | null> => {

    let employees = Employee.find();
    if (sort) {

        const orderVal = sort.orderby === 'asc' ? 1 : -1;
        const obj:{ [key: string]: 1 | -1 } = {
            [sort.key]: orderVal,
          }
        employees = employees.sort(obj);
    }
    return employees;
};

export const getEmployee = (id: string): Promise<IEmployee | null> => {
    return Employee.findOne({ _id: id });
};

export const updateEmployee = (id: string, employeeData: Partial<IEmployee>): Promise<IEmployee | null> => {
    return Employee.findOneAndUpdate({ _id: id }, { ...employeeData }, { new: true });
};

export const deleteEmployee = (id: string): Promise<IEmployee | null> => {
    return Employee.findOneAndDelete({ _id: id });
};

