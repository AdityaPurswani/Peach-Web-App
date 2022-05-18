import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import { ExpandMoreOutlined } from "@mui/icons-material";
// import Comment from "./Comment";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase/compat/app";

function Post({ postId, profilePic, image, username, timestamp, message }) {
  const [like, setLike] = useState(0);
  const [{ user }, dispatch] = useStateValue();
  const [isCommentBox, setIsCommentBox] = useState(false);
  const [dislike, setDislike] = useState(0);
  const [comment, setComment] = useState("");
  const [load, setLoad] = useState(false);
  const [commentsBox, setCommentsBox] = useState([]);

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setCommentsBox(snapshot.docs.map((doc) => doc.data()));
        });
      return () => {
        unsubscribe();
      };
    }
  }, [postId]);

  const postComment = (e) => {
    e.preventDefault();
    console.log(comment);
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //   console.log(db.collection("posts").doc("xsrkiAH56UAzqUE9fKDd").collection("comments"));
    setComment("");
  };

  const handleLike = () => {
    setLike(like + 1);
  };

  const handleDislikes = () => {
    setDislike(dislike + 1);
  };

  const formLoad = (e) => {
    e.preventDefault();
    console.log("Button Clicked!!");
    setIsCommentBox(!isCommentBox);
  };

  const loadComments = (e) => {
      e.preventDefault();
      console.log("Loading comments...");
      setLoad(!load)
  }
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon onClick={handleLike} />
          <p>{like}</p>
        </div>
        <div className="post__option">
          <ThumbDownIcon onClick={handleDislikes} />
          <p>{dislike}</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon onClick={formLoad} />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
      <form> 
          <button onClick={loadComments} className="btn__comments">
              View Comments
          </button>
      </form>
      {load && (<div className="post__comments">
        {commentsBox.map((comment) => (
          <p className="post__comment__content">
            <strong>{comment.username}</strong> {comment.text}
          </p>
        ))}
      </div>)}
      
      {isCommentBox && (<form className="post__commentsBox">
        <input
          className="post__input"
          type="text"
          value={comment}
          placeholder="Add your comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="post__button"
          disabled={!comment}
          onClick={postComment}
          type="submit"
        >
          Post
        </button>
      </form>)}
    </div>
  );
}
export default Post;
