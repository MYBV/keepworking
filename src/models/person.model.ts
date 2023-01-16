export interface PersonModel {
  id: number;
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
  state: string;
  createdAt: Date;
  updatedAt: Date;
}
