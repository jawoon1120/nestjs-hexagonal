import { Column, Entity } from 'typeorm';

@Entity('user')
export class UserEntity {
  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 128 })
  email: string;

  @Column({ type: 'varchar', length: 512 })
  hashedPassword: string;
}
