import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './services/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './services/jwt.strategy';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { AdminSchema } from './schemas/admin.schemas';
import * as bcrypt from 'bcrypt';
import { IAdmin } from './interface/admin.interface';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: config.get<string>('JWT_EXPIRES_IN') },
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeatureAsync([
      {
        name: 'admin',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => {
          const schema = AdminSchema;
          schema.pre<IAdmin>('save', function(next: Function) {
            const admin = this;
            if (admin.passwordHash) {
              bcrypt.genSalt(10, function(err, salt) {
                if (err) return next(err);

                bcrypt.hash(admin.passwordHash, salt, (err, hash) => {
                  if (err) return next(err);
                  admin.salt = salt;
                  admin.passwordHash = hash;
                  next();
                });
              });
            }
          });
          return schema;
        },
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, ConfigService],
})
export class AuthModule {}
