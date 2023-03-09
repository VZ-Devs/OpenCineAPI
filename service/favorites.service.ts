import { FavoritesEngineRepository } from "../repository/favoritesEngine.repository";

export class FavoritesEngineService {

    private FavoritesEngineRepository: FavoritesEngineRepository;

    constructor() {
        this.FavoritesEngineRepository = new FavoritesEngineRepository();
    }

    async getTasks() {
        return await this.FavoritesEngineRepository.getTasks();
    }

    async createFavorite(userId: number, movieTitle:string, moviePoster:string) {
        return await this.FavoritesEngineRepository.createFavorite(userId, movieTitle, moviePoster);
    }

    // async updateTask(favorite) {
    //     return await this.FavoritesEngineRepository.updateTask(favorite);
    // }

    // async deleteTask(taskId) {
    //     return await this.FavoritesEngineRepository.deleteTask(taskId);
    // }

}