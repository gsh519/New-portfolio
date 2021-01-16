import React from 'react'
import {makeStyles} from '@material-ui/styles'
import face_img from '../images/IMG_0531.jpeg'
import '../App.css'

const useStyles = makeStyles({
  title: {
    display: 'inline-block',
    alignItems: 'center',
    fontSize: 25,
    margin: '15px 0 15px 72px',
    color: '#50AFBF',
    borderBottom: '1px solid #50AFBF',
    '@media screen and (max-width: 679px)': {
      display: 'flex',
      justifyContent: 'center',
      fontSize: 20,
      margin: '10px 0 0 0',
      borderBottom: 'none'
    }
  },
  center: {
    fontFamily: 'Capriola, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif',
    fontWeight: 'bold',
    color: 'rgb(66, 66, 66)',
    textAlign: 'center',
    fontSize: 45,
    marginTop: 0
  }
})

export const Profile = () => {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.title}>プロフィール</h1>
      <div className='container-profile'>
        <h2 className={classes.center}>About me</h2>
        <div className="row">
          <div className="left">
            <span className='img-box'>
              <img src={face_img} className='img_title' alt="顔写真"/>
            </span>
            <ul className='profile-link'>
              <li><a target='_blank' href="https://twitter.com/yu_to5196" className='sns-link'><i className="fab fa-twitter fab-profile"></i>twitter</a></li>
              <li><a target='_blank' href="https://github.com/gsh519" className='sns-link'><i className="fab fa-github fab-profile"></i>GitHub</a></li>
            </ul>
          </div>
          <div className="right">
            <p className='comment'>はじめまして。現在大学3年生のゆうとです。フロントエンドエンジニア志望です。はじめまして。現在大学3年生のゆうとです。フロントエンドエンジニア志望です。はじめまして。現在大学3年生のゆうとです。フロントエンドエンジニア志望です。はじめまして。現在大学3年生のゆうとです。フロントエンドエンジニア志望です。はじめまして。現在大学3年生のゆうとです。フロントエンドエンジニア志望です。はじめまして。現在大学3年生のゆうとです。フロントエンドエンジニア志望です。</p>
          </div>
        </div>
      </div>
    </>
  )
}