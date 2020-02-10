import React, { useState } from 'react'
import { Button, TextInput } from 'grommet'
import PropTypes from 'prop-types'

export default function InputField({ submitText }) {
  const [text, setText] = useState('')

  return (
    <div style={{ display: 'flex' }}>
      <TextInput onChange={event => setText(event.target.value)} value={text} />
      <Button label="Submit" onClick={() => submitText(text)} />
    </div>
  )
}

InputField.propTypes = {
  submitText: PropTypes.string,
}

InputField.defaultProps = {
  submitText: '',
}
