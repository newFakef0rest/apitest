type TArticles = {
    articles: TProducts[],
    articlesCount: number
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

export default TArticles;