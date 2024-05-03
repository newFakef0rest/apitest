import {makeAutoObservable} from 'mobx';
import axios from 'axios' ;
import {fromPromise, IPromiseBasedObservable} from 'mobx-utils';
import { TArticles, TArticle, TComments, TProfile, Tags } from '../types/types';
import { getComments, getOneProduct, getPosts, getProfile, getProfileProducts, getTags } from '../api/api';

class Order {
    products?: IPromiseBasedObservable<TArticles>
    product?: IPromiseBasedObservable<TArticle>
    comments?: IPromiseBasedObservable<TComments>
    profileProducts?: IPromiseBasedObservable<TArticles>
    profile?: IPromiseBasedObservable<TProfile>
    tags?: IPromiseBasedObservable<Tags>

    constructor() {
        makeAutoObservable(this)
    }

    add (id = 0) {
        this.products = fromPromise(getPosts(id))
    }

    getTags() {
        this.tags = fromPromise(getTags());
    }

    addOne(id: string) {
        this.product = fromPromise(getOneProduct(id));
    }

    loadComments(id: string) {
        this.comments = fromPromise(getComments(id));
    }

    loadProfile(id: Array<string>, profileId: string) {
        this.profileProducts = fromPromise(getProfileProducts(id))
        this.profile = fromPromise(getProfile(profileId))
    }
}

export default new Order();

