import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export function getDataSourceOptions(
  configService: ConfigService,
): DataSourceOptions {
  return {
    name: 'default',
    type: 'postgres',
    host: configService.get('RDS_HOSTNAME'),
    port: configService.get('RDS_PORT'),
    database: configService.get('RDS_DB_NAME'),
    username: configService.get('RDS_USERNAME'),
    password: configService.get('RDS_PASSWORD'),
    entities: [__dirname + '/../../../**/*.entity.{js,ts}'],
    migrations: [__dirname + '/../../../migrations/*{.ts,.js}'],
    synchronize: true,
    logging: ['error', 'schema'],
    migrationsRun: false,
    namingStrategy: new SnakeNamingStrategy(),
  };
}
