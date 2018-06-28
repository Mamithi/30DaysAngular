export class Post {
    data: Data;
    links: Links;
    meta: Meta;
}

export class Data {
    id: number;
    topic: string;
    title: string;
    post_content: string;
    image1: string;
}

export class Links {
    first: string;
    last: string;
    prev: string;
    next: string;
}

export class Meta {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
}