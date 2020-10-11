import React from 'react';
import {Container,Segment,Menu, Checkbox} from "semantic-ui-react";

const Header = (props)=> (
    <Segment  >
    <Container>    
    <Menu secondary='true'>
      <Menu.Item>
        <h1>New Requester Task</h1>
      </Menu.Item>
      <Menu.Item>
        <h3 className='h3text'>Worker Task</h3>
      </Menu.Item>
    </Menu>  

    <div class="ui pointing menu">
        <div class="left menu">
          <div class="item">
            <h2>Select Task Type:</h2>
          </div>
        </div>
       
        <div  class="item right">
        <Checkbox id='Choice' name='selectTask'   value='Yes' onChange={props.Require} value="Choice Task" />Choice Task</div>
        <div  class="item ">
        <Checkbox id='Decision' name='selectTask'   value='Yes' onChange={props.Require} value="Decision-Making Task" />Decision-Making Task</div>
        <div  class="item ">
        <Checkbox id='Sentence' name='selectTask'   value='Yes' onChange={props.Require} value="Sentence-Level Task" />Sentence-Level Task</div>
        
      </div>

      </Container>
    </Segment>
)

export default Header;
