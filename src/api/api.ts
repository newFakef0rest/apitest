import axios from 'axios' ;
import { TArticle, TArticles, TComments, TProfile, Tags } from '../types/types';

export const getPosts = async(id: number) => {            
    return (await axios.get<TArticles>(`https://api.realworld.io/api/articles?limit=10&offset=${id * 10}`)).data
}

export const getPostsWithTag = async(id: number, tag: string) => {            
    return (await axios.get<TArticles>(`https://api.realworld.io/api/articles?limit=10&offset=${id * 10}&tag=${tag}`)).data
}

export const getTags = async() => {            
    return (await axios.get<Tags>(`https://api.realworld.io/api/tags`)).data
}

export const getOneProduct = async(id: string) => {
    return (await axios.get<TArticle>(`https://api.realworld.io/api/articles/${id}`)).data
}

export const getComments = async(id: string) => {
    return (await axios.get<TComments>(`https://api.realworld.io/api/articles/${id}/comments`)).data
}

export const getProfileProducts = async(id: Array<string>) => {
    return (await axios.get<TArticles>(`https://api.realworld.io/api/articles?author=${id[0]}+${id[1]}&limit=5&offset=0`)).data
}

export const getProfile = async(profileId: string) => {
    return (await axios.get<TProfile>(`https://api.realworld.io/api/profiles/${profileId}`)).data
}