//#############################################################
import { IFoundation } from './foundation.interface';
//#############################################################

//#############################################################
export interface ICountry extends IFoundation {
  name: string;
  phone_code: string;
  abreviatura: string;
  icon: string;
}
//#############################################################
