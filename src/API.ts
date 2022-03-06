/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  images?: Array< string | null > | null,
  price: string,
  tags?: Array< string | null > | null,
  streamID: string,
  _version?: number | null,
  productProductSpaceId?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  price?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  streamID?: ModelIDInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  productProductSpaceId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  description?: string | null,
  images?: Array< string | null > | null,
  price: string,
  tags?: Array< string | null > | null,
  ProductSpace?: Space | null,
  streamID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  productProductSpaceId?: string | null,
};

export type Space = {
  __typename: "Space",
  id: string,
  name: string,
  description?: string | null,
  coverUrl?: string | null,
  userID: string,
  tags?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  images?: Array< string | null > | null,
  price?: string | null,
  tags?: Array< string | null > | null,
  streamID?: string | null,
  _version?: number | null,
  productProductSpaceId?: string | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateSpaceInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  coverUrl?: string | null,
  userID: string,
  tags?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelSpaceConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  coverUrl?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelSpaceConditionInput | null > | null,
  or?: Array< ModelSpaceConditionInput | null > | null,
  not?: ModelSpaceConditionInput | null,
};

export type UpdateSpaceInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  coverUrl?: string | null,
  userID?: string | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteSpaceInput = {
  id: string,
  _version?: number | null,
};

export type CreateStreamInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  coverUrl?: string | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
  streamStreamSpaceId: string,
};

export type ModelStreamConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  coverUrl?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelStreamConditionInput | null > | null,
  or?: Array< ModelStreamConditionInput | null > | null,
  not?: ModelStreamConditionInput | null,
  streamStreamSpaceId?: ModelIDInput | null,
};

export type Stream = {
  __typename: "Stream",
  id: string,
  name: string,
  description?: string | null,
  coverUrl?: string | null,
  StreamSpace: Space,
  tags?: Array< string | null > | null,
  Products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  streamStreamSpaceId: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateStreamInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  coverUrl?: string | null,
  tags?: Array< string | null > | null,
  _version?: number | null,
  streamStreamSpaceId?: string | null,
};

export type DeleteStreamInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  email: string,
  avatarUrl?: string | null,
  isVerified: boolean,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  isVerified?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  email: string,
  avatarUrl?: string | null,
  isVerified: boolean,
  UserSpaces?: ModelSpaceConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelSpaceConnection = {
  __typename: "ModelSpaceConnection",
  items:  Array<Space | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  avatarUrl?: string | null,
  isVerified?: boolean | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  price?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  streamID?: ModelIDInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  productProductSpaceId?: ModelIDInput | null,
};

export type ModelSpaceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  coverUrl?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelSpaceFilterInput | null > | null,
  or?: Array< ModelSpaceFilterInput | null > | null,
  not?: ModelSpaceFilterInput | null,
};

export type ModelStreamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  coverUrl?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  and?: Array< ModelStreamFilterInput | null > | null,
  or?: Array< ModelStreamFilterInput | null > | null,
  not?: ModelStreamFilterInput | null,
  streamStreamSpaceId?: ModelIDInput | null,
};

export type ModelStreamConnection = {
  __typename: "ModelStreamConnection",
  items:  Array<Stream | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatarUrl?: ModelStringInput | null,
  isVerified?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    price: string,
    tags?: Array< string | null > | null,
    ProductSpace?:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    streamID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productProductSpaceId?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    price: string,
    tags?: Array< string | null > | null,
    ProductSpace?:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    streamID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productProductSpaceId?: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    price: string,
    tags?: Array< string | null > | null,
    ProductSpace?:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    streamID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productProductSpaceId?: string | null,
  } | null,
};

export type CreateSpaceMutationVariables = {
  input: CreateSpaceInput,
  condition?: ModelSpaceConditionInput | null,
};

