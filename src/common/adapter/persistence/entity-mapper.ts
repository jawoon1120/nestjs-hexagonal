import { Identity } from '../../domain/Identity';
import { Aggregate } from '../../domain/aggregate';
import { BaseEntity } from './base-entity';

export abstract class EntityMapper<TId extends Identity> {
  abstract toAggregate(entity: BaseEntity): Aggregate<TId>;
  abstract toEntity(aggregate: Aggregate<TId>): BaseEntity;
}
