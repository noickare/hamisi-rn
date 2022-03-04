// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Space, Stream, User } = initSchema(schema);

export {
  Product,
  Space,
  Stream,
  User
};