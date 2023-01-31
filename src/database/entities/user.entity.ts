//###############################################################################################
import { IUser } from 'src/interfaces/user.interface';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { FoundationEntity } from './foundation.entity';
import { PersonEntity } from './person.entity';
import { ProfileEntity } from './profile.entity';
//###############################################################################################

//###############################################################################################
@Entity('users')
export class UserEntity extends FoundationEntity implements IUser {
  @Column({ type: 'varchar', length: 100, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  authStrategy: string;

  @Column({ type: 'int', length: 0 })
  profileId: number;

  @Column({ type: 'int', length: 0, nullable: true })
  personId: number;

  @ManyToOne(() => ProfileEntity, (profile) => profile.users)
  profile: UserEntity;

  @OneToOne(() => PersonEntity)
  @JoinColumn()
  person: PersonEntity;
}
//###############################################################################################
