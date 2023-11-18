import style from '../Header/header.module.css';
export default function Header() {
  return (
    <div className={style.headerWrap}>
      <div className={style.info}>
        <div className={style.phone}>
          <div className={style.imgPhone}></div>
          <p>(414) 857 - 0107</p>
        </div>

        <div className={style.mail}>
          <div className={style.imgMail}></div>
          <p>yummy@bistrobliss</p>
        </div>

        <div className={style.images}>
          <div className={style.imgTwitter}></div>
          <div className={style.imgFacebook}></div>
          <div className={style.imgInstagram}></div>
          <div className={style.imgCompan}></div>
        </div>

      </div>
      <div className={style.navigation}>
        <div className={style.logo}></div>
        <h1>Bistro Bliss</h1>
        <div className={style.elemNavig}>
          {['Home', 'About', 'Menu'].map((el, index) => <p key={index}>{el}</p>)}
        </div>

        <button className={style.btn}>Book A Table</button>
      </div>
    </div>
  )
}
