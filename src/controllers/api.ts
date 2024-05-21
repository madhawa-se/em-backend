import { Router } from "express";
import employeeRoute from "./api/employee";

export default (): Router => {
  const router = Router();
  router.use("/employees", employeeRoute());
  return router;
};