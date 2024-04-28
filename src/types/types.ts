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

type TAuthor = {
    username: string,
    bio: null,
    image: string,
    following: boolean
}

type TProducts = {
    slug: string,
    title: string,
    description: string,
    body: string,
    taglist: string[],
    createdAt: string,
    updatedAt: string,
    favorited: boolean,
    favoritesCount: number,
    author: TAuthor
}

export type { TArticles, TProducts, TArticle, TComments, TComment};