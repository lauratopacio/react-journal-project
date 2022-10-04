import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
     {/* <Typography >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur accusantium perspiciatis nostrum, suscipit vero quibusdam fugiat quo voluptatum eius quaerat voluptatem omnis molestiae. Corrupti, nisi quae quos quisquam repellat temporibus?</Typography> */} 
      {/* <NothingSelectedView />  */}
       <NoteView />

      <IconButton size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover':{ backgroundColor:'error.main', opacity:'0.9'},
          position: 'fixed',
          right:50,
          bottom:50
        }}
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </JournalLayout>
    
  )
}
