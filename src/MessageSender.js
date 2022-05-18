import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import './MessageSender.css'
import { useStateValue } from './StateProvider';
import db from './firebase'
import firebase from 'firebase/compat/app'

function MessageSender() {
    const [{ user }, dispatch ] = useStateValue();
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    // const [image, setImage] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })

        setInput("");
        setImageUrl("");
    };

    // const handleImages = (e) => {
    //     if(e.target.files[0]){
    //         setImage(e.target.files[0]);
    //     }
    //     setImageUrl(image);
    // }
    return (
        <div className="messageSender">
            <h4>Input the images</h4>
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input value = {input} onChange={(e) => setInput(e.target.value)}
                    className="messageSender__input" placeholder={`What's on your mind, ${user.displayName}?`}  />
                    <input value = {imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="image URL (Optional)"/>

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button> 
                </form> 
            </div>

            {/* <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style = {{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <input type="file" onChange={handleImages}/>
                    <PhotoLibraryIcon style = {{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style = {{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>*/}
        </div> 
    )
}

export default MessageSender
