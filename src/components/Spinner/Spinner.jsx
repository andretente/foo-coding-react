/* eslint-disable react/self-closing-comp */
import React from 'react'
import './spinner.scss'

export default function Spinner() {
  return (
    <div className="spinner">
      <div className="spinner__double-bounce1"></div>
      <div className="spinner__double-bounce2"></div>
    </div>
  )
}
