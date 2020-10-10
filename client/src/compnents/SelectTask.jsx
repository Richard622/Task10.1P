import React, { useState } from 'react';
import ChoiceTask from './ChoiceTask'
import DecisionTask from './DecisionTask'
import SentenceTask from './SentenceTask'
import { Form, Segment, Container ,Menu,} from 'semantic-ui-react'

const CreationForm = (props) => {
    const [type, setType] = useState(1);
    const [form, setForm] = useState({

    //   task: {
    //     type: 1,
    //     question: "",
    //     option1: "",
    //     option2: "",
    //     option3: "",
    //     option4: "",
    //   },

    });

    return (
      
         
        <Container>
        <Segment>
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
        <Form.Radio id='Choice' name='setTask'   value='Yes' value="Choice Task" label='Choice Task'
             value={1}
            checked={type === 1}
            onChange={(e, { value }) => {
              setType(value)
              setForm({...form, task:{type: value,option1: "",option2: "",option3: "",}  })  }}

        />Choice Task</div>
        <div  class="item ">
        <Form.Radio id='Decision' name='setTask'   value='Yes' onChange={props.selectTask} value="Decision-Making Task"  label='Decision-Making Task'
            value={2}
            checked={type === 2}
            onChange={(e, { value }) => {
              setType(value)
              setForm({  ...form, task:{ type: value, question: "" }})}}
  
        />Decision-Making Task</div>
        <div  class="item ">
        <Form.Radio id='Sentence' name='setTask'   value='Yes' onChange={props.selectTask} value="Sentence-Level Task" label='Sentence-Level Task'
            value={3}
            checked={type === 3}
            onChange={(e, { value }) => {
              setType(value)
              setForm({ ...form, task:     { type: value, question: "" }    })  }}

        />Sentence-Level Task</div>
        
      </div>
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

        <Menu secondary='true' >
          <Menu.Item>
            <h1>Setting up your task</h1>
          </Menu.Item> 
        </Menu> 
          {
            type === 1 ?
              <ChoiceTask /> : type === 2 ?
                <DecisionTask /> :
                <SentenceTask />
          }
  
          <h1 title="Worker Requirement"></h1>
         
        </Segment>
        </Container>
        
    
    )
  }


  
export default CreationForm;