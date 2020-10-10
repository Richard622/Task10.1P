import React from 'react'
import {Menu, Input} from "semantic-ui-react";


const ChoiceTask = (props) => {
    return <>
    <Menu>
        <Menu.Item>
          <label onChange={props.DateChange}>Option 1</label>
          <Input placeholder='' />
        </Menu.Item>
        <Menu.Item>
          <label onChange={props.DateChange}>Option 2</label>
          <Input placeholder='' />
        </Menu.Item>
        <Menu.Item>
          <label onChange={props.DateChange}>Option 3</label>
          <Input placeholder='' />
        </Menu.Item>
    </Menu>
    </>
  }
  

    
export default ChoiceTask;