"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteModel = void 0;
const BaseModel_1 = require("./BaseModel");
class NoteModel extends BaseModel_1.BaseModel {
    constructor() {
        super("src/database/data/Notes.json");
    }
    get(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield this.loadData();
            const search = options === null || options === void 0 ? void 0 : options.search;
            if (!!search) {
                data = data.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));
            }
            if (!!(options === null || options === void 0 ? void 0 : options.skip)) {
                data = data.slice(options.skip);
            }
            if (!!(options === null || options === void 0 ? void 0 : options.limit)) {
                data = data.slice(0, options.limit);
            }
            yield this.onFinish(data.length);
            return data;
        });
    }
    findByIdAndUpdate(id, note) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.loadData();
            const index = data.findIndex((note) => note._id === id);
            if (index === -1) {
                throw new Error("Note not found");
            }
            data[index] = Object.assign(Object.assign({}, data[index]), note);
            yield this.saveData(data);
            yield this.onFinish(1);
            return data[index];
        });
    }
}
exports.NoteModel = NoteModel;
