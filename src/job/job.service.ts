//#####################################################################################################
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobEntity } from 'src/database/entities/job.entity';
import { Repository } from 'typeorm';
import { CreateJobDTO } from './dto/create-job.dto';
import { UpdateJobDTO } from './dto/update-job.dto';
//#####################################################################################################

//#####################################################################################################
@Injectable()
export class JobService {
  constructor(
    @InjectRepository(JobEntity)
    private readonly jobRespository: Repository<JobEntity>,
  ) {}

  async getJobId(id: number) {
    let jobFound = await this.jobRespository.findOne({
      where: { id: id },
    });

    if (!jobFound)
      return new HttpException('Job not found', HttpStatus.NOT_FOUND);

    return jobFound;
  }

  async getJobDescription(description: string) {
    let jobFound = await this.jobRespository.findOne({
      where: { description: description },
    });

    if (!jobFound)
      return new HttpException('Job not found', HttpStatus.NOT_FOUND);

    return jobFound;
  }

  async createJob(job: CreateJobDTO) {
    let jobFound = await this.getJobDescription(job.description);
    if (jobFound.hasOwnProperty('id'))
      return new HttpException(
        'Description Job Duplicate',
        HttpStatus.BAD_REQUEST,
      );

    let newJob = this.jobRespository.create(job);
    return await this.jobRespository.save(newJob);
  }

  getJobs() {
    return this.jobRespository.find({
      where: { state: 'ACTIVO' },
    });
  }

  async updateJob(id: number, job: UpdateJobDTO) {
    let jobFound = await this.getJobId(id);
    if (!jobFound.hasOwnProperty('id')) return jobFound;

    let jobDescription = await this.getJobDescription(job.description);
    if (jobDescription.hasOwnProperty('id'))
      return new HttpException(
        'Description Job Duplicate',
        HttpStatus.BAD_REQUEST,
      );

    return await this.jobRespository.update({ id: id }, job);
  }

  async deleteJob(id: number) {
    let jobFound = await this.getJobId(id);

    console.log('jobFoundjobFoundjobFound')
    console.log(jobFound)

    if (!jobFound.hasOwnProperty('id')) return jobFound;

    return await this.jobRespository.update({ id: id }, { state: 'INACTIVO' });
  }
}
//#####################################################################################################
