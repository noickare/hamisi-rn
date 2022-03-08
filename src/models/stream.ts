import firestore from '@react-native-firebase/firestore';

export type IStream = {
    uid: string;
    ownerId: string;
    title: string;
    description: string;
    coverUrl: string;
    dateUtc: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
}