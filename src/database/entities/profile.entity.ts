//###############################################################################################
import { IProfile } from 'src/interfaces/profile.interface';
import { Column, Entity, OneToMany } from 'typeorm';
import { FoundationEntity } from './foundation.entity';
import { UserEntity } from './user.entity';
//###############################################################################################

//###############################################################################################
@Entity('profiles')
export class ProfileEntity extends FoundationEntity implements IProfile {

  @Column({ type: 'varchar', length: 100, unique: true })
  description: string;

  @OneToMany(() => UserEntity, (user) => user.profile)
  users: UserEntity[];
}
//###############################################################################################
