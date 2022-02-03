export interface Article {
    title: string,
    description: string,
    content: string,
    url: string,
    image: string,
    publishedAt: Date,
    source: {
        name: string,
        url: string,
    }
}
