import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title={<Link style={{textDecoration: 'none', color: 'white'}} to='/'>Gabriel Quinn</Link>} scroll>
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <a className='linked' href="https://www.linkedin.com/in/gabriel-quinn-425453192/" rel='noopener noreferrer' target='_blank' >
                                    <i className='fa fa-linkedin-square' aria-hidden='true'/>
                                    </a>
                <a className='git' href="https://github.com/GQuinn1011" rel='noopener noreferrer' target='_blank' >
                                    <i className='fa fa-github-square' aria-hidden='true'/>
                                    </a>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to='/'>My Portfolio</Link>}>
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <hr/>
                <a className='linked' href="https://www.linkedin.com/in/gabriel-quinn-425453192/" rel='noopener noreferrer' target='_blank' >
                                    <i className='fa fa-linkedin-square' aria-hidden='true'/>
                                    </a>
                <a className='git' href="https://github.com/GQuinn1011" rel='noopener noreferrer' target='_blank' >
                                    <i className='fa fa-github-square' aria-hidden='true'/>
                                    </a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
