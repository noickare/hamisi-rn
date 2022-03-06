/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
      }
      streamID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productProductSpaceId
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
      }
      streamID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productProductSpaceId
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
      }
      streamID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productProductSpaceId
    }
  }
`;
export const onCreateSpace = /* GraphQL */ `
  subscription OnCreateSpace {
    onCreateSpace {
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
    }
  }
`;
export const onUpdateSpace = /* GraphQL */ `
  subscription OnUpdateSpace {
    onUpdateSpace {
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
    }
  }
`;
export const onDeleteSpace = /* GraphQL */ `
  subscription OnDeleteSpace {
    onDeleteSpace {
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
    }
  }
`;
export const onCreateStream = /* GraphQL */ `
  subscription OnCreateStream {
    onCreateStream {
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
          }
          streamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          productProductSpaceId
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
    }
  }
`;
export const onUpdateStream = /* GraphQL */ `
  subscription OnUpdateStream {
    onUpdateStream {
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
          }
          streamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          productProductSpaceId
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
    }
  }
`;
export const onDeleteStream = /* GraphQL */ `
  subscription OnDeleteStream {
    onDeleteStream {
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
          }
          streamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          productProductSpaceId
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
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      email
      avatarUrl
      isVerified
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      email
      avatarUrl
      isVerified
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      email
      avatarUrl
      isVerified
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
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
