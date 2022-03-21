import React from 'react'
import './about.css'
import avatar from '../Assets/Avatar.png'

const About = () => {
  return (
    <main>

        <div className='about'>
            <div className="avatar">
                <img src={avatar} alt="" />
                    <h4>Your WebD Bro</h4>
                    <p className='para'>Hello there I am Prajwal Bhange ,second B.E(Computer Science) at RMD Sinhagad College of Engieneering at Pune I have been practicing Front-End Development since second Semester of first year since then I built many projects with pure HTMl,CSS ,JS and REACT also I have completed Internshala's Web Development Training and Responsive Web Design training from Free Code Camp . So,I guess Immma certified Freak now!</p>
          </div>
        </div>
    </main>
  )
}

export default About