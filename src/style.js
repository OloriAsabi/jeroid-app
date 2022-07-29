import { alpha, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    right:{
        [theme.breakpoints.down("sm")]:{
            display: "none"
        }
    },
      button: {
          backgroundColor: theme.palette.primary.main, 
          color: "black"
        },
        home:{
            background: 'linear-gradient(to right bottom, 115.91deg, #0B2368 28.13%, #0094EB 145.53%)',
        }
    }))

export default useStyles;