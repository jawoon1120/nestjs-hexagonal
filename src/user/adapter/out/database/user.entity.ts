import { BaseEntity } from 'src/core/database/typeorm/base.entity';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../../common/adapter/persistence/base-entity';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 128 })
  email: string;

  @Column({ type: 'varchar', length: 512 })
  hashedPassword: string;
}
