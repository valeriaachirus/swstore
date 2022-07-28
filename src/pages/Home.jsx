import { styled } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { Navigate, useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    height: '85vh',
    alignItems: 'center',
    position: 'relative',
  },
  img:{
    width: '100%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  button:{
    position:'absolute',
    bottom: '131px',
    left: '0',
    right: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '127px',
    backgroundColor: '#fee6e3',
    touchAction: 'manipulation',
    "&::after": {
      backgroundColor: '#111',
      borderRadius: '8px',
      display: 'block',
      height: '48px',
      left: '0',
      width: '100%',
      position: 'absolute',
      top: -'2px',
      transform: 'translate(8px, 8px)',
      transition: 'transform .2s ease-out',
      zIndex: '-1',
    },
    "&:hover::after":{
      transform: 'translate(0, 0)',
    },
    '&:active':{
      backgroundColor: '#ffdeda',
      outline: '0',
    
    },
    '&:hover': {
      outline: '0',
    },
  
  }
  
  
});
export function Home() {
  const classes = useStyles();
  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/store');
  } 
  return (
    <div className={classes.container}>
      <img className={classes.img} src="/public/imgs/home.webp" width="500px" height="500px" />   
      <button className={classes.button} onClick={routeChange}>SHOP NOW</button>
    </div>
  )
}

