export interface JobOfferModel {
    id: number;
    name: string;
    modalityId: number;
    jobId: number;
    contractId: number;
    schedule: string;
    empresaId: number;
    salary_range: string;
    state: string;
    createdAt: Date;
    updatedAt: Date;
  }
  