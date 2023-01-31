//#############################################################
import { IFoundation } from './foundation.interface';
//#############################################################

//#############################################################
export interface IJobOffer extends IFoundation {
  name: string;
  modalityId: number;
  jobId: number;
  contractId: number;
  schedule: string;
  empresaId: number;
  salary_min: number;
  salary_max: number;
}
//#############################################################
