import { Gender } from "../enum/gender";

type Registration = {
    name:string;
    email:string;
    password:string;
    gender: Gender
    mobile:string;
    dob:Date;
}