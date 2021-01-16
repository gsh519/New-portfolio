import React from 'react'

export const Menus = () => {

  const modals = [
    { 
      comment: 'Ruby on Railsのチュートリアルに沿って制作したWebアプリケーションです。Twitterのように小さなコメントを投稿したり、ユーザーをフォローして極簡単なコミュケーションが取れます。このチュートリアルを通してテスト駆動開発、CRUD、ユーザー登録などの基礎的な考え方を学ぶことができました。今後は実務レベルでこれらの技術を活用することを考えています。',
      linkDemo: '',
      linkGithub: '',
      useLanguage: 'Ruby on Rails, HTML/CSS(SASS), Bulma, jQuery, Sqlite（開発）, Postgresql（本番）, Heroku, SendGrid',
      img: 'https://placehold.jp/500x420.png'
    },
    { 
      comment: 'Ruby on Railsのチュートリアルに沿って制作したWebアプリケーションです。Twitterのように小さなコメントを投稿したり、ユーザーをフォローして極簡単なコミュケーションが取れます。このチュートリアルを通してテスト駆動開発、CRUD、ユーザー登録などの基礎的な考え方を学ぶことができました。今後は実務レベルでこれらの技術を活用することを考えています。',
      linkDemo: '',
      linkGithub: '',
      useLanguage: 'Ruby on Rails, HTML/CSS(SASS), Bulma, jQuery, Sqlite（開発）, Postgresql（本番）, Heroku, SendGrid',
      img: 'https://placehold.jp/500x420.png'
    },
  ]

  return (
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
              <h2 id="transition-modal-title" className='sample-app'>The Sample App</h2>
              <p id="transition-modal-description" className='paper-comment'>Ruby on Railsのチュートリアルに沿って制作したWebアプリケーションです。Twitterのように小さなコメントを投稿したり、ユーザーをフォローして極簡単なコミュケーションが取れます。このチュートリアルを通してテスト駆動開発、CRUD、ユーザー登録などの基礎的な考え方を学ぶことができました。今後は実務レベルでこれらの技術を活用することを考えています。</p>
              <ul className='paper-link'>
                <li><a href="">Demo</a></li>
                <li><a href="">GitHub</a></li>
              </ul>
              <Divider />
              <h2 className='sample-app'>使用言語など</h2>
              <p>Ruby on Rails, HTML/CSS(SASS), Bulma, jQuery, Sqlite（開発）, Postgresql（本番）, Heroku, SendGrid</p>
            </div>
            <div className="paper-right">
              <img src="https://placehold.jp/500x420.png" alt=""/>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}