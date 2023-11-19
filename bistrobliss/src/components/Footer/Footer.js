import style from '../Footer/footer.module.css';

export default function Footer() {
  return (
    <div className={style.footerWrap}>
      <div className={style.col}>
        <div className={style.col1}>
          <div className={style.col1Title}>
            <div className={style.imgCol1}></div>
            <h1>Bistro Bliss</h1>
          </div>
          <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
        </div>
        <div className={style.col2}>
          <div className={style.col2Text}>
            <h1>Pages</h1>
            <div className={style.elemNavig}>
              {['Home', 'About', 'Menu', 'Pricing', 'Blog', 'Contact', 'Delivery'].map((el, index) => <p key={index}>{el}</p>)}
            </div>
          </div>
          <div className={style.col2Text}>
            <h1>Utility Pages</h1>
            <div className={style.elemNavig}>
              {['Start Here', 'Styleguide', 'Password Protected', '404 Not Found', 'Licenses', 'Changelog', 'View More'].map((el, index) => <p key={index}>{el}</p>)}
            </div>
          </div>
        </div>
        <div className={style.col3}>
          {/* <div className={style.col3Text}> */}
          <h1>Follow Us On Instagram</h1>
          {/* </div> */}
          <div className={style.imgsCol3}>
            <div className={style.img1}></div>
            <div className={style.img2}></div>
            <div className={style.img3}></div>
            <div className={style.img4}></div>
          </div>

        </div>
      </div>
      <div className={style.hashtag}>Copyright © 2023 Hashtag Developer. All Rights Reserved</div>

    </div>

  )
}
