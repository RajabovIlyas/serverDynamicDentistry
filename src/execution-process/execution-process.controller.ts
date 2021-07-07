import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ExecutionProcessService } from './execution-process.service';
import { CreateExecutionProcessDto } from './dto/execution-process.dto';

@ApiTags('execution-process')
@Controller('execution-process')
export class ExecutionProcessController {
  constructor(
    private readonly executionProcessService: ExecutionProcessService,
  ) {}

  @Post()
  async create(@Body() createExecutionProcessDto: CreateExecutionProcessDto) {
    return this.executionProcessService.create(createExecutionProcessDto);
  }

  @Get()
  async getAll() {
    return this.executionProcessService.getAll();
  }
}
