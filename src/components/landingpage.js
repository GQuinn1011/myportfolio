import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Pic from '../GabrielQuinn.PNG';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                        src={Pic}
                        alt='avatar'
                        className='avatar-img'/>

                        <div className='banner-text'>
                            <h1>Gabriel Quinn</h1>
                            <hr/>
                            <h3>Full Stack Web Developer</h3>
                            <p>HTML/CSS | JavaScript | NodeJS | Express | MySQL | MongoDB | React</p>
                            <hr/>
                            <p></p>
                            <div className='social-links'>
                                

                            </div>
                        </div>
                    </Cell>

                </Grid>

            </div>
        )
    }
}
export default Landing;