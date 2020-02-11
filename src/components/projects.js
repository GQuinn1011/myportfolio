import React, {Component, Fragment} from 'react';
import {Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component {            

    render() {
        return (
            <Fragment>
        <div className='projects-grid'>
            <Grid className='project'>
                <Cell col={2}>
            {/* Project Bamazon */}
            <Card className='project-card' shadow={5} style={{margin: 'auto'}}>
                <CardTitle style={{height: '176px', background: 'url(https://drive.google.com/thumbnail?id=1eq3CLybxzYpFe3fLuzD-PAclXlNtAmzB) center / cover'}}></CardTitle>
                    
                <CardText>Bamazon is a command line node app. It has 3 different command functions. You can shop as a customer, update inventory as a manager, and see cost analysis as a supervisor.</CardText>
                <CardActions border>
                    <Button colored>
                    <a href="https://github.com/GQuinn1011/bamazon" rel='noopener noreferrer' target='_blank'>GitHub</a>
                    </Button>
                    <Button colored>
                        <a href="https://drive.google.com/file/d/1p9cA3GoYEU8bf0kvTgSYAuq9XP60Wolo/view?usp=sharing" rel='noopener noreferrer' target='_blank'>Live Demo</a>
                        </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
            </Card>
                </Cell>
            </Grid>
            {/* Project LIRI */}
            <Grid className='project'>
                <Cell col={2}>
            <Card className='project-card' shadow={5} style={{margin: 'auto'}}>
                <CardTitle style={{height: '176px', background: 'url(https://drive.google.com/thumbnail?id=1H6x1uIS9cN9nN543qq81e_W6oOas7MFf) center / cover'}}></CardTitle>
                <CardText>LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.</CardText>
                <CardActions border>
                <Button colored>
                    <a href="https://github.com/GQuinn1011/LIRI-Node-Application" rel='noopener noreferrer' target='_blank'>GitHub</a>
                    </Button>
                    <Button colored>
                        <a href="https://drive.google.com/open?id=1QIMICm5H9iju7S75PKIlE765y9-9iEml" rel='noopener noreferrer' target='_blank'>Live Demo</a>
                        </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
            </Card>
            </Cell>
            </Grid>
            {/* Project Eat-Da-Burger */}
            <Grid className='project'>
                <Cell col={2}>
            <Card className='project-card' shadow={5} style={{margin: 'auto'}}>
                <CardTitle style={{height: '176px', background: 'url(https://drive.google.com/thumbnail?id=1k-4M5qCMx-O9cQy2C1NbNbIFrdW4FNrB) center / cover'}}></CardTitle>
                <CardText>This app uses Node, Express, MySQL, Handlebars, and a homemade ORM to create a burger logger. You have the ability to create and eat burgers (Yum!).</CardText>
                <CardActions border>
                <Button colored>
                    <a href="https://github.com/GQuinn1011/Eat-Da-Burger" rel='noopener noreferrer' target='_blank'>GitHub</a>
                    </Button>
                    <Button colored>
                        <a href="https://obscure-headland-32893.herokuapp.com/" rel='noopener noreferrer' target='_blank'>Live Demo</a>
                        </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
            </Card>
            </Cell>
            </Grid>
                </div>
                <div className='projects-grid'>
                <Grid className='project'>
                    <Cell col={2}>
                {/* Project Train */}
                <Card className='project-card' shadow={5} style={{margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background: 'url(https://i.pinimg.com/originals/0e/ac/39/0eac3942ca39d366494c01d6d7d8f3a9.jpg) center / cover'}}></CardTitle>
                        
                    <CardText>A train schedule application that incorporates Firebase to host arrival and departure data.</CardText>
                    <CardActions border>
                        <Button colored>
                        <a href="https://github.com/GQuinn1011/Firebase-Train-Schedule" rel='noopener noreferrer' target='_blank'>GitHub</a>
                        </Button>
                        <Button colored>
                            <a href="http://gquinn1011.github.io/Train-Scheduler" rel='noopener noreferrer' target='_blank'>Live Demo</a>
                            </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
                    </Cell>
                </Grid>
                {/* Project React Clicky Game */}
                <Grid className='project'>
                    <Cell col={2}>
                <Card className='project-card' shadow={5} style={{margin: 'auto'}}>
                    <CardTitle style={{color:'black', height: '176px', background: 'url(https://ih1.redbubble.net/image.311592153.5959/ap,550x550,16x12,1,transparent,t.u7.png) center / cover'}}></CardTitle>
                    <CardText>This a memory game built with React.js. The goal of the game is simple, using your mouse, click each of the twelve character cards from The Office in whatever order you chose - the order does not matter, only that you do not click the same card twice!</CardText>
                    <CardActions border>
                    <Button colored>
                        <a href="https://github.com/GQuinn1011/Clicky-Game" rel='noopener noreferrer' target='_blank'>GitHub</a>
                        </Button>
                        <Button colored>
                            <a href="http://officeclickgame.herokuapp.com" rel='noopener noreferrer' target='_blank'>Live Demo</a>
                            </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
                </Cell>
                </Grid>
                {/* Project Gif Tastic */}
                <Grid className='project'>
                    <Cell col={2}>
                <Card className='project-card' shadow={5} style={{margin: 'auto'}}>
                    <CardTitle style={{color: 'blue', fontWeight: 'bold', height: '176px', background: 'url(https://github.com/GQuinn1011/GifTastic/blob/master/assets/images/haunted-house.jpg?raw=true) center / cover'}}></CardTitle>
                    <CardText>SpookTastic is a Web based Javascript Gif fetching application that uses the GIPHY API to allow users to click on existing buttons to load random Gifs. Users can add their own buttons to search for choice of Gifs. Gifs can be clicked to start/stop animation.</CardText>
                    <CardActions border>
                    <Button colored>
                        <a href="https://github.com/GQuinn1011/GifTastic" rel='noopener noreferrer' target='_blank'>GitHub</a>
                        </Button>
                        <Button colored>
                            <a href="https://gquinn1011.github.io/GifTastic/" rel='noopener noreferrer' target='_blank'>Live Demo</a>
                            </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
                </Cell>
                </Grid>
                    </div>
                
                <div className='projects-grid'>
                <Grid className='project'>
                    <Cell col={2}>
                {/* Project Time */}
                <Card className='project-card' shadow={5} style={{margin: 'auto'}}>
                    <CardTitle style={{color:'black', fontWeight: 'bold', height: '176px', background: 'url(https://drive.google.com/thumbnail?id=120rB098pqUvElM1oGINMd1VRxN1cx4xW) center / cover'}}>Time-Capture</CardTitle>
                        
                    <CardText>A simple app that makes signing in quick and easy while also keeping track of customers attendences.</CardText>
                    <CardActions border>
                        <Button colored>
                        <a href="https://github.com/GQuinn1011/Project-Time-Capture" rel='noopener noreferrer' target='_blank'>GitHub</a>
                        </Button>
                        <Button colored>
                            <a href="http://ptcg4p3.herokuapp.com" rel='noopener noreferrer' target='_blank'>Live Demo Front End</a>
                            </Button>
                            <Button colored>
                            <a href="http://ptcg4p3.herokuapp.com/admin" rel='noopener noreferrer' target='_blank'>Live Demo Back End/Admin</a>
                            </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
                    </Cell>
                </Grid>
                {/* Project TouchBase */}
                <Grid className='project'>
                    <Cell col={2}>
                <Card className='project-card' shadow={5} style={{margin: 'auto'}}>
                    <CardTitle style={{color:'black', height: '176px', background: 'url(https://drive.google.com/thumbnail?id=1vcBz7jFefjhDFW9JQs3K0linVqRryxs8) center / cover'}}></CardTitle>
                    <CardText>This is a MySQL | Express | Node.js chat communication and whiteboarding app that stores & analyzes user texts and provides data visualization through D3. Websockets provide realtime updating to all users.</CardText>
                    <CardActions border>
                    <Button colored>
                        <a href="https://github.com/GQuinn1011/TouchBase" rel='noopener noreferrer' target='_blank'>GitHub</a>
                        </Button>
                        <Button colored>
                            <a href="https://touchbase-version-1.herokuapp.com/#" rel='noopener noreferrer' target='_blank'>Live Demo</a>
                            </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
                </Cell>
                </Grid>
                {/* Project VoiceBot */}
                <Grid className='project'>
                    <Cell col={2}>
                <Card className='project-card' shadow={5} style={{margin: 'auto'}}>
                    <CardTitle style={{height: '176px', background: 'url(https://drive.google.com/thumbnail?id=1CrzKuc2h5867Hbnjyqpnrdxa5GvIr11H) center / cover'}}></CardTitle>
                    <CardText>The VoiceBot Assistant is voice enabled, speech to text machine learning engine that allows the user to search for videos on YouTube and search for movie information using the The Movie Database..</CardText>
                    <CardActions border>
                    <Button colored>
                        <a href="https://github.com/matthew-lorber/voiceBot" rel='noopener noreferrer' target='_blank'>GitHub</a>
                        </Button>
                        <Button colored>
                            <a href="https://matthew-lorber.github.io/VoiceBot/" rel='noopener noreferrer' target='_blank'>Live Demo</a>
                            </Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
                </Cell>
                </Grid>
                    </div> 
                    </Fragment>
        )}
}
export default Projects;