//######################################################################
import { IFoundation } from './foundation.interface';
//######################################################################

//######################################################################
export interface IUser extends IFoundation {
  username: string;
  password: string;
  authStrategy: string;
  profileId: number;
}
//######################################################################
