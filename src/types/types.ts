type TArticles = {
    articles: TProducts[],
    articlesCount: number
}


type TArticle = {
    article: TProducts
}

type TComments = {
    comments: TComment[]
}

type TComment = {
    id: number,
    createdAt: string,
    updatedAt: string,
    body: string,
    author: TAuthor
}

type TProfile = {
    profile: TAuthor
}

type TAuthor = {
    username: string,
    bio: null,
    image: string,
    following: boolean
}

type Tags = {
    tags: [string]
}

type TProducts = {
    slug: string,
    title: string,
    description: string,
    body: string,
    tagList: string[],
    createdAt: string,
    updatedAt: string,
    favorited: boolean,
    favoritesCount: number,
    author: TAuthor
}

export type { TArticles, TProducts, TArticle, TComments, TComment, TProfile, Tags};