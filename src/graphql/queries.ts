/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      description
      images
      price
      tags
      ProductSpace {
        id
        name
        description
        coverUrl
        userID
        tags
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      streamID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productProductSpaceId
      owner
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        images
        price
        tags
        ProductSpace {
          id
          name
          description
          coverUrl
          userID
          tags
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        streamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        productProductSpaceId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        images
        price
        tags
        ProductSpace {
          id
          name
          description
          coverUrl
          userID
          tags
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        streamID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        productProductSpaceId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getSpace = /* GraphQL */ `
  query GetSpace($id: ID!) {
    getSpace(id: $id) {
      id
      name
      description
      coverUrl
      userID
      tags
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listSpaces = /* GraphQL */ `
  query ListSpaces(
    $filter: ModelSpaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        coverUrl
        userID
        tags
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSpaces = /* GraphQL */ `
  query SyncSpaces(
    $filter: ModelSpaceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSpaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        coverUrl
        userID
        tags
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getStream = /* GraphQL */ `
  query GetStream($id: ID!) {
    getStream(id: $id) {
      id
      name
      description
      coverUrl
      StreamSpace {
        id
        name
        description
        coverUrl
        userID
        tags
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      tags
      Products {
        items {
          id
          name
          description
          images
          price
          tags
          ProductSpace {
            id
            name
            description
            coverUrl
            userID
            tags
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          streamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          productProductSpaceId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      streamStreamSpaceId
      owner
    }
  }
`;
export const listStreams = /* GraphQL */ `
  query ListStreams(
    $filter: ModelStreamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStreams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        coverUrl
        StreamSpace {
          id
          name
          description
          coverUrl
          userID
          tags
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        tags
        Products {
          items {
            id
            name
            description
            images
            price
            tags
            streamID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            productProductSpaceId
            owner
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        streamStreamSpaceId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStreams = /* GraphQL */ `
  query SyncStreams(
    $filter: ModelStreamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStreams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        coverUrl
        StreamSpace {
          id
          name
          description
          coverUrl
          userID
          tags
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        tags
        Products {
          items {
            id
            name
            description
            images
            price
            tags
            streamID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            productProductSpaceId
            owner
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        streamStreamSpaceId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      avatarUrl
      UserSpaces {
        items {
          id
          name
          description
          coverUrl
          userID
          tags
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        avatarUrl
        UserSpaces {
          items {
            id
            name
            description
            coverUrl
            userID
            tags
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        email
        avatarUrl
        UserSpaces {
          items {
            id
            name
            description
            coverUrl
            userID
            tags
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
