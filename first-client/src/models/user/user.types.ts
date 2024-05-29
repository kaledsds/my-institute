import { BaseModel } from "../../common/common.types";

/**
 * User model
 */
export interface UserModel extends BaseModel {
  name: string;
  email: string;
}
