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
                            <p className='about'>Full Stack Developer, US Air Force Veteran and recent graduate of the rigorous Rutgers University Coding Boot Camp. My goal is to flourish in the computer science industry. Analytical/technical by nature always looking outside the box for a creative solution to a problem.  My training and experience honed my ability to anticipate and pivot accordingly. Adaptable with the ability to work as a team or independently - keenly aware of the importance of effective communication.</p>
                            <hr/>
                            <p>HTML/CSS | JavaScript | NodeJS | Express | MySQL | MongoDB | React</p>
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