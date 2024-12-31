import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api' ,
    params:{
        key : '0b3edea14e214879a0d5b089639a2736'
    }
})