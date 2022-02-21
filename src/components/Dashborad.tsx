import React,{useState} from 'react'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alrt from './Alrt'

function Dashborad() {
 
  return (
    <div>
          {
          //   <Stack sx={{ width: '100%' }} spacing={2}>
          //   <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
          //   {/* <Alert
          //     action={
          //       <Button color="inherit" size="small">
          //         UNDO
          //       </Button>
          //     }
          //   >
          //     This is a success alert — check it out!
          //   </Alert> */}
          // </Stack>
          alert("Loged in Successfully")
      }
      {/* {<Alrt alrt={alrt}/>} */}
      <h2>You are successfully logedIn Welcome to Dashboard</h2>
      </div>
  )
}

export default Dashborad