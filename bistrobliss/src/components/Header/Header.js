import Link from 'next/link';
import style from './header.module.css';
export default function Header() {
  return (
    <div className={style.headerWrap}>
      <div className={style.info}>
        <div className={style.phone}>
          <div className={style.imgPhone}></div>
          <p>(414) 857 - 0107</p>
          <div className={style.mail}>
            <div className={style.imgMail}></div>
            <p>yummy@bistrobliss</p>
          </div>
        </div>

        <div className={style.images}>
          <div className={style.imgTwitter}></div>
          <div className={style.imgFacebook}></div>
          <div className={style.imgInstagram}></div>
          <div className={style.imgCompan}></div>
        </div>

      </div>
      <div className={style.navigation}>
        <div className={style.logomain}>
          <div className={style.logo}></div>
          <h1>Bistro Bliss</h1>
        </div>
        <div className={style.elemNavig}>
          {/* {['home', 'about', 'menu'].map((el, index) => <p key={index}><Link href={el}>{el}</Link></p>)} */}
          <p><Link href='/'>home</Link></p>
          <p><Link href='/about'>about</Link></p>
          <p><Link href='/menu'>menu</Link></p>
        </div>
        <button className={style.btn}>Book A Table</button>
      </div>
    </div>
  )
}
