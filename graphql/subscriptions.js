/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      userName
      email
      profilePicture
      posts {
        items {
          id
          video
          description
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      userName
      email
      profilePicture
      posts {
        items {
          id
          video
          description
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      userName
      email
      profilePicture
      posts {
        items {
          id
          video
          description
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      video
      description
      userID
      user {
        id
        userName
        email
        profilePicture
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      songID
      song {
        id
        songName
        image
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      video
      description
      userID
      user {
        id
        userName
        email
        profilePicture
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      songID
      song {
        id
        songName
        image
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      video
      description
      userID
      user {
        id
        userName
        email
        profilePicture
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      songID
      song {
        id
        songName
        image
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
      id
      songName
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      songName
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      songName
      image
      createdAt
      updatedAt
    }
  }
`;
