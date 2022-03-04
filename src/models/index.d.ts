import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SpaceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StreamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly images?: (string | null)[];
  readonly price: string;
  readonly tags?: (string | null)[];
  readonly ProductSpace?: Space;
  readonly streamID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly productProductSpaceId?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Space {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly coverUrl?: string;
  readonly userID: string;
  readonly tags?: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Space, SpaceMetaData>);
  static copyOf(source: Space, mutator: (draft: MutableModel<Space, SpaceMetaData>) => MutableModel<Space, SpaceMetaData> | void): Space;
}

export declare class Stream {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly coverUrl?: string;
  readonly StreamSpace: Space;
  readonly tags?: (string | null)[];
  readonly Products?: (Product | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly streamStreamSpaceId: string;
  constructor(init: ModelInit<Stream, StreamMetaData>);
  static copyOf(source: Stream, mutator: (draft: MutableModel<Stream, StreamMetaData>) => MutableModel<Stream, StreamMetaData> | void): Stream;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly email: string;
  readonly avatarUrl?: string;
  readonly UserSpaces?: (Space | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}