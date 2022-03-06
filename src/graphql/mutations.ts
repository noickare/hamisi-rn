/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createSpace = /* GraphQL */ `
  mutation CreateSpace(
    $input: CreateSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    createSpace(input: $input, condition: $condition) {
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
export const updateSpace = /* GraphQL */ `
  mutation UpdateSpace(
    $input: UpdateSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    updateSpace(input: $input, condition: $condition) {
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
export const deleteSpace = /* GraphQL */ `
  mutation DeleteSpace(
    $input: DeleteSpaceInput!
    $condition: ModelSpaceConditionInput
  ) {
    deleteSpace(input: $input, condition: $condition) {
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
export const createStream = /* GraphQL */ `
  mutation CreateStream(
    $input: CreateStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    createStream(input: $input, condition: $condition) {
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
export const updateStream = /* GraphQL */ `
  mutation UpdateStream(
    $input: UpdateStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    updateStream(input: $input, condition: $condition) {
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
export const deleteStream = /* GraphQL */ `
  mutation DeleteStream(
    $input: DeleteStreamInput!
    $condition: ModelStreamConditionInput
  ) {
    deleteStream(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
