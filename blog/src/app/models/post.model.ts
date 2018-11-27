export class Post {
    constructor(
        public topic: string,
        public title: string,
        public post_content: string,
        public image1,
        public image2?: string,
        public image3?: string,
    ) { }
}
