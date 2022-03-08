import {IUser} from './user';

export type IComment = {
    uid: string;
    user: IUser;
    streamId: string;
    text: string;
    key?: string;
    createdAt?: string;
    updatedAt?: string;
}