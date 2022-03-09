export type IStream = {
    uid: string;
    ownerId: string;
    title: string;
    description: string;
    coverUrl: string;
    dateUtc: string;
    likesCount?: number;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
}