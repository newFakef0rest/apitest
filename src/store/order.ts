import {makeAutoObservable} from 'mobx';
import axios from 'axios' ;
import {fromPromise, IPromiseBasedObservable} from 'mobx-utils';
import TArticles from '../types/types';

class Order {
    products?: IPromiseBasedObservable<TArticles>

    constructor() {
        makeAutoObservable(this)
    }

    add (id = 0) {
        const resultData = async(id: number) => {            
            return (await axios.get(`https://api.realworld.io/api/articles?limit=10&offset=${id * 10}`)).data
        }
        this.products = fromPromise(resultData(id));
    }
}

export default new Order();

