import bodyParser from "body-parser";
import { Router } from "express";
import schemaValidator from "../../middlewares/request-validator";
import { createEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee } from "../../services/employee-service";
import { createEmployeeValidation, updateEmployeeValidation } from "../../validators/employee-request-validation";

export default (): Router => {
  const router = Router();
  router.use(bodyParser.json());

  router.get("/", async (_req, res, next) => {
    try {
      const employees = await getEmployees();
      res.status(200).send(employees);
    } catch (e) {
      next(new Error(e));
    }
  });


  router.get("/:employeeId", async ({ params: { employeeId } }, res, next) => {
    console.log("in");
    try {
      const employee = await getEmployee(employeeId);
      res.status(200).send(employee);
    } catch (e) {
      next(new Error(e));
    }
  });


  router.post("/", schemaValidator(createEmployeeValidation),
    async ({ body }, res, next) => {
      try {
        await createEmployee(body);
        res.status(200).send({});
      } catch (e) {
        next(new Error(e));
      }
    }
  );


  router.put("/:employeeId", schemaValidator(updateEmployeeValidation),
    async ({ body, params: { employeeId } }, res, next) => {
      try {
        await updateEmployee(employeeId, body);
        res.status(200).send({});
      } catch (e) {
        next(new Error(e));
      }
    }
  );


  router.delete("/:employeeId",
    async (req, res, next) => {
      try {
        const { employeeId } = req.params;
        await deleteEmployee(employeeId);
        res.status(200).send({});
      } catch (e) {
        next(new Error(e));
      }
    }
  );

  return router;
};