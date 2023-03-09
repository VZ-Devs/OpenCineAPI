import { connect } from "../config/db.config";
import { APILogger } from '../logger/api.logger';
import { Favorites } from "../model/favorites.model";
import { Movies } from "../model/movies.model";
import { Users } from "../model/user.model";


export class FavoritesEngineRepository {

    private logger: APILogger;
    private db: any = {};
    private favoritesEngineRepository: any;
    private favoritesEngineRepositoryUsers: any;
    private favoritesEngineRepositoryMovies: any;
    private favoritesEngineRepositoryFavorites: any;

    constructor() {
        this.db = connect();
        // For Development
        this.db.sequelize.sync({ force: false }).then(() => {
            console.log("Drop and re-sync db.");
        });
        this.favoritesEngineRepositoryUsers = this.db.sequelize.getRepository(Users);
        console.log("Users")
        this.favoritesEngineRepositoryMovies = this.db.sequelize.getRepository(Movies);
        console.log("Movies")
        this.favoritesEngineRepositoryFavorites = this.db.sequelize.getRepository(Favorites);
        console.log("Favorites")
    }

    // async getFavorites(userId: string) {

    //     try {
    //         const favorites = await this.favoritesEngineRepositoryFavorites.findAll( {where: {user_id: userId}});
    //         console.log('favorites:', favorites);
    //         return favorites;
    //     } catch (err) {
    //         console.log(err);
    //         return [];
    //     }
    // }

    async createFavorite(userId: number, movieTitle:string, moviePoster:string) {
        // const testUser = await this.favoritesEngineRepositoryUsers.create({firstName:"Rita", lastName:'Frias', email:'testemail@gmail.com', password:'123'})
        // console.log(testUser)
        try {
            let movie = await this.favoritesEngineRepositoryMovies.findOne({where: {title:movieTitle}});
            if (!movie) { 
                movie = await this.favoritesEngineRepositoryMovies.create({title: movieTitle, url: moviePoster});
            }
            console.log(movie.id)
            const favorite = await this.favoritesEngineRepositoryFavorites.create({user_id: userId, movie_id: movie.id});
            return favorite;
        }
        catch (error) {
            console.error(error); 
            return ({ error: 'Internal server error' });
        }
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