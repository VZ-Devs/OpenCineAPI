import { FavoritesEngineRepository } from "../repository/favoritesEngine.repository";

export class FavoritesEngineService {

    private FavoritesEngineRepository: FavoritesEngineRepository;

    constructor() {
        this.FavoritesEngineRepository = new FavoritesEngineRepository();
    }

    // async getFavorites(userId: string) {
    //     return await this.FavoritesEngineRepository.getFavorites(userId);
    // }

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