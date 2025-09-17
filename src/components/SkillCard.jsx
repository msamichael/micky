import React from 'react'

const SkillCard = ({skillIcon, skillName}) => {
  return ( 
  <div className='skill-card'>
            <i className={skillIcon}></i>
            <h4>{skillName}</h4>
          </div>
  )
}

export default SkillCard