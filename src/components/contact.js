import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Avatar from '../GQ.jpeg'

class Contact extends Component {
    render() {
        return (
        <div className='contact-body'>
            <Grid className='contact-grid'>
               <Cell col={6}>
                   <h2>Gabriel Quinn</h2>
                   <img src={Avatar}
                alt="MyPic"
                style={{height: '250px'}}/>
                <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Testing one two three test test one two three</p>
               </Cell>
               <Cell col={6}>
                <h2>Contact Me</h2> 
                <hr/>
                <div className='contact-list'>
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-phone-square' aria-hidden='true'/>
                                (732) 456-9537
                                </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-envelope' aria-hidden='true'/>
                                Gabe.Quinn@iCloud.com
                                </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-phone-square' aria-hidden='true'/>
                                (732) 456-9537
                                </ListItemContent>
                        </ListItem>
                    </List>
                </div>
               </Cell>
            </Grid>
        </div>
        )
    }
}
export default Contact;