export interface BnRoleAccess {
    module:string;
    operation: string;
    action:string;
  }
  
  export interface BnRoleAccessArray {
    access: {
          [key: string]:  string
      };
    ownedby?: string;
  }
  