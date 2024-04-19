import {makeAutoObservable} from 'mobx';
import axios from 'axios' ;
import {fromPromise, IPromiseBasedObservable} from 'mobx-utils';
import TArticles from '../types/types';

class Order {
    products?: IPromiseBasedObservable<TArticles>

    constructor() {
        makeAutoObservable(this)
    }

    add () {
        const resultData = async() => {            
            return (await axios.get('https://api.realworld.io/api/articles?limit=10&offset=0')).data
        }
        this.products = fromPromise(resultData());
    }
}

export default new Order();

