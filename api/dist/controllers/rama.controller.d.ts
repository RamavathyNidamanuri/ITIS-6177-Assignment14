import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Rama } from '../models';
import { RamaRepository } from '../repositories';
export declare class RamaController {
    ramaRepository: RamaRepository;
    constructor(ramaRepository: RamaRepository);
    create(rama: Omit<Rama, 'id'>): Promise<Rama>;
    count(where?: Where<Rama>): Promise<Count>;
    find(filter?: Filter<Rama>): Promise<Rama[]>;
    updateAll(rama: Rama, where?: Where<Rama>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Rama>): Promise<Rama>;
    updateById(id: string, rama: Rama): Promise<void>;
    replaceById(id: string, rama: Rama): Promise<void>;
    deleteById(id: string): Promise<void>;
}
