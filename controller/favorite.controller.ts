import { APILogger } from '../logger/api.logger';
import { FavoritesEngineService } from '../service/favorites.service';

export class FavoritesController {

    private favoritesEngineService: FavoritesEngineService;
    private logger: APILogger;

    constructor() {
        this.favoritesEngineService = new FavoritesEngineService();
        this.logger = new APILogger()
    }

    // async getTasks() {
    //     this.logger.info('Controller: getTasks', null)
    //     return await this.favoritesEngineService.getTasks();
    // }

    async createFavorite(favorite) {
        this.logger.info('Controller: createFavorite', favorite);
        return await this.favoritesEngineService.createFavorite(favorite);
    }

    // async updateTask(favorite) {
    //     this.logger.info('Controller: updateTask', favorite);
    //     return await this.favoritesEngineService.updateTask(favorite);
    // }

    // async deleteTask(taskId) {
    //     this.logger.info('Controller: deleteTask', taskId);
    //     return await this.favoritesEngineService.deleteTask(taskId);
    // }
}