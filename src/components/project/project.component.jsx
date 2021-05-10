import React from 'react'
import laundryImg from '../../assets/laundary.jpg';

import './project.styles.scss'

const project = () => {
  return (
    <div className="project-container">
      <h3>The Project</h3>
      <img className="project-img" src={laundryImg} />
      <h4>A label that stands time</h4>
      <p><span>#art</span> <span>#design</span></p>
      <p>Lorem Ipsum is simply dummy text of the
      printing and typesetting industry. Lorem
      Ipsum has been the industry's standard
      dummy text ever since the 1500s, when
      an unknown printer took a galley of
      type and scrambled it to make a type
      specimen book and It has survived not
      only.
      </p>

      <button>More</button>
    </div>
  )
}

export default project;