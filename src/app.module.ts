import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './core/database/typeorm/typeOrmModuleOption';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${__dirname}/configs/env/.${process.env.NODE_ENV}.env`,
      validationSchema: Joi.object({
        RDS_USERNAME: Joi.string().required(),
        RDS_PASSWORD: Joi.string().required(),
        RDS_PORT: Joi.number().required(),
        RDS_HOSTNAME: Joi.string().required(),
        RDS_DB_NAME: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
