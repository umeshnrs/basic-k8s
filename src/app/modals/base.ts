export default class Base {
    id:string;
    name: string;
    is_active:boolean;
    constructor(id:string, name: string, is_active: boolean){
        this.id = id;
        this.name = name;
        this.is_active = is_active;
    }
}
