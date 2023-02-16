import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/restaurants';

class RestaurantService {

    getRestaurants(){
        return axios.get(USERS_REST_API_URL);

    }
}

export default new RestaurantService()