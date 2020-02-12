import { Button, TextInput } from 'grommet'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import './input.scss'

export default function InputField({ submitText }) {
  const [text, setText] = useState('')

  function onSubmitHanlder(event) {
    event.preventDefault()
    if (text) {
      submitText(text)
      setText('')
    }
  }

  return (
    <form className="form" onSubmit={onSubmitHanlder}>
      <div className="form__input">
        <TextInput
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </div>
      <Button label="Submit" type="submit" onClick={onSubmitHanlder} />
    </form>
  )
}

InputField.propTypes = {
  submitText: PropTypes.func,
}

InputField.defaultProps = {
  submitText: () => null,
}
