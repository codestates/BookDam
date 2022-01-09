import defaultUserImage from '../assets/images/defaultUserImage.png';

export const data = {
    "message": "success",
    "userInfo": {
        "id": 3,
        "userId": "test3",
        "userNickName": "test3",
        "userImage": defaultUserImage
    },
    "follow": {
        "following": 2,
        "follower": 2
    },
    "articleData": [
        {
            "id": 7,
            "user_Id": 3,
            "book_Title": "west rules for now",
            "book_Author": "sangkwon",
            "book_Thumbnail": "image path",
            "book_Publisher": "ttang",
            "sentence": "i dont know what you mean",
            "comment": "me too",
            "createdAt": "2022-1-8",
            "User.userId": "test3",
            "User.userNickName": "test3",
            "User.userImage": defaultUserImage
        },
        {
            "id": 3,
            "user_Id": 3,
            "book_Title": "신데렐라",
            "book_Author": "미상",
            "book_Thumbnail": "blahblahblahblah",
            "book_Publisher": "미상",
            "sentence": "blahblahblahblah",
            "comment": "blahblahblahblah",
            "createdAt": "2022-01-01",
            "User.userId": "test3",
            "User.userNickName": "test3",
            "User.userImage": defaultUserImage
        }
    ]
}
