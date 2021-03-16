import { User } from "../../src/lib/entities/user"

declare module "express" {
  export interface Request {
    user?: User
  }
}