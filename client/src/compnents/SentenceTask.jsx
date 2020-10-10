import React from 'react'
import {Form, Input} from "semantic-ui-react";

const SentenceTask = () => {
    return <Form.Field >
      <label>Sentence</label>
      <Input placeholder='Input your Sentence' />
    </Form.Field>
  }

export default SentenceTask;