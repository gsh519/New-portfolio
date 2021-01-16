import React, {useState} from 'react'
import './App.css';
import {Header} from './components/Header'
import {Profile} from './components/Profile'
import {Portfolio} from './components/Portfolio'
import {Skill} from './components/Skill'
import {Contact} from './components/Contact'

const App = () => {
  const [profile, setProfile] = useState(true),
        [portfolio, setPortfolio] = useState(false),
        [skill, setSkill] = useState(false),
        [contact, setContact] = useState(false);

  if (profile) {
    return (
      <>
        <Header setProfile={setProfile} setPortfolio={setPortfolio} setSkill={setSkill} setContact={setContact} />
        <Profile />
      </>
    )
  } else if (portfolio) {
    return (
      <>
        <Header setProfile={setProfile} setPortfolio={setPortfolio} setSkill={setSkill} setContact={setContact} />
        <Portfolio />
      </>
    )
  } else if (skill) {
    return (
      <>
        <Header setProfile={setProfile} setPortfolio={setPortfolio} setSkill={setSkill} setContact={setContact} />
        <Skill />
      </>
    )
  } else if (contact) {
    return (
      <>
        <Header setProfile={setProfile} setPortfolio={setPortfolio} setSkill={setSkill} setContact={setContact} />
        <Contact />
      </>
    )
  }
}

export default App;
