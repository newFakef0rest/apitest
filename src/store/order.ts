import {makeAutoObservable} from 'mobx';
import axios from 'axios' ;
import {fromPromise, IPromiseBasedObservable} from 'mobx-utils';
import { TArticles, TArticle, TComments } from '../types/types';

class Order {
    products?: IPromiseBasedObservable<TArticles>
    product?: IPromiseBasedObservable<TArticle>
    comments?: IPromiseBasedObservable<TComments>
    // products?: TArticles
    // isLoading = true
    // isSuccessful = false

    constructor() {
        makeAutoObservable(this)
    }

    async add (id = 0) {
        const resultData = async(id: number) => {            
            return (await axios.get(`https://api.realworld.io/api/articles?limit=10&offset=${id * 10}`)).data
        }
        this.products = fromPromise(resultData(id))
        // try {
        
        //     const newData = await resultData(id)
        //     runInAction(() => {
        //         this.products = newData
        //         this.isLoading = false
        //         this.isSuccessful = true
        //     })
        // } catch {
        //     this.isLoading = false
        //     this.isSuccessful = false
        // }
        
        //  = fromPromise();
    }

    addOne(id: string) {
        const resultProduct = async(id: string) => {
            return (await axios.get(`https://api.realworld.io/api/articles/${id}`)).data
        }
        this.product = fromPromise(resultProduct(id));
    }

    loadComments(id: string) {
        const resultComments = async(id: string) => {
            return (await axios.get(`https://api.realworld.io/api/articles/${id}/comments`)).data
        }
        this.comments = fromPromise(resultComments(id));
    }
}

export default new Order();

