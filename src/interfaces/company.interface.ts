//#############################################################
import { IFoundation } from './foundation.interface';
//#############################################################

//#############################################################
export interface ICompany extends IFoundation {
  name: string;
  business_name: string;
  cuil: string;
}
//#############################################################
