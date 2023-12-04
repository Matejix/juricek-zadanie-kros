export interface UsersInterface {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

export type ObjectOfUsers = Record<number, UsersInterface>;
