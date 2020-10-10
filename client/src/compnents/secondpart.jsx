import React from 'react'
import {Container,Segment,Menu} from "semantic-ui-react";


const secondpart=(props)=> { 
    return ( <Segment  >
        <Container> 
        <Menu secondary='true' >
        <Menu.Item>
          <h1>Describe your task to Workers</h1>
        </Menu.Item>
      </Menu>    
  
          <Menu.Item >
              <h3>Title</h3> 
              <div class="ui big icon input">
              <input type="text" placeholder="enter your task title" type='text' name='TaskTitle' onChange={props.TitleChange}/>
              </div>
          </Menu.Item>
          <Menu.Item position="center">
              <h3>Description</h3>
              <div class="ui big icon input">
              <input type="text" placeholder="enter your task Description" type='text' name='TaskDescription' onChange={props.DescriptionChange}/>
              </div>
          </Menu.Item>
          <Menu.Item >
              <h3>Expiry date</h3>
              <div class="ui big icon input">
              <input type="text" placeholder="enter your task Date" type='date' name='ExpiryDate' onChange={props.DateChange}/>
              </div>
          </Menu.Item>
          </Container>
    </Segment>
    )
}

export default secondpart;