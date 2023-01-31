//######################################################################
import { IFoundation } from './foundation.interface';
//######################################################################

//######################################################################
export interface IPerson extends IFoundation {
  firstname: string;
  lastname: string;
  email_address: string;
  phone_number: string;
  linkedin_profile: string;
  workingmodalityId?: number;
  birthdate?: Date;
  jobId?: number;
  experience_years?: number;
  countryId?: number;
}
//######################################################################
