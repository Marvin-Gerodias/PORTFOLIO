import React from 'react'
import '../css/Header.css'
import GetAppIcon from '@material-ui/icons/GetApp';
import { Button, ButtonGroup } from '@material-ui/core';

function Header() {
    return (
        <div>
            <div className="main__header">

                <div className="title__header">
                    <p>Marvin Gerodias</p>
                </div>

                <div className="selections__header">
                    <ButtonGroup  variant="text" aria-label="text primary button group" disabled>
                        <Button>Projects</Button>
                        <Button>About</Button>
                        <Button>Contact</Button>
                    </ButtonGroup>
                </div>

                <div className="resume__download">
                    <button type="button" class="resumebutton btn btn-primary" disabled>Resume <GetAppIcon/></button>
                </div>

            </div>
        </div>
    )
}

export default Header
