import { Interface } from "readline";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "employee";
  createdAt: string;
  updatedAt: string;
}
