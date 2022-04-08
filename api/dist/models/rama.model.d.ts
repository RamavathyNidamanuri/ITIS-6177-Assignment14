import { Entity } from '@loopback/repository';
export declare class Rama extends Entity {
    id?: string;
    title: string;
    content?: string;
    constructor(data?: Partial<Rama>);
}
export interface RamaRelations {
}
export declare type RamaWithRelations = Rama & RamaRelations;
