import { style } from '@mui/system';
import React from 'react'
// import './header.css'
import './css/header.css';
// import MediaQuery from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import {connect} from 'react-redux';

// import '../assests/refresh.png'



function Header(props) {
    console.log(props)
    const drawer = () => {
        console.log("helloo");
        props.Drawerlist(true);
        console.log("hader",props);
     }

     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 2024px)' })
    //  const style = {
  
    //     // Adding media querry..
    //     '@media (max-width: 1024px)': {
    //       border:'2px solid red',
    //       display: 'none',
    //     },
    //   };

    return(

        <div className="Mainheader">
            <div className="drawer1">
            <button onClick={drawer}>
            {/* <button> */}
            <svg focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
            </button>
            </div>
            <div className="keep">
            <img className="keepimg" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"></img>
            <span className="keepcont">{props.title}</span>
            </div>
            <div className="search">
                <div className="searchbtn">
                <button className="btn">
                <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg>
                </button>
                </div>
                
                <div className="searchtxt">
                {/* <input type="text" className="searchf" placeholder="Search.." name="search"/> */}
                {/* <input className="searchf"  placeholder="Search"  defaultValue=" "  type="text"></input> */}
               <input className="searchf"  placeholder="Search"  defaultValue=" "  type="text"/>
                </div>
                
                <div className="delte">
                    <button className="delbtn">
                    <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                    </button>
                </div>
            </div>
             <div className="refresh">
                 {/* <img src="http://localhost:3000/static/media/refresh.561f21d3.svg"/> */}
                 </div>
                 <div className="listview">
                 {/* <img src="http://localhost:3000/static/media/refresh.561f21d3.svg"/> */}
                 </div>
                 <div className="Settings">
                 {/* <img src="http://localhost:3000/static/media/refresh.561f21d3.svg"/> */}
                 </div>           
           <div className="more">
           <a class="gb_C" aria-label="Google apps" href="https://www.google.co.in/intl/en/about/products" aria-expanded="false" role="button" tabindex="0"><svg class="gb_Pe" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg></a>
           </div>
        </div>
        
    );
}
const mapStateToProps = (state) => {
    console.log(state)
	return {
		title: state.drawerReducer.title,
	};
};


//export default Header;
export default connect(mapStateToProps)(Header);