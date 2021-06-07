import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { TokenService } from '../token/token.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { CreateUserTokenDto } from '../token/dto/create-user-token.dto';
import { SignOptions } from 'jsonwebtoken';
import { compareSync } from 'bcryptjs';
import { LoginDto } from './dto/auth.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  private readonly clientAppUrl: string;

  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async logIn(auth: LoginDto) {
    const findUser = await this.userService.getByEmail(auth.email);
    if (findUser?.id && compareSync(auth.password, findUser.password)) {
      const token = await this.tokenService.create({
        user: findUser.id,
        token: await uuid(),
      });
      const payload = {
        id: token.token,
        type: 'access',
      };
      return { token: await this.generateToken(payload) };
    } else {
      throw 404;
    }
  }

  async authMe(id: string) {
    return await this.userService.getAuthMe(id);
  }

  async logout(id: string) {
    return await this.tokenService.delete(id);
  }

  private async generateToken(data, options?: SignOptions): Promise<string> {
    return this.jwtService.sign(data, options);
  }

  private async verifyToken(token): Promise<any> {
    try {
      const data = this.jwtService.verify(token);
      const tokenExists = await this.tokenService.findOne(data._id);

      if (tokenExists) {
        return data;
      }
      throw new UnauthorizedException();
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  private async saveToken(createUserTokenDto: CreateUserTokenDto) {
    const userToken = await this.tokenService.create(createUserTokenDto);
    return userToken;
  }
}
