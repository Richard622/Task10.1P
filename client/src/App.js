import React, {useState} from 'react';
import Footer from './compnents/footer.jsx';
import Header from './compnents/Header.jsx';
import '../node_modules/semantic-ui-css/semantic.min.css'
import {Menu, Button, Form,Input,Segment} from "semantic-ui-react";
import Secondpart from "./compnents/secondpart.jsx"
import SelectTask from "./compnents/SelectTask.jsx"


function App() {

    const[contact,setInput] = useState({
        TaskTitle:'',
        TaskDescription:'',
        ExpiryDate:'',
        setTask:"",
        isRequire:'',
        Reward:'',
        Numbers:''
    })
  
    const handleSubmit = () =>{
      
      fetch('http://localhost:8000/register',{
        method :'post',
        headers :{'Content-Type':'application/json'},
        body :JSON.stringify({
            TaskTitle : contact.TaskTitle,
            TaskDescription:contact.TaskDescription,
            ExpiryDate:contact.ExpiryDate,
            setTask:contact.setTask,
            isRequire:contact.isRequire,
            Reward:contact.Reward,
            Numbers:contact.Numbers
        })
      })
      .then(response =>response.json())
      .then(data => console.log(data))
      .catch(err => {
        console.log("Error"+err)
      })
    }

    const InputChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInput((PreValue) => {
        if(name === 'isRequire'){
          return{
            TaskTitle: PreValue.TaskTitle,
            TaskDescription: PreValue.TaskDescription,
            ExpiryDate:PreValue.ExpiryDate,
            selectTask:PreValue.selectTask,
            isRequire:value,
            Reward:PreValue.Reward,
            Numbers:PreValue.Numbers
          }
        }
        else if(name === 'TaskTitle'){
            return{
                TaskTitle: value,
                TaskDescription: PreValue.TaskDescription,
                ExpiryDate:PreValue.ExpiryDate,    
                selectTask:PreValue.selectTask,
                isRequire:PreValue.isRequire,
                Reward:PreValue.Reward,
                Numbers:PreValue.Numbers
            }
          }
          else if(name === 'selectTask'){
            return{
                TaskTitle: PreValue.TaskTitle,
                TaskDescription: PreValue.TaskDescription,
                ExpiryDate:PreValue.ExpiryDate,    
                selectTask:value,
                isRequire:PreValue.isRequire,
                Reward:PreValue.Reward,
                Numbers:PreValue.Numbers
            }
          }
          else if(name === 'TaskDescription'){
            return{
                TaskTitle:PreValue.TaskTitle,
                TaskDescription:value,
                ExpiryDate:PreValue.ExpiryDate,    
                selectTask:PreValue.selectTask,
                isRequire:PreValue.isRequire,
                Reward:PreValue.Reward,
                Numbers:PreValue.Numbers
            }
          }
          else if(name === 'ExpiryDate'){
            return{
                TaskTitle:PreValue.TaskTitle,
                TaskDescription:PreValue.TaskDescription,
                ExpiryDate:value,    
                selectTask:PreValue.selectTask,
                isRequire:PreValue.isRequire,
                Reward:PreValue.Reward,
                Numbers:PreValue.Numbers
            }
          }

        else if(name === 'Reward'){
          return{
            TaskTitle: PreValue.TaskTitle,
            TaskDescription: PreValue.TaskDescription,
            ExpiryDate:PreValue.ExpiryDate,
            selectTask:PreValue.selectTask,
            isRequire:PreValue.isRequire,
            Reward:value,
            Numbers:PreValue.Numbers
          }
        }
        else if(name === 'Numbers'){
          return{
            TaskTitle: PreValue.TaskTitle,
            TaskDescription: PreValue.TaskDescription,
            ExpiryDate:PreValue.ExpiryDate,
            selectTask:PreValue.selectTask,
            isRequire:PreValue.isRequire,
            Reward:PreValue.Reward,
            Numbers:value
          }
        }
        })
      }

      


    return(
        <div>
        {/* <Header Require={InputChange}/>, */}
        {/* <Secondpart TitleChange={InputChange} DescriptionChange={InputChange} DateChange={InputChange}/> */}
        <SelectTask selectTask={InputChange} TitleChange={InputChange} DescriptionChange={InputChange} DateChange={InputChange} />
        <Footer Require={InputChange} Reward={InputChange} Numbers={InputChange}/>,
        <Menu.Item>
        <div class="ui labeled input">
            <Button primary style= {{float:'right',marginLeft:'1000px'}} size="huge" onClick={handleSubmit} id='SubmitButton'>Save</Button>
        </div>
        </Menu.Item>
        </div>
    )
}


export default App;
