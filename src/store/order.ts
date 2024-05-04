import {makeAutoObservable} from 'mobx';
import {fromPromise, IPromiseBasedObservable} from 'mobx-utils';
import { TArticles, TArticle, TComments, TProfile, Tags } from '../types/types';
import { getComments, getOneProduct, getPosts, getPostsWithTag, getProfile, getProfileProducts, getTags } from '../api/api';

class Order {
    products?: IPromiseBasedObservable<TArticles>
    product?: IPromiseBasedObservable<TArticle>
    comments?: IPromiseBasedObservable<TComments>
    profileProducts?: IPromiseBasedObservable<TArticles>
    profile?: IPromiseBasedObservable<TProfile>
    tags?: IPromiseBasedObservable<Tags>
    tag?: string

    constructor() {
        makeAutoObservable(this)
    }

    add (id = 0) {
        if (this.tag) {
            this.products = fromPromise(getPostsWithTag(id, this.tag))
        } else {
            this.products = fromPromise(getPosts(id))
        }
    }

    getTags() {
        this.tags = fromPromise(getTags());
    }

    emptyTag() {
        this.tag = undefined
        this.add()
    }
    
    fillTag(tag: string) {
        this.tag = tag
        this.add()
    }

    addOne(id: string) {
        this.product = fromPromise(getOneProduct(id));
    }

    loadComments(id: string) {
        this.comments = fromPromise(getComments(id));
    }

    loadProfile(id: Array<string>, profileId: string, newPage = 0) {
        this.profileProducts = fromPromise(getProfileProducts(id, newPage))
        this.profile = fromPromise(getProfile(profileId))
    }
}

export default new Order();

