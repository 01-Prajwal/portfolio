import React from 'react'
import './project.css'
import clone1 from '../Assets/1.png'
import clone2 from '../Assets/2.png'
import clone3 from '../Assets/3.png'
import clone4 from '../Assets/4.png'
import clone5 from '../Assets/5.png'
import clone6 from '../Assets/6.png'
import clone7 from '../Assets/7.png'
import clone8 from '../Assets/8.png'
import clone9 from '../Assets/9.png'
import clone10 from '../Assets/10.png'
import clone11 from '../Assets/11.png'

const Project = () => {


  return (
    <main className='projects'>
    <div className="all">
      <div className="title">
        <h2>--Clones--</h2>
      </div>
      <div className="project">
        <div className="clone">
        <a href="https://tesla-clone-5ceaf.web.app/ " target='_blank' className='clone'>
          <img src={clone1} alt="" className=' images' />
          <h3 className='clone-h'>Tesla-Clone</h3>
        </a>
          
        </div>
        <div className="clone">
        <a href="https://clone-6fd95.web.app/" target='_blank' className="clone">
          <img src={clone2} alt="" className='images' />
          <h3 className='clone-h'>Amazon-Clone</h3>
          </a>
        </div>
        <div className="clone">
        <a href="https://trusting-curran-40d075.netlify.app/" target='_blank' className="clone">
          <img src={clone3} alt="" className='images' />
          <h3 className='clone-h'>Stripe-Clone</h3>
          </a>
        </div>
      </div>
      <div className="title">
        <h2>--React Nuggets--</h2>
      </div>
      <div className="project">
        <div className="clone">
        <a href="https://menu-3dca5.web.app/" className="clone" target='_blank'>
          <img src={clone6} alt="" className='images-2' />
          <h3 className='clone-h'>Filtered-Menu</h3>
          </a>
        </div>
        <div className="clone">
        <a href="https://accordian-751c4.web.app/" target="_blank" className="clone">
          <img src={clone7} alt="" className='images-2' />
          <h3 className='clone-h'>Accordian</h3>
          </a>
        </div>
        <div className="clone">
        <a href="https://birthdayremainder-d7353.web.app//" target="_blank" className="clone">
          <img src={clone8} alt="" className='images-2' />
          <h3 className='clone-h'>Dark Mode</h3>
          </a>
        </div>
        {/* <div className="clone">
          <img src={clone3} alt="" className='images' />
          <h3>Stripe-Clone</h3>
        </div> */}
      </div>
      <div className="title">
        <h2>--Vanilla JS--</h2>
      </div>
      <div className="project">
        <div className="clone">
        <a href="https://hungry-saha-14b2a9.netlify.app" className="clone" target='_blank'>
          <img src={clone4} alt="" className='images-2' />
          <h3 className='clone-h'>Bg-Flipper</h3>
          </a>
        </div>
        <div className="clone">
        <a href="https://reverent-jennings-ac829c.netlify.app/" target="_blank" className="clone">
          <img src={clone5} alt="" className='images-2' />
          <h3 className='clone-h'>Tabs</h3>
          </a>
        </div>

      </div>
      <div className="title">
        <h2>--Working With Api--</h2>
      </div>
      <div className="project">
        <div className="clone">
        <a href="https://we-api-38aba.web.app/" target="_blank" className="clone">
          <img src={clone9} alt="" className='images-2' />
          <h3 className='clone-h'>Weather-API</h3>
          </a>
        </div>
        <div className="clone">
        <a href="https://crypto-webs.web.app/" target="_blank" className="clone">
          <img src={clone10} alt="" className='images-2' />
          <h3 className='clone-h'>Crypto-site(API)</h3>
          </a>
        </div>
      </div>
      <div className="title">
        <h2>--Baby Stuff--</h2>
      </div>
      <div className="project">
      <div className="clone">
        <a href="https://todo-1567c.web.app//" target="_blank" className="clone">
          <img src={clone11} alt="" className='images-3' />
          <h3 className='clone-3'>Todo-App</h3>
          </a>
        </div>
      </div>
      </div>
    </main>
  )
}

export default Project