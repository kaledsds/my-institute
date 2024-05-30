import { BaseModel } from "../../common/common.types";

/**
 * Post model
 */
export interface StudentModel extends BaseModel {
  first_name: string;
  last_name: string;
  birthday: string;
  adress: string;
  email: string;
  specialite_id: BigInteger;
  groupe_id: BigInteger;
  phone: string;
}
