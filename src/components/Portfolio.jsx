import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import {makeStyles} from '@material-ui/styles'
import calculation from '../images/caluculation-app.png'
import marubatu from '../images/marubatu-app.png'
import todo from '../images/todo-app.png'
import portfolio from '../images/portfolio-app.png'
import movie from '../images/movie-app.png'
import ec from '../images/ec-app.png'
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'fixed',
    display: 'inline-block',
    alignItems: 'center',
    fontSize: 25,
    margin: '15px 0 15px 72px',
    color: '#50AFBF',
    borderBottom: '1px solid #50AFBF',
    '@media screen and (max-width: 679px)': {
      display: 'block',
      justifyContent: 'center',
      fontSize: 20,
      margin: '10px 0 0 0',
      borderBottom: 'none',
      position: 'unset',
      textAlign: 'center',
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media screen and (max-width: 679px)': {
      display: 'block',
      overflow: 'scroll',
    }
  },
  paper: {
    backgroundColor: '#fafafa',
    border: '2px solid #000',
    boxShadow: '0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.3)',
    padding: 40,
    width: '80%',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    '@media screen and (max-width: 679px)': {
      margin: '0 auto',
    }
  },
}))

export const Portfolio = () => {
  const classes = useStyles();

  // 電卓
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //◯✕ゲーム
  const [marubatuOpen, setMarubatuOpen] = useState(false);

  const handleMarubatuOpen = () => {
    setMarubatuOpen(true);
  };

  const handleMarubatuClose = () => {
    setMarubatuOpen(false);
  };

  //todoリスト
  const [todoOpen, setTodoOpen] = useState(false);

  const handleTodoOpen = () => {
    setTodoOpen(true);
  };

  const handleTodoClose = () => {
    setTodoOpen(false);
  };

  //portfolio
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  const handlePortfolioOpen = () => {
    setPortfolioOpen(true);
  };

  const handlePortfolioClose = () => {
    setPortfolioOpen(false);
  };

  //movie
  const [movieOpen, setMovieOpen] = useState(false);

  const handleMovieOpen = () => {
    setMovieOpen(true);
  };

  const handleMovieClose = () => {
    setMovieOpen(false);
  };

  //EC
  const [ecOpen, setEcOpen] = useState(false);

  const handleEcOpen = () => {
    setEcOpen(true);
  };

  const handleEcClose = () => {
    setEcOpen(false);
  };

  return (
    <>
      <h1 className={classes.title}>ポートフォリオ</h1>
      <div className="container-portfolio">
        <h2 className='work-center'>Works</h2>
        <p className='comment-center'>私が今まで制作してきた作品たちを紹介します。</p>
        <ul className='works-list'>
          <li onClick={handleOpen}>
            <div className="work-box">
              <a className='link'><img src={calculation} alt="画像"/></a>
              <p>電卓</p>
            </div>
          </li>
          <li onClick={handleMarubatuOpen}>
            <div className="work-box">
              <a className='link'><img src={marubatu} alt="画像"/></a>
              <p>◯✕ゲーム</p>
            </div>
          </li>
          <li onClick={handleTodoOpen}>
            <div className="work-box">
              <a className='link'><img src={todo} alt="画像"/></a>
              <p>TODOリスト</p>
            </div>
          </li>
          <li onClick={handlePortfolioOpen}>
            <div className="work-box">
              <a className='link'><img src={portfolio} alt="画像"/></a>
              <p>YUTO PORTFOLIO</p>
            </div>
          </li>
          <li onClick={handleMovieOpen}>
            <div className="work-box">
              <a className='link'><img src={movie} alt="画像"/></a>
              <p>映画情報サイト</p>
            </div>
          </li>
          <li onClick={handleEcOpen}>
            <div className="work-box">
              <a className='link'><img src={ec} alt="画像"/></a>
              <p>ECサイト</p>
            </div>
          </li>
        </ul>
      </div>

      {/* fadein menu */}
      {/* 電卓 */}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div className="paper-left">
                <h2 id="transition-modal-title" className='sample-app'>計算機</h2>
                <p id="transition-modal-description" className='paper-comment'>Progateをやり終えたあとに作ったはじめての作品です。わからないなりに試行錯誤して作りました。この作品を通してvalueを使った値のもたせ方やonClickによる関数の実行の仕方などがわかりました。また、Bootstrapを使ってボタンがhoverしたときに色が変わるようにしてみました。</p>
                <ul className='paper-link'>
                  <li><a target='_blank' href="http://dentakuki.net/">Demo</a></li>
                  <li><a target='_blank' href="https://github.com/gsh519/calculation">GitHub</a></li>
                </ul>
                <Divider />
                <h2 className='sample-app'>使用言語など</h2>
                <p>HTML/CSS(SASS), javascript, さくらサーバー</p>
              </div>
              <div className="paper-right">
                <img src={calculation} alt="計算機"/>
              </div>
              <Button className='closeBtn' onClick={handleClose}><CloseIcon /></Button>
            </div>
          </Fade>
        </Modal>
        
      </div>

      {/* ◯✕ゲーム */}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={marubatuOpen}
          onClose={handleMarubatuClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={marubatuOpen}>
            <div className={classes.paper}>
              <div className="paper-left">
                <h2 id="transition-modal-title" className='sample-app'>◯✕ゲーム</h2>
                <p id="transition-modal-description" className='paper-comment'>◯✕ゲームで遊ぶことのできる極簡単なゲームです。この作品を通してjavascriptのfor文やif文などがわかりました。課題としては勝ち負けの判定などをしっかりとできるようにしていけたら良いなと思います。</p>
                <ul className='paper-link'>
                  <li><a target='_blank' href="http://marubatu-game.com/">Demo</a></li>
                  <li><a target='_blank' href="https://github.com/gsh519/maru-batu-game">GitHub</a></li>
                </ul>
                <Divider />
                <h2 className='sample-app'>使用言語など</h2>
                <p>HTML/CSS, jQuery, さくらサーバー</p>
              </div>
              <div className="paper-right">
                <img src={marubatu} alt="◯✕ゲーム"/>
              </div>
              <Button className='closeBtn' onClick={handleMarubatuClose}><CloseIcon /></Button>
            </div>
          </Fade>
        </Modal>
      </div>

      {/* TODOリスト */}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={todoOpen}
          onClose={handleTodoClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={todoOpen}>
            <div className={classes.paper}>
              <div className="paper-left">
                <h2 id="transition-modal-title" className='sample-app'>Todoリスト</h2>
                <p id="transition-modal-description" className='paper-comment'>はじめてReactを使って作ったTODOリストです。daily, work, trainingの3つのカテゴリーに分けてtodoを追加することができます。この作品を通してReactを使用することによって、生のJavascriptでやってきたややこしいDOM操作をしなくてよくなるというReactの便利さを知ることができました。また、CRUDの基礎なども理解することができました。</p>
                <ul className='paper-link'>
                  <li><a target='_blank' href="https://todo-list-e1888.web.app/">Demo</a></li>
                  <li><a target='_blank' href="https://github.com/gsh519/TODO-APP">GitHub</a></li>
                </ul>
                <Divider />
                <h2 className='sample-app'>使用言語など</h2>
                <p>React, Firebase, Material-ui</p>
              </div>
              <div className="paper-right">
                <img src={todo} alt="todoリスト"/>
              </div>
              <Button className='closeBtn' onClick={handleTodoClose}><CloseIcon /></Button>
            </div>
          </Fade>
        </Modal>
      </div>

      {/* ポートフォリオ */}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={portfolioOpen}
          onClose={handlePortfolioClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={portfolioOpen}>
            <div className={classes.paper}>
              <div className="paper-left">
                <h2 id="transition-modal-title" className='sample-app'>ポートフォリオ</h2>
                <p id="transition-modal-description" className='paper-comment'>このポートフォリオです。Reactを勉強してきているのでこのサイトもReactを使って作りました。スクロールせずに一画面にしてメニューボタンを押すことによって切り替わるタブ式にしてみました。シンプルな色味でサイト全体に統一感をもたせ、必要な情報だけを載せました。</p>
                <ul className='paper-link'>
                  <li><a target='_blank' href="">GitHub</a></li>
                </ul>
                <Divider />
                <h2 className='sample-app'>使用言語など</h2>
                <p>React, Firebase, Material-ui, FontAwesome</p>
              </div>
              <div className="paper-right">
                <img src={portfolio} alt="ポートフォリオ"/>
              </div>
              <Button className='closeBtn' onClick={handlePortfolioClose}><CloseIcon /></Button>
            </div>
          </Fade>
        </Modal>
      </div>
        
      {/* 映画情報サイト */}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={movieOpen}
          onClose={handleMovieClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={movieOpen}>
            <div className={classes.paper}>
              <div className="paper-left">
                <h2 id="transition-modal-title" className='sample-app'>映画情報サイト</h2>
                <p id="transition-modal-description" className='paper-comment'>映画の情報を知ることのできるサイトです。TMDBが提供するAPIを利用して、映画の情報を人気や高評価などのカテゴリーに分けて取得して表示しています。また、検索の値によってもAPIを叩いてその結果が表示されるようにしてみました。ログイン機能をつけて自分のお気に入りの映画の公開日になったら通知するシステムやいいねボタンなどを作って行きたいと思っています。</p>
                <ul className='paper-link'>
                  <li><a target='_blank' href="https://share-movie-5577d.web.app/">Demo</a></li>
                  <li><a target='_blank' href="https://github.com/gsh519/Share-Movie">GitHub</a></li>
                </ul>
                <Divider />
                <h2 className='sample-app'>使用言語など</h2>
                <p>React, Firebase, Material-ui, Tmdb</p>
              </div>
              <div className="paper-right">
                <img src={movie} alt="映画情報サイト"/>
              </div>
              <Button className='closeBtn' onClick={handleMovieClose}><CloseIcon /></Button>
            </div>
          </Fade>
        </Modal>
      </div>

      {/* ECサイト */}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={ecOpen}
          onClose={handleEcClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={ecOpen}>
            <div className={classes.paper}>
              <div className="paper-left">
                <h2 id="transition-modal-title" className='sample-app'>ECサイト</h2>
                <p id="transition-modal-description" className='paper-comment'>React-reduxとFirebaseを使って作ったECサイトです。Firebaseのauthentication機能を使ってログイン機能を作ったり、商品の情報やユーザーの情報をFirebaseで管理したりできるようにしました。reduxを使うことによってreactよりも遥かにstateの管理などが簡単にできるようになり、Firebaseと合わせることによってより本格的なWebアプリケーションが作れるようになりました。</p>
                <ul className='paper-link'>
                  <li><a target='_blank' href="https://ec-app-8aaf9.web.app/">Demo</a></li>
                  <li><a target='_blank' href="https://github.com/gsh519/ec-demo-new">GitHub</a></li>
                </ul>
                <Divider />
                <h2 className='sample-app'>使用言語など</h2>
                <p>React, React-redux, Firebase, Material-ui</p>
              </div>
              <div className="paper-right">
                <img src={ec} alt="ECサイト"/>
              </div>
              <Button className='closeBtn' onClick={handleEcClose}><CloseIcon /></Button>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  )
}