export type IStream = {
    title: string;
    description: string;
    coverUrl: string;
    date: Date;
    time: {
        hours: number,
        minutes: number,
    }
}