import React from 'react'
// import './SignUp.css'
import '../css/SignUp.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { margin } from '@mui/system';
import { red } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { UserSignUp } from '../../service/userservice';
import {withRouter, Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;


function SignUp(){

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 320px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 1024px)' })

    const[emailhelper,setemailhelper] = React.useState("")
    const [emailerror, setEmailerror] = React.useState(false)

    const[passhelper,setpasshelper] = React.useState("")
    const [passerror, setpasserror] = React.useState(false)

    const[firsthelper,setfirsthelper] = React.useState("")
    const [firsterror, setfirsterror] = React.useState(false)

    const[lasthelper,setlasthelper] = React.useState("")
    const [lasterror, setlasterror] = React.useState(false)

    const [emailobj, setEmailobj] = React.useState({email:"",password:"",firstName:"",lastName:"",service:"advance"})

    const takeEmail = (event) =>{
       setEmailobj({...emailobj, email:event.target.value}) ;
    }

    const takePassword =(event) =>{
        setEmailobj({...emailobj, password:event.target.value}) ;
     }

     const takefastname =(event) =>{
        setEmailobj({...emailobj, firstName:event.target.value}) ;
     }

     const takelastname =(event) =>{
        setEmailobj({...emailobj, lastName:event.target.value}) ;
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

        if(firstNameRegex.test(emailobj.firstName)){
            setfirsterror(false)
            setfirsthelper("")
        }
        else{
            setfirsterror(true)
            setfirsthelper("enter First name")
        }
        if(lastNameRegex.test(emailobj.lastName)){
            setlasterror(false)
            setlasthelper("")
        }
        else{
            setlasterror(true)
            setlasthelper("enter Last name")
        }
         if(emailRegex.test(emailobj.email) && passwordRegex.test(emailobj.password) && firstNameRegex.test(emailobj.firstName) && lastNameRegex.test(emailobj.lastName)) {

            UserSignUp(emailobj).then(function(response){
               console.log(response);
            }).catch(function(error){
                console.log(error)
            })

         }
     }
     var auth=localStorage.getItem("token")

    return(
        <div className="body">
             {
            auth ? <Redirect to="/Dashboard"/> : null
        }
        {isTablet &&

           <div className="maincontainer">
         <div className="gtitle">
         <span className='g a'>G</span>
         <span className='o a'>o</span>
         <span className='o1 a'>o</span>
         <span className='g a'>g</span>
         <span className='l a'>l</span>
         <span className='o a'>e</span>
    
         </div>
         <div className="createyr">
             <p>Create your Google Account</p>
         </div>
         <div className="paracont">
         <p>to continue to Gmail</p>
         </div>

         <div className="section1">
             <div className="sectioncont">
             <div className="email1">
            <TextField onChange={takefastname}  error={firsterror} helperText={firsthelper} id="demo-helper-text-misaligned-no-helper"  label="First name" size="small" style={{ width: "180px",margin:"10px" }} />
            <TextField onChange={takelastname}  error={lasterror} helperText={lasthelper} id="demo-helper-text-misaligned-no-helper" label="Last name" size="small" style={{ width: "180px",margin:"10px" }} />
            {/* <TextField id="outlined-basic" label="First name" variant="outlined" size="small"  style={{ width: "180px", margin:"10px" }} />
            <TextField id="outlined-basic" label="Last name" variant="outlined" size="small"  style={{ width: "180px",margin:"10px" }} /> */}
            {/* <TextField onChange={takeEmail}  error={emailerror} helperText={emailhelper} id="demo-helper-text-misaligned-no-helper" label="Email or Phone" style={{ width: "345px" }} /> */}
            </div>
            <div className="confirmemail">
            <TextField onChange={takeEmail}  error={emailerror} helperText={emailhelper} id="demo-helper-text-misaligned-no-helper" label="Username" size="small" style={{ width: "380px",marginLeft:"20px" }} />
            {/* <TextField id="outlined-basic" label="Username" variant="outlined" size="small"  style={{ width: "380px",marginLeft:"20px" }} /> */}
            </div>
            <div className="uselet">
                <p>You can use letters, numbers & periods</p>
            </div>
            <div className="paswd">
            <TextField onChange={takePassword }  error={passerror} helperText={passhelper} id="demo-helper-text-misaligned-no-helper" type="password" label="Password"  size="small" style={{ width: "180px",margin:"10px" }} />
            {/* <TextField id="outlined-basic" label="Password" variant="outlined" size="small"  style={{ width: "180px", margin:"10px" }} /> */}
            <TextField id="outlined-basic" label="Confirm" type="password" variant="outlined" size="small"  style={{ width: "180px",margin:"10px" }} />
            {/* <TextField onChange={takeEmail}  error={emailerror} helperText={emailhelper} id="demo-helper-text-misaligned-no-helper" label="Email or Phone" style={{ width: "345px" }} /> */}
            </div>
            <div className="morecharacter">
                <span>Use 8 or more characters with a mix of letters, numbers & symbols</span>
            </div>
            <div className="checkbox">
            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Show password" />
            </div>
            <div className="next">
                <Link to="/SignIn">
            <Button style={{textTransform: 'none', fontWeight: 'bolder', fontSize: '2.3vh'}} size="small">Sign in instead</Button>
            </Link>
            <Button onClick={onsubmit} variant="contained" size="medium">Next</Button>
            </div>

             </div>
             <div className="img1">
            <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"/>
            <p>One account. All of Google </p>
            <p>working for you.</p>
            </div>
         </div>
         
        </div>}

        {isTabletOrMobile && 
         <div className="maincontainer">
         <div className="gtitle">
         <span className='g a'>G</span>
         <span className='o a'>o</span>
         <span className='o1 a'>o</span>
         <span className='g a'>g</span>
         <span className='l a'>l</span>
         <span className='o a'>e</span>
        
         </div>
         <div className="createyr" style={{marginLeft:"0px",width:"250px"}}>
             <p style={{fontSize:"14px",width:"250px",marginLeft:"0px"}}>Create your Google Account </p>
         </div>
         <div className="email1">
            <TextField onChange={takefastname}  error={firsterror} helperText={firsthelper} id="demo-helper-text-misaligned-no-helper"  label="First name" size="small" style={{ width: "210px",margin:"5px" }} />
            <TextField onChange={takelastname}  error={lasterror} helperText={lasthelper} id="demo-helper-text-misaligned-no-helper" label="Last name" size="small" style={{ width: "210px",margin:"5px" }} />
            <TextField onChange={takeEmail}  error={emailerror} helperText={emailhelper} id="demo-helper-text-misaligned-no-helper" label="Username" size="small" style={{ width: "210px",margin:"5px" }} />
            </div>
            <div className="uselet">
                <p>You can use letters, numbers & periods</p>
            </div>
            <div className="paswd">
            <TextField onChange={takePassword }  error={passerror} helperText={passhelper} id="demo-helper-text-misaligned-no-helper" type="password" label="Password"  size="small" style={{ width: "210px",margin:"5px" }} />
            <TextField id="outlined-basic" label="Confirm" type="password" variant="outlined" size="small"  style={{ width: "210px",margin:"5px" }} />
            </div>
            <div className="morecharacter">
                <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
            </div>
            <div className="checkbox">
            <FormControlLabel control={<Checkbox defaultUnChecked />} label="Show password"/>
            </div>
            <div className="next1">
                <Link to="/SignIn">
            <Button style={{textTransform: 'none', fontWeight: 'bolder', fontSize: '2.3vh'}} size="small">Sign in instead</Button>
            </Link>
            <Button onClick={onsubmit} variant="contained" size="small">Next</Button>
            </div>
         </div>
        }
        </div>
       
    )
}

export default SignUp;