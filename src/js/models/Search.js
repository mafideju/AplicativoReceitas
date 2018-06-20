import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async getResults() {
        const proxy2 = 'https://cors-anywhere.herokuapp.com/'; 
        const proxy = 'https://crossorigin.me/';
        const key = 'b6fae326e5bfbc01cafd62f4f79e91ae';
        try{
        const res = await axios(`${proxy2}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
        this.result = res.data.recipes;
        // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}



