import {makeAutoObservable} from 'mobx';
import axios from 'axios' ;
import {fromPromise, IPromiseBasedObservable} from 'mobx-utils';
import { TArticles, TArticle, TComments, TProfile } from '../types/types';

class Order {
    products?: IPromiseBasedObservable<TArticles>
    product?: IPromiseBasedObservable<TArticle>
    comments?: IPromiseBasedObservable<TComments>
    profileProducts?: IPromiseBasedObservable<TArticles>
    profile?: IPromiseBasedObservable<TProfile>
    // products?: TArticles
    // isLoading = true
    // isSuccessful = false

    constructor() {
        makeAutoObservable(this)
    }

    add (id = 0) {
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

    loadProfile(id: Array<string>, profileId: string) {
        const resultProfileProducts = async(id: Array<string>) => {
            return (await axios.get(`https://api.realworld.io/api/articles?author=${id[0]}+${id[1]}&limit=5&offset=0`)).data
        }
        const resultProfile = async(profileId: string) => {
            return (await axios.get(`https://api.realworld.io/api/profiles/${profileId}`)).data
        }
        this.profileProducts = fromPromise(resultProfileProducts(id))
        this.profile = fromPromise(resultProfile(profileId))
    }
}

export default new Order();

