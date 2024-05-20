import cors from "cors";
import { Router } from "express";
import employeeRoute from "./api/employee";

export default (): Router => {
    const router = Router();
    const corsOptions = {
      origin: "*",
    };
    router.use(cors(corsOptions));
  
    router.use("/employees", employeeRoute());
    // router.use(fatalError);
  
    return router; 
  };