"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RamaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RamaController = class RamaController {
    constructor(ramaRepository) {
        this.ramaRepository = ramaRepository;
    }
    async create(rama) {
        return this.ramaRepository.create(rama);
    }
    async count(where) {
        return this.ramaRepository.count(where);
    }
    async find(filter) {
        return this.ramaRepository.find(filter);
    }
    async updateAll(rama, where) {
        return this.ramaRepository.updateAll(rama, where);
    }
    async findById(id, filter) {
        return this.ramaRepository.findById(id, filter);
    }
    async updateById(id, rama) {
        await this.ramaRepository.updateById(id, rama);
    }
    async replaceById(id, rama) {
        await this.ramaRepository.replaceById(id, rama);
    }
    async deleteById(id) {
        await this.ramaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/ramas'),
    (0, rest_1.response)(200, {
        description: 'Rama model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Rama) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rama, {
                    title: 'NewRama',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RamaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ramas/count'),
    (0, rest_1.response)(200, {
        description: 'Rama model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Rama)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RamaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ramas'),
    (0, rest_1.response)(200, {
        description: 'Array of Rama model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Rama, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Rama)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RamaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ramas'),
    (0, rest_1.response)(200, {
        description: 'Rama PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rama, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Rama)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Rama, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RamaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ramas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Rama model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rama, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Rama, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RamaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ramas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rama PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rama, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Rama]),
    tslib_1.__metadata("design:returntype", Promise)
], RamaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/ramas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rama PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Rama]),
    tslib_1.__metadata("design:returntype", Promise)
], RamaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/ramas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rama DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], RamaController.prototype, "deleteById", null);
RamaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RamaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RamaRepository])
], RamaController);
exports.RamaController = RamaController;
//# sourceMappingURL=rama.controller.js.map