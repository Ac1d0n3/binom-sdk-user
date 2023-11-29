export interface BnRolesAccessObject {
    module:string;
    operation: string;
    create:boolean;
    readAny:boolean;
    updateAny:boolean;
    deleteAny:boolean;
    readOwn:boolean;
    updateOwn:boolean;
    deleteOwn:boolean;
}
