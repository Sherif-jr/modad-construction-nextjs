export interface IAdmin {
  id?: string;
  name?: string;
  email: string;
  password: string;
  isSuperAdmin?: boolean;
}
