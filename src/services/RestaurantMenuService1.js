import axios from "axios";

const USERS_REST_API_URLl = 'http://192.168.1.4:8080/menuItems/restaurantMenu/';

const token = localStorage.getItem('token');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};


class RestaurantMenuService {

    getMenu(numb){
        return axios.get(USERS_REST_API_URLl+numb,config);

    }
    
}

export default new RestaurantMenuService()