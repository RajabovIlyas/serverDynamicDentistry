import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request, UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
import { AuthTokenDto } from './dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/log-in')
  async logIn(@Body(new ValidationPipe()) loginDto: LoginDto) {
    return this.authService.logIn(loginDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/auth-me')
  async authMe(@Request() req) {
    return this.authService.authMe(req.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/logout')
  async logout(@Request() req) {
    return this.authService.logout(req.tokenUser);
  }
}
