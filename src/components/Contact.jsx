import React, {useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import TextField from '@material-ui/core/TextField';
import {db} from '../../src/firebase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  title: {
    display: 'inline-block',
    alignItems: 'center',
    fontSize: 25,
    margin: '15px 0 15px 72px',
    color: '#50AFBF',
    borderBottom: '1px solid #50AFBF',
    '@media screen and (max-width: 679px)': {
      display: 'block',
      fontSize: 20,
      margin: '10px 0 0 0',
      borderBottom: 'none',
      position: 'unset',
      textAlign: 'center',
    }
  },
  text: {
    marginBottom: 30
  },
  btn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#50AFBF',
    marginBottom: 20,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'grey',
      color: '#fff',
    },
  },
})

export const Contact = () => {
  const classes = useStyles();

  const [name, setName] = useState(''),
        [email, setEmail] = useState(''),
        [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('contacts').add({
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      alert('メッセージが送信されました')
    })
    .catch(() => {
      alert('error')
    })

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <h1 className={classes.title}>お問い合わせ</h1>
      <h2 className='work-center'>Contact</h2>
      <form className='form' autoComplete="off" onSubmit={handleSubmit}>
        <p className='contact-center'>最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。</p>
        <p className='contact-comment'>何か連絡がございましたら連絡ください。</p>
        <TextField required id="standard-required" label="名前" className={classes.text} value={name} onChange={(e) => setName(e.target.value)} />
        <TextField required id="standard-required" label="メールアドレス" className={classes.text} value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField
          required
          id="standard-multiline-static"
          label="メッセージ"
          multiline
          rows={4}
          className={classes.text}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type='submit' className={classes.btn}>送信</Button>
      </form>
    </>
  )
}