export type CreateSpaceMutation = {
  createSpace?:  {
    __typename: "Space",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    userID: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSpaceMutationVariables = {
  input: UpdateSpaceInput,
  condition?: ModelSpaceConditionInput | null,
};

export type UpdateSpaceMutation = {
  updateSpace?:  {
    __typename: "Space",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    userID: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSpaceMutationVariables = {
  input: DeleteSpaceInput,
  condition?: ModelSpaceConditionInput | null,
};

export type DeleteSpaceMutation = {
  deleteSpace?:  {
    __typename: "Space",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    userID: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateStreamMutationVariables = {
  input: CreateStreamInput,
  condition?: ModelStreamConditionInput | null,
};

export type CreateStreamMutation = {
  createStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    StreamSpace:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tags?: Array< string | null > | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        description?: string | null,
        images?: Array< string | null > | null,
        price: string,
        tags?: Array< string | null > | null,
        ProductSpace?:  {
          __typename: "Space",
          id: string,
          name: string,
          description?: string | null,
          coverUrl?: string | null,
          userID: string,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        streamID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        productProductSpaceId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    streamStreamSpaceId: string,
  } | null,
};

export type UpdateStreamMutationVariables = {
  input: UpdateStreamInput,
  condition?: ModelStreamConditionInput | null,
};

export type UpdateStreamMutation = {
  updateStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    StreamSpace:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tags?: Array< string | null > | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        description?: string | null,
        images?: Array< string | null > | null,
        price: string,
        tags?: Array< string | null > | null,
        ProductSpace?:  {
          __typename: "Space",
          id: string,
          name: string,
          description?: string | null,
          coverUrl?: string | null,
          userID: string,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        streamID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        productProductSpaceId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    streamStreamSpaceId: string,
  } | null,
};

export type DeleteStreamMutationVariables = {
  input: DeleteStreamInput,
  condition?: ModelStreamConditionInput | null,
};

export type DeleteStreamMutation = {
  deleteStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    StreamSpace:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tags?: Array< string | null > | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        description?: string | null,
        images?: Array< string | null > | null,
        price: string,
        tags?: Array< string | null > | null,
        ProductSpace?:  {
          __typename: "Space",
          id: string,
          name: string,
          description?: string | null,
          coverUrl?: string | null,
          userID: string,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        streamID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        productProductSpaceId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    streamStreamSpaceId: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    avatarUrl?: string | null,
    isVerified: boolean,
    UserSpaces?:  {
      __typename: "ModelSpaceConnection",
      items:  Array< {
        __typename: "Space",
        id: string,
        name: string,
        description?: string | null,
        coverUrl?: string | null,
        userID: string,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    avatarUrl?: string | null,
    isVerified: boolean,
    UserSpaces?:  {
      __typename: "ModelSpaceConnection",
      items:  Array< {
        __typename: "Space",
        id: string,
        name: string,
        description?: string | null,
        coverUrl?: string | null,
        userID: string,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    avatarUrl?: string | null,
    isVerified: boolean,
    UserSpaces?:  {
      __typename: "ModelSpaceConnection",
      items:  Array< {
        __typename: "Space",
        id: string,
        name: string,
        description?: string | null,
        coverUrl?: string | null,
        userID: string,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    price: string,
    tags?: Array< string | null > | null,
    ProductSpace?:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    streamID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productProductSpaceId?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      images?: Array< string | null > | null,
      price: string,
      tags?: Array< string | null > | null,
      ProductSpace?:  {
        __typename: "Space",
        id: string,
        name: string,
        description?: string | null,
        coverUrl?: string | null,
        userID: string,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      streamID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productProductSpaceId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description?: string | null,
      images?: Array< string | null > | null,
      price: string,
      tags?: Array< string | null > | null,
      ProductSpace?:  {
        __typename: "Space",
        id: string,
        name: string,
        description?: string | null,
        coverUrl?: string | null,
        userID: string,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      streamID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      productProductSpaceId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSpaceQueryVariables = {
  id: string,
};

export type GetSpaceQuery = {
  getSpace?:  {
    __typename: "Space",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    userID: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSpacesQueryVariables = {
  filter?: ModelSpaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpacesQuery = {
  listSpaces?:  {
    __typename: "ModelSpaceConnection",
    items:  Array< {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSpacesQueryVariables = {
  filter?: ModelSpaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSpacesQuery = {
  syncSpaces?:  {
    __typename: "ModelSpaceConnection",
    items:  Array< {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStreamQueryVariables = {
  id: string,
};

export type GetStreamQuery = {
  getStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    StreamSpace:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tags?: Array< string | null > | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        description?: string | null,
        images?: Array< string | null > | null,
        price: string,
        tags?: Array< string | null > | null,
        ProductSpace?:  {
          __typename: "Space",
          id: string,
          name: string,
          description?: string | null,
          coverUrl?: string | null,
          userID: string,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        streamID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        productProductSpaceId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    streamStreamSpaceId: string,
  } | null,
};

export type ListStreamsQueryVariables = {
  filter?: ModelStreamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStreamsQuery = {
  listStreams?:  {
    __typename: "ModelStreamConnection",
    items:  Array< {
      __typename: "Stream",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      StreamSpace:  {
        __typename: "Space",
        id: string,
        name: string,
        description?: string | null,
        coverUrl?: string | null,
        userID: string,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      tags?: Array< string | null > | null,
      Products?:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          name: string,
          description?: string | null,
          images?: Array< string | null > | null,
          price: string,
          tags?: Array< string | null > | null,
          streamID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          productProductSpaceId?: string | null,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      streamStreamSpaceId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStreamsQueryVariables = {
  filter?: ModelStreamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStreamsQuery = {
  syncStreams?:  {
    __typename: "ModelStreamConnection",
    items:  Array< {
      __typename: "Stream",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      StreamSpace:  {
        __typename: "Space",
        id: string,
        name: string,
        description?: string | null,
        coverUrl?: string | null,
        userID: string,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      tags?: Array< string | null > | null,
      Products?:  {
        __typename: "ModelProductConnection",
        items:  Array< {
          __typename: "Product",
          id: string,
          name: string,
          description?: string | null,
          images?: Array< string | null > | null,
          price: string,
          tags?: Array< string | null > | null,
          streamID: string,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          productProductSpaceId?: string | null,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      streamStreamSpaceId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    avatarUrl?: string | null,
    isVerified: boolean,
    UserSpaces?:  {
      __typename: "ModelSpaceConnection",
      items:  Array< {
        __typename: "Space",
        id: string,
        name: string,
        description?: string | null,
        coverUrl?: string | null,
        userID: string,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email: string,
      avatarUrl?: string | null,
      isVerified: boolean,
      UserSpaces?:  {
        __typename: "ModelSpaceConnection",
        items:  Array< {
          __typename: "Space",
          id: string,
          name: string,
          description?: string | null,
          coverUrl?: string | null,
          userID: string,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email: string,
      avatarUrl?: string | null,
      isVerified: boolean,
      UserSpaces?:  {
        __typename: "ModelSpaceConnection",
        items:  Array< {
          __typename: "Space",
          id: string,
          name: string,
          description?: string | null,
          coverUrl?: string | null,
          userID: string,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null >,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    price: string,
    tags?: Array< string | null > | null,
    ProductSpace?:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    streamID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productProductSpaceId?: string | null,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    price: string,
    tags?: Array< string | null > | null,
    ProductSpace?:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    streamID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productProductSpaceId?: string | null,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description?: string | null,
    images?: Array< string | null > | null,
    price: string,
    tags?: Array< string | null > | null,
    ProductSpace?:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    streamID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    productProductSpaceId?: string | null,
  } | null,
};

export type OnCreateSpaceSubscription = {
  onCreateSpace?:  {
    __typename: "Space",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    userID: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSpaceSubscription = {
  onUpdateSpace?:  {
    __typename: "Space",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    userID: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSpaceSubscription = {
  onDeleteSpace?:  {
    __typename: "Space",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    userID: string,
    tags?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateStreamSubscription = {
  onCreateStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    StreamSpace:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tags?: Array< string | null > | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        description?: string | null,
        images?: Array< string | null > | null,
        price: string,
        tags?: Array< string | null > | null,
        ProductSpace?:  {
          __typename: "Space",
          id: string,
          name: string,
          description?: string | null,
          coverUrl?: string | null,
          userID: string,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        streamID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        productProductSpaceId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    streamStreamSpaceId: string,
  } | null,
};

export type OnUpdateStreamSubscription = {
  onUpdateStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    StreamSpace:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tags?: Array< string | null > | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        description?: string | null,
        images?: Array< string | null > | null,
        price: string,
        tags?: Array< string | null > | null,
        ProductSpace?:  {
          __typename: "Space",
          id: string,
          name: string,
          description?: string | null,
          coverUrl?: string | null,
          userID: string,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        streamID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        productProductSpaceId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    streamStreamSpaceId: string,
  } | null,
};

export type OnDeleteStreamSubscription = {
  onDeleteStream?:  {
    __typename: "Stream",
    id: string,
    name: string,
    description?: string | null,
    coverUrl?: string | null,
    StreamSpace:  {
      __typename: "Space",
      id: string,
      name: string,
      description?: string | null,
      coverUrl?: string | null,
      userID: string,
      tags?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    tags?: Array< string | null > | null,
    Products?:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        description?: string | null,
        images?: Array< string | null > | null,
        price: string,
        tags?: Array< string | null > | null,
        ProductSpace?:  {
          __typename: "Space",
          id: string,
          name: string,
          description?: string | null,
          coverUrl?: string | null,
          userID: string,
          tags?: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
        } | null,
        streamID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        productProductSpaceId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    streamStreamSpaceId: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    avatarUrl?: string | null,
    isVerified: boolean,
    UserSpaces?:  {
      __typename: "ModelSpaceConnection",
      items:  Array< {
        __typename: "Space",
        id: string,
        name: string,
        description?: string | null,
        coverUrl?: string | null,
        userID: string,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    avatarUrl?: string | null,
    isVerified: boolean,
    UserSpaces?:  {
      __typename: "ModelSpaceConnection",
      items:  Array< {
        __typename: "Space",
        id: string,
        name: string,
        description?: string | null,
        coverUrl?: string | null,
        userID: string,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email: string,
    avatarUrl?: string | null,
    isVerified: boolean,
    UserSpaces?:  {
      __typename: "ModelSpaceConnection",
      items:  Array< {
        __typename: "Space",
        id: string,
        name: string,
        description?: string | null,
        coverUrl?: string | null,
        userID: string,
        tags?: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
