import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Rama, RamaRelations } from '../models';
export declare class RamaRepository extends DefaultCrudRepository<Rama, typeof Rama.prototype.id, RamaRelations> {
    constructor(dataSource: DbDataSource);
}
