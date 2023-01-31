//###########################################################################################
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JobEntity } from 'src/database/entities/job.entity';
import { CreateJobDTO } from './dto/create-job.dto';
import { UpdateJobDTO } from './dto/update-job.dto';
import { JobService } from './job.service';
//###########################################################################################

//###########################################################################################
@ApiTags('Jobs Types')
@Controller('/job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  @ApiOperation({ summary: 'List All Actives Jobs types' })
  getJobs(): Promise<JobEntity[]> {
    return this.jobService.getJobs();
  }

  @Get(':id([0-9]+)')
  @ApiOperation({ summary: 'Consult a Job type' })
  getJobId(@Param('id', ParseIntPipe) id: number) {
    return this.jobService.getJobId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a Job type' })
  createJob(@Body() newJob: CreateJobDTO) {
    return this.jobService.createJob(newJob);
  }

  @Patch(':id([0-9]+)')
  @ApiOperation({ summary: 'Update a Job type' })
  updateJob(
    @Param('id', ParseIntPipe) id: number,
    @Body() job: UpdateJobDTO,
  ) {
    return this.jobService.updateJob(id, job);
  }

  @Delete(':id([0-9]+)')
  @ApiOperation({ summary: 'Delete a Job type' })
  deleteModality(@Param('id', ParseIntPipe) id: number) {
    return this.jobService.deleteJob(id);
  }
}

//###########################################################################################
