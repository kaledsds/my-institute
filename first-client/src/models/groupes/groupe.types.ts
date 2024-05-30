import { BaseModel } from "../../common/common.types";
import { niveauEnum } from "./niveau.enum";

/**
 * Post model
 */
export interface GroupeModel extends BaseModel {
  nom: string;
  specialite_id: BigInteger;
  niveau: niveauEnum;
}
