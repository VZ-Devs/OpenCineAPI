import { connect } from "../config/db.config";
import { APILogger } from '../logger/api.logger';
import { Favorites } from "../model/favorites.model";
import { Movies } from "../model/movies.model";
import { Users } from "../model/user.model";


export class FavoritesEngineRepository {

    private logger: APILogger;
    private db: any = {};
    private favoritesEngineRepository: any;

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
        });
        this.favoritesEngineRepository = this.db.sequelize.getRepository(Users);
        console.log("Users")
        this.favoritesEngineRepository = this.db.sequelize.getRepository(Movies);
        console.log("Movies")
        this.favoritesEngineRepository = this.db.sequelize.getRepository(Favorites);
        console.log("Favorites")
    }

    // async getTasks() {
        
    //     try {
    //         const tasks = await this.favoritesEngineRepository.findAll();
    //         console.log('tasks:::', tasks);
    //         return tasks;
    //     } catch (err) {
    //         console.log(err);
    //         return [];
    //     }
    // }

    async createFavorite(favorite) {
        let data = {};
        try {
            favorite.createdate = new Date().toISOString();
            data = await this.favoritesEngineRepository.create(favorite);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    // async updateTask(favorite) {
    //     let data = {};
    //     try {
    //         favorite.updateddate = new Date().toISOString();
    //         data = await this.favoritesEngineRepository.update({...favorite}, {
    //             where: {
    //                 id: favorite.id
    //             }
    //         });
    //     } catch(err) {
    //         this.logger.error('Error::' + err);
    //     }
    //     return data;
    // }

    // async deleteTask(taskId) {
    //     let data = {};
    //     try {
    //         data = await this.favoritesEngineRepository.destroy({
    //             where: {
    //                 id: taskId
    //             }
    //         });
    //     } catch(err) {
    //         this.logger.error('Error::' + err);
    //     }
    //     return data;
    // }

}