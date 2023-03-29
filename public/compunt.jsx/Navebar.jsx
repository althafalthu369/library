import React from 'react'

const navebar = () => {
  return (
    <div>
      <TextField lable='name' name='name' variant='outlined'
        value={input.name} onChange={inputHandler} />
      <br>
      </br>
      <TextField label='grade' name='grade' variant='outlined'
        value={input.grade} onChange={inputHandler} />
      <Button variant='contained' onClick={readvalues}
        color='success'>submit</Button>


    </div>
  )
}

export default navebar
