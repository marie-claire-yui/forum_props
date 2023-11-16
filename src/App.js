import React from 'react';
import {comments} from './commentData'
import Card from './Card'

function App(){
  return(
    <div>
   { comments.map(element => 
    <Card commentObject = {element}/>
   )
    }
    </div>
  )
}

export default App;
