import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Rama, RamaRelations} from '../models';

export class RamaRepository extends DefaultCrudRepository<
  Rama,
  typeof Rama.prototype.id,
  RamaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Rama, dataSource);
  }
}
