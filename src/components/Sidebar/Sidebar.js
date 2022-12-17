import React from 'react'
import "./Sidebar.css"

const recentItem = (topic) => (
  <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
  </div>
) 

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">126</p>
        </div>
        <div className="sidebar__stat">
          <p>Views of your post</p>
          <p className="sidebar__statNumber">67</p>
        </div>
        <div className='sidebar_button'>
            <p>Recent</p>
            {recentItem('programming')}
            {recentItem('jobs')}
            {recentItem('fintech')}
            {recentItem('spaceX')}
            {recentItem('MongoDB')}
            <h4>Followed Hastags</h4>
            {recentItem('nodejs')}
            {recentItem('reactjs')}
            {recentItem('developer')}
            {recentItem('business')}
            {recentItem('tech')}
        </div>
    </div>
  )
}

export default Sidebar