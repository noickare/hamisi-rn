import firestore from '@react-native-firebase/firestore';

export type IStream = {
    ownerId: string;
    title: string;
    description: string;
    coverUrl: string;
    dateUtc: Date;
    time: {
        hours: number,
        minutes: number,
    },
    createdAt: string;
}