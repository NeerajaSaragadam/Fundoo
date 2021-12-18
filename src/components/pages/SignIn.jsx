import React from 'react'
import '../css/SignIn.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { UserSignIn} from '../../service/userservice';
import {withRouter, Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignIn() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 320px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 1024px)' })

    const[emailhelper,setemailhelper] = React.useState("")
    const [emailerror, setEmailerror] = React.useState(false)

    const[passhelper,setpasshelper] = React.useState("")
    const [passerror, setpasserror] = React.useState(false)
    const [emailobj, setEmailobj] = React.useState({email:"",password:""})

    const takeEmail = (event) =>{
       setEmailobj({...emailobj, email:event.target.value}) ;
    }

    const takePassword =(event) =>{
        setEmailobj({...emailobj, password:event.target.value}) ;
     }

     const onsubmit =()=>{
        if(emailRegex.test(emailobj.email)){
            setEmailerror(false)
            setemailhelper("")
        }
        else{
           setEmailerror(true)
           setemailhelper("enter correct email")
        }
        if(passwordRegex.test(emailobj.password)){
            setpasserror(false)
            setpasshelper("")
        }
        else{
            setpasserror(true)
            setpasshelper("enter correct Password")
        }

        if(emailRegex.test(emailobj.email) && passwordRegex.test(emailobj.password)) {

            UserSignIn(emailobj).then(function(response){
               console.log(response);
               localStorage.setItem("token",response.data.id)
              
                
            }).catch(function(error){
                console.log(error)
            })

         }
    }

    var auth=localStorage.getItem("token")

    return(
       
        <div className="main">
             {
            auth ? <Redirect to="/Dashboard"/> : null
        }
            <div className="container">
            <div className="title">
            <span className='g a'>F</span>
                        <span className='o a'>u</span>
                        <span className='o1 a'>n</span>
                        <span className='g a'>d</span>
                        <span className='l a'>o</span>
                        <span className='o a'>o</span>
            </div>
            <div className="sign-in"><h2>Sign in</h2></div>
            <div className='use'>Use your google Account</div>

            <div className="email">
            {/* <TextField id="outlined-basic" label="Email or Phone" variant="outlined" size="medium"  style={{ width: "345px" }} /> */}
            {isTablet &&
            <TextField onChange={takeEmail}  error={emailerror} helperText={emailhelper} id="demo-helper-text-misaligned-no-helper" label="Email or Phone" style={{ width: "345px" }} />
            }
           {
               isTabletOrMobile && <TextField onChange={takeEmail}  error={emailerror} helperText={emailhelper} id="demo-helper-text-misaligned-no-helper" size="small" label="Email or Phone" style={{ width: "225px",marginLeft:'15px',marginRight:'550px',marginTop:'10px'}} />
           }
            </div>
            {isTablet &&
            <div className="forget">
            <Button style={{ textTransform: 'none', fontWeight: '500', fontSize: '2.3vh', backgroundColor: "#fff", paddingLeft:'0%'}} size="small">Forgot email?</Button>
            </div>
              }
              {isTabletOrMobile &&
            <div className="forget">
            <Button style={{ textTransform: 'none', fontWeight: '200', fontSize: '2.3vh', backgroundColor: "#fff", margin:'5px',paddingLeft:'0%',marginTop:"10px"}} size="small">Forgot email?</Button>
            </div>
             }
              {isTablet &&
            <div className="password">
            {/* <TextField id="outlined-basic" onChange={takePassword} label="Password" variant="outlined" size="medium"   style={{ width: "345px" }} /> */}
            <TextField onChange={takePassword }  error={passerror} helperText={passhelper} id="demo-helper-text-misaligned-no-helper" label="Password" type="password" style={{ width: "345px" }} />
            </div>}
            {isTabletOrMobile &&
            <div className="password">
            {/* <TextField id="outlined-basic" onChange={takePassword} label="Password" variant="outlined" size="medium"   style={{ width: "345px" }} /> */}
            <TextField onChange={takePassword }  error={passerror} helperText={passhelper} id="demo-helper-text-misaligned-no-helper" label="Password" size="small" type="password" style={{width: "225px",marginLeft:'15px',marginRight:'550px',marginTop:"10px" }} />
            </div>}
            {isTablet &&
            <div className="forgetpass">
            <Button style={{ textTransform: 'none', fontWeight: '500', fontSize: '2.3vh', backgroundColor: "#fff", paddingLeft:'0%'}} size="small">Forgot Password?</Button>
            </div>}
            {isTabletOrMobile &&
            <div className="forgetpass">
            <Button style={{ textTransform: 'none', fontWeight: '200', fontSize: '2.2vh', backgroundColor: "#fff", paddingLeft:'0%',marginTop:"10px"}} size="small">Forgot Password?</Button>
            </div>}
            {isTablet &&
            <div className="notyours">
            <p className="helper">Not your computer? Use Guest mode to sign in privately.</p>
            </div>}
            {isTabletOrMobile &&
            <div className="notyours">
            <p className="helper">Not your computer? Use Guest mode to sign in privately.<span style={{color:'blue'}}>Learnmore</span></p>
            </div>}
            
            {isTablet &&
            <div className="learnmore">
            <Button style={{ textTransform: 'none', fontWeight: '500', fontSize: '2.3vh', backgroundColor: "#fff", padding:'0%'}} size="small">Learn more</Button>
            </div>}

            {isTablet &&
            <div className="next">
                <Link to="/">
            <Button style={{textTransform: 'none', fontWeight: 'bolder', fontSize: '2.3vh'}} size="small">Create account</Button>
            </Link>
            <Link to="/Dashboard">
            <Button onClick={onsubmit} variant="contained" size="medium">Next</Button>
            </Link>
            </div>}

            {isTabletOrMobile &&
            <div className="next">
                <Link to="/">
            <Button className="createac" style={{textTransform: 'none', fontWeight: 'bolder', fontSize: '2.0vh',marginLeft:"200px"}} size="small">Create account</Button>
            </Link>
            <Link to="/Dashboard">
            <Button onClick={onsubmit} variant="contained" size="small"style={{marginTop:"28px"}}>Next</Button>
            </Link>
            </div>}
            

        </div>
        </div>
        
    );
}

export default SignIn;