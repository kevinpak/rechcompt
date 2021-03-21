import {useState, useEffect} from 'react'
import styles from './popocer.module.scss'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Button from '@material-ui/core/Button'


const PopoverBtn = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  //When clicked
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    //console.log(anchorEl)
  };

  //For close
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button aria-describedby={id} variant="contained"  onClick={handleClick} className={props.className??''}>
        {props.label??'Open Popover'}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
       
        
      >
       {props.content??'Popover Content'}
      </Popover>

    </>
  )
}
export default PopoverBtn