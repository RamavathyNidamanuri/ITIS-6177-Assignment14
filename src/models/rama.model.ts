import {Entity, model, property} from '@loopback/repository';

@model()
export class Rama extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  content?: string;


  constructor(data?: Partial<Rama>) {
    super(data);
  }
}

export interface RamaRelations {
  // describe navigational properties here
}

export type RamaWithRelations = Rama & RamaRelations;
