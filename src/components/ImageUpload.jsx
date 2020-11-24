import { Button, Input } from '@material-ui/core'
import React, { useState } from 'react'
import { db, storage } from '../firebase';
import firebase from 'firebase'
import './ImageUpload.css';


const ImageUpload = (props) => {

    const [caption, setCaption] = useState('');
    const [progress, setprogress] = useState(0);
    const [image, setImage] = useState(null);

    
    const handelChange=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
    const handelUplode=()=>{
        const uploadTask  = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            (snapshot)=>{
                const progress = Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                );
                setprogress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            ()=>{
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url=>{
                    db.collection("posts").add({
                        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                        caption:caption,
                        imageUrl:url,
                        username:props.username,
                    });
                    setprogress(0);
                    setCaption("");
                    setImage(null);
                });
            }
        )
    }


    return (
        <div className="imageUplode">
            <progress className="imageUplode__progressbar" value={progress} max="100" />
            <Input
             type="text"
            placeholder="Enter a caption..."
            value={caption}
            onChange={(e)=>setCaption(e.target.value)}
             />
            <Input 
            type="file"
            onChange={handelChange}
            />
            <Button onClick={handelUplode} >Uplode</Button>
        </div>
    )
}

export default ImageUpload
