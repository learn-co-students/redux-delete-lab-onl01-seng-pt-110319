import React from 'react'
import Band from './Band'

const Bands = props => {
  const bands = props.band.map(band => <Band key={band.id} {...band} dispatch={props.deleteBand}/>)

  return (
    <div>
      {bands}
    </div>
  )
}

export default Bands