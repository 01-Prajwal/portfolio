import React from 'react'
import video from '../Assets/v4.mp4'
import './home.css'
import {MdPhonelink} from 'react-icons/md'
import {GoTools} from 'react-icons/go'

const Home = () => {
  return (
    <div className='home'>
          <video autoPlay loop muted id='video'>
                <source src={video} type='video/mp4' />
          </video>
            <div className="content">
              <h1>Successful Front-end Development</h1>
              <p>Hi. I’m Prajwal, a freelance React Front-end Developer.</p>
            </div>
            <div className="cards">
              <div className="card">
                  <MdPhonelink size={130} className='icons'  />
                  <h3>Front-end development</h3>
                  <p>I design and create Front-End Websites which are fully responsive </p>
              </div>
              <div className="card">
                  <GoTools size={130} className='icons' />
                  <h3>Technologies I Use</h3>
                  <p>The area of my expertise in Front-End Development are HTML,CSS,JS,REACT</p>
              </div>
            </div>
    </div>
  )
}

export default Home