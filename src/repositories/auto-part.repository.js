var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LogExecutionTime } from "../decorators/index.js";
import { InMemoryRepository } from "./index.js";
export class AutoPartRepository extends InMemoryRepository {
    create(item) {
        return super.create(item);
    }
    update(id, patch) {
        return super.update(id, patch);
    }
    findAll() {
        return super.findAll();
    }
    findById(id) {
        return super.findById(id);
    }
    deleteById(id) {
        return super.deleteById(id);
    }
}
__decorate([
    LogExecutionTime(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AutoPartRepository.prototype, "create", null);
__decorate([
    LogExecutionTime(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], AutoPartRepository.prototype, "update", null);
__decorate([
    LogExecutionTime(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AutoPartRepository.prototype, "findAll", null);
__decorate([
    LogExecutionTime(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AutoPartRepository.prototype, "findById", null);
__decorate([
    LogExecutionTime(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Boolean)
], AutoPartRepository.prototype, "deleteById", null);
//# sourceMappingURL=auto-part.repository.js.map