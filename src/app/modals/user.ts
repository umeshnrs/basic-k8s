import { Gender } from "../enum/gender";
import { Role } from "../enum/role";
import Base from "./base";

export default class User extends Base {
  constructor() {
    super('', '', true);
    this.email = '';
    this.password = '';
  }
  email:string;
  password:string;
  gender?: Gender;
  mobile? :number;
  dob?: Date;  
  roles?: Array<Role>;
}