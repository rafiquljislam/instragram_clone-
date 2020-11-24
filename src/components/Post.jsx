import { Avatar, Button, Input } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import './post.css';
import firebase from 'firebase'

const Post = (props) => {

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    useEffect(() => {
        let unsubscribe;
        if (props.postId){
           unsubscribe = db
            .collection('posts')
            .doc(props.postId)
            .collection('comment')
            .orderBy('timestamp','docs')
            .onSnapshot((snapshot)=>{
                setComments(snapshot.docs.map((doc)=>doc.data()));
            });
        }
        return () => {
            unsubscribe();
        }
    }, [props.postId]);

    const postComment =(e)=>{
        e.preventDefault();
        db.collection('posts').doc(props.postId).collection('comment').add({
            text:comment,
            username:props.user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })

    }

    return (
        <div className="post">
            <div className="post__header">
            <Avatar
                className="post__avatar"
                alt={props.username}
                src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                />
            <h3>Username</h3>
        </div>

            <img className="post__image" src={props.image} alt="avatorImage"/>
            <h4 className="post__text"> <strong>{props.username}</strong> {props.caption} </h4>



            <div className="post__comments">
                {
                    comments.map((comment)=>(
                        <p key={comment.text}>
                            <b>{comment.username}</b>{comment.text}
                        </p>
                    ))
                }
            </div>

            {props.user&&(
                <form className="post_commentBox">
                <Input 
                    className="post__input"
                    type="text"
                    placeholder="Add a comment ..."
                    value={comment}
                    onChange={(e)=>setComment(e.target.value)}
                />   
            <Button 
                className="post__button"
                disabled={!comment}
                type="submit"
                onClick={postComment}
            >
                Post
            </Button>     
            </form> 
            )} 

      </div>
    )
}

export default Post
