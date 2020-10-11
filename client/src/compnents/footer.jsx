import React from 'react'
import {Container,Segment,Menu} from "semantic-ui-react";


const footer=(props)=> (
    <Segment >
      <Container  style= {{background:' rgb(143, 178, 224)'}}> 
        <Menu secondary='true' >
         <Menu.Item>
            <h1  style= {{color:'rgb(104, 104, 104)'}}>Workers Requirement</h1>
        </Menu.Item>
         </Menu>    
  
        <div class="ui form">
          <div class="inline fields">
            <h3  style= {{color:' rgb(104, 104, 104)'}}>Require Master Workers</h3><div class="field"></div>
            
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio"  name='isRequire'  text2='Yes' value='Yes' onChange={props.Require}
                />
                <label >Yes</label>
              </div>
            </div>
 {/* value={props.value} */}
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio"   name='isRequire'  text2='No' value='No' onChange={props.Require} />
                <label>No</label>
              </div>
            </div>
            
          </div>
        </div>

        <div class="ui divider"></div>

        <Menu.Item>
        <div class="ui labeled input">
          <div class="ui label"><h3  style= {{color:'rgb(104, 104, 104)'}}>Reward per Response</h3> </div>
          <input type="text" placeholder="enter Reward per Response" name='Reward' onChange={props.Reward}/>
        </div>
        </Menu.Item>
        <div class="ui divider"></div>
        <Menu.Item>
        <div class="ui labeled input">
          <div class="ui label"><h3  style= {{color:' rgb(104, 104, 104)'}}>Number of Workers</h3> </div>
          <input type="text" placeholder="enter Number of Workers" name='Numbers' onChange={props.Numbers}/>
        </div>
        </Menu.Item>

        </Container>
    </Segment>
)


export default footer;