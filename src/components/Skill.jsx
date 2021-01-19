import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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
  
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  textTitle: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export const Skill = () => {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.title}>スキル</h1>
      <div className="container-skill">
        <h2 className='work-center'>Skill</h2>
        <Card className='card red' >
          <i className="fab fa-html5"></i>
          <CardContent>
            <Typography variant="h5" component="h2">
              HTML & CSS
            </Typography>
            <Typography variant="body2" component="p" className='card-comment'>
              HTML&CSSを使ったコーディングができます。CSSはSCSSを使ってコーディングすることができます。また、Bootstrapなどのライブラリーをつかってコーディングすることもできます。
            </Typography>
          </CardContent>
        </Card>
        <Card className='card blue'>
          <i className="fab fa-js"></i>
          <CardContent>
            <Typography variant="h5" component="h2">
              JavaScript
            </Typography>
            <Typography variant="body2" component="p" className='card-comment'>
              最近はReactに移行しつつありますが、シンプルなWebサイト等ではjQueryを使っています
            </Typography>
          </CardContent>
        </Card>
        <Card className='card react'>
          <i className="fab fa-react"></i>
          <CardContent>
            <Typography variant="h5" component="h2">
              React
            </Typography>
            <Typography variant="body2" component="p" className='card-comment'>
              もっとも力を入れて勉強してきました。簡単なアプリケーションならReactを使って作ることができます。
            </Typography>
          </CardContent>
        </Card>
        <Card className='card firebase'>
          <i className="fab fa-gripfire"></i>
          <CardContent>
            <Typography variant="h5" component="h2">
              Firebase
            </Typography>
            <Typography variant="body2" component="p" className='card-comment'>
              バックエンド系の言語をまだ勉強していないのでバックエンドの部分をすべてFirebaseを使って補っています。
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  )
}