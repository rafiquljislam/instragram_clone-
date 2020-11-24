import { Button, Input, Modal } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post';
import { db,auth }  from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import ImageUpload from './components/ImageUpload';
import InstagramEmbed from 'react-instagram-embed';



function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function App() {

  const classes = useStyles(  );
  const [modalStyle] = useState(getModalStyle);

    const [post, setpost] = useState([])
    const [open, setopen] = useState(false)
    const [openSignin, setopenSignin] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [username, setusername] = useState('')
    const [user, setUser] = useState(null)

    useEffect(()=>{
     const  unsubscribe = auth.onAuthStateChanged((authUser)=>{
        if(authUser){
        console.log(authUser);
        setUser(authUser);

        }else{
          setUser(null);
        }
      })
      return () => {
        unsubscribe()
      }
    })

    useEffect(() => {
      db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
        setpost(snapshot.docs.map(doc =>(
         { 
           id: doc.id,
           post:doc.data(),
          }
          )));
      })
    }, [])

    const signup=(event)=>{
      event.preventDefault();
      auth.createUserWithEmailAndPassword(email,password)
      .then((authUser)=>{
        return authUser.user.updateProfile({
          displayName:username
        })
      })
      .catch((e)=>alert(e.message));
    }
    const signin =(event)=>{
      event.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
      .catch((e)=>alert(e.message))
      setopenSignin(false);
    }

  return (
    <div className="app">


    <Modal 
      open={open}
      onClose={()=>setopen(false)}
    >
      <div style={modalStyle} className={classes.paper}>
            <form className="app__signup">
        <center>
        <img className="app_headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instragramImage" />
        </center>
        <Input 
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e)=>setusername(e.target.value)}
        />
        <Input 
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        <Input 
          placeholder="Password"
          type="text"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          />
             <Button onClick={signup}>Sign Up</Button>
                  </form>
      </div>
    </Modal>

    <Modal 
      open={openSignin}
      onClose={()=>setopenSignin(false)}
    >
      <div style={modalStyle} className={classes.paper}>
            <form className="app__signup">
        <center>
        <img className="app_headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instragramImage" />
        </center>
        <Input 
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        <Input 
          placeholder="Password"
          type="text"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          />
             <Button onClick={signin}>Sign In</Button>
                  </form>
      </div>
    </Modal>


     <div className="app_header">
      <div className="app__image">
        <img className="app_headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instragramImage" />
      </div>
      {user?
        <Button onClick={()=>auth.signOut() }>LogOut</Button>
    :  
    <div className="app__loginContainer">
      <Button onClick={()=>setopenSignin(true)}>Sign In</Button>
      <Button onClick={()=>setopen(true)}>SignUp</Button>
    </div>
    }
      </div>




    <div className="app_posts">
      <div className="app__postLeft">
      {
        post.map(({id,post})=>(
          <Post
          key={id}
          postId={id}
          user={user}
          username={post.username}
          caption={post.caption}
          image={post.imageUrl}

          />
        ))
      }
      </div>
    <div className="app__postRight">
      <InstagramEmbed
          url='https://www.instagram.com/p/B_uf9dmAGPw/'
          clientAccessToken='123|456'
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis facere autem odio, sed tempora assumenda eius, at consequuntur repudiandae ipsam accusantium inventore voluptatem excepturi magnam! Quisquam itaque dolorem consectetur tempore accusantium id cum atque aliquam quo mollitia cumque nobis ipsa, sit facilis necessitatibus! Cumque, amet quaerat numquam quod beatae rem! In saepe qui molestias nemo rem maiores iste, numquam voluptates dolorum. Cupiditate perferendis tenetur sit hic. Aut, quisquam! Dolor cum odio voluptatum, repellendus aut doloremque quibusdam? Omnis vitae unde quas eaque voluptatem quo quam quisquam recusandae aliquam, debitis tenetur praesentium similique temporibus facilis, repudiandae obcaecati quos autem! Maxime tempore deleniti laborum, recusandae corrupti repudiandae asperiores. Expedita doloremque alias, veritatis maxime exercitationem cum ratione pariatur reprehenderit deleniti eligendi autem corrupti animi nostrum architecto eos ipsum ab quidem consequuntur ipsa fuga voluptatibus? Nesciunt necessitatibus id exercitationem suscipit facere eligendi iure molestias, soluta quo quae ducimus sapiente atque minima voluptatum, sint distinctio nobis. Quas unde molestiae cupiditate ipsam soluta non, doloremque qui expedita obcaecati earum repellat laborum eligendi. Est similique aperiam pariatur doloremque. Voluptas aliquam tenetur fugit, eius sequi doloremque quasi officiis consectetur totam perspiciatis sint a ipsam est minima suscipit optio maiores nostrum ipsum labore animi assumenda. Repellendus neque repellat autem nobis!
        </div>
  </div>
      </div>


    {
      user?.displayName ?
      (<ImageUpload username={user.displayName}/>)
      :
      (<h3>Sorry you need to login to upload</h3>)
    }
    </div>
  );
}

export default App;
