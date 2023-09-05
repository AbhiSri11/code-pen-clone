import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material';
const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`

const Header = () => {
    const logo = 'https://icon-library.com/images/codepen-icon/codepen-icon-26.jpg';
  return (
    <div>
        <Container position='static'>
            <Toolbar>
                <img src = {logo} style = {{width:40}}></img>
            </Toolbar>
        </Container>
    </div>
  )
}

export default Header
