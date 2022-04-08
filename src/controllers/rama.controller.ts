import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Rama} from '../models';
import {RamaRepository} from '../repositories';

export class RamaController {
  constructor(
    @repository(RamaRepository)
    public ramaRepository : RamaRepository,
  ) {}

  @post('/ramas')
  @response(200, {
    description: 'Rama model instance',
    content: {'application/json': {schema: getModelSchemaRef(Rama)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rama, {
            title: 'NewRama',
            exclude: ['id'],
          }),
        },
      },
    })
    rama: Omit<Rama, 'id'>,
  ): Promise<Rama> {
    return this.ramaRepository.create(rama);
  }

  @get('/ramas/count')
  @response(200, {
    description: 'Rama model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Rama) where?: Where<Rama>,
  ): Promise<Count> {
    return this.ramaRepository.count(where);
  }

  @get('/ramas')
  @response(200, {
    description: 'Array of Rama model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Rama, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Rama) filter?: Filter<Rama>,
  ): Promise<Rama[]> {
    return this.ramaRepository.find(filter);
  }

  @patch('/ramas')
  @response(200, {
    description: 'Rama PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rama, {partial: true}),
        },
      },
    })
    rama: Rama,
    @param.where(Rama) where?: Where<Rama>,
  ): Promise<Count> {
    return this.ramaRepository.updateAll(rama, where);
  }

  @get('/ramas/{id}')
  @response(200, {
    description: 'Rama model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Rama, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Rama, {exclude: 'where'}) filter?: FilterExcludingWhere<Rama>
  ): Promise<Rama> {
    return this.ramaRepository.findById(id, filter);
  }

  @patch('/ramas/{id}')
  @response(204, {
    description: 'Rama PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rama, {partial: true}),
        },
      },
    })
    rama: Rama,
  ): Promise<void> {
    await this.ramaRepository.updateById(id, rama);
  }

  @put('/ramas/{id}')
  @response(204, {
    description: 'Rama PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rama: Rama,
  ): Promise<void> {
    await this.ramaRepository.replaceById(id, rama);
  }

  @del('/ramas/{id}')
  @response(204, {
    description: 'Rama DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ramaRepository.deleteById(id);
  }
}
