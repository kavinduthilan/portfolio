import React from 'react';
import './Work.css';
import work1 from './images/work1.png';
import { GitHub } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function Work() {
    return (
        <div className='works' id='work'>
            <h1>My Works</h1>
            <div className="row">
                <div className="column">
                    <div className="content">
                        <img src={work1} alt="Mountains"/>
                        <div className='projectName'>Kingfisher Cafe</div>
                        <p>Designed and implemented a website to facilitate
                        online orders, showcasing an intuitive user interface and
                            seamless ordering process.</p>
                        <IconButton aria-label="github" color="primary">
                            <GitHub />
                        </IconButton>
                        <IconButton aria-label="play" color="primary" fontSize="large">
                            <LiveTvIcon />
                        </IconButton>
                        
                        
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                    <img src={work1} alt="Lights"/>
                    <div className='projectName'>Kingfisher Cafe</div>
                    <p>Lorem ipsum..</p>
                    </div>
                </div>
                <div className="column">
                    <div className="content">
                    <img src={work1} alt="Nature"/>
                    <div className='projectName'>Kingfisher Cafe</div>
                    <p>Lorem ipsum..</p>
                    </div>
                </div>
                
                </div>
        </div>
    );
}
