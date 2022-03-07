import firestore from '@react-native-firebase/firestore';

export type IStream = {
    uid: string;
    ownerId: string;
    title: string;
    description: string;
    coverUrl: string;
    dateUtc: {
        seconds: number;
        nanoseconds: number;
    };
    time: {
        hours: number;
        minutes: number;
    },
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
}