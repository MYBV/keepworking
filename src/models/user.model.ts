export interface UserModel {
  id: number;
  username: string;
  password: string;
  authStrategy: string;
  profileId: number;
  state: string;
  createdAt: Date;
  updatedAt: Date;
}
