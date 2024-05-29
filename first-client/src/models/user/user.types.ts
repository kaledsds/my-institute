import { BaseModel } from "../../common/common.types";

/**
 * User model
 */
export interface UserModel extends BaseModel {
  first_name: string;
  last_name: string;
  birthday: string;
  phone: string;
  address: string;
  email: string;
  category: string;
}
