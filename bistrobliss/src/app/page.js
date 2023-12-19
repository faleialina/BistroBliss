
import style from './page.module.css'

export default function HomePage() {
  return (
    <div className={style.colormain}>
      <main className={style.main}>

        <section className={style.imgmain}>
          <div className={style.mainText}>
            <h1>Best food for your taste</h1>
            <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
          </div>
          <div className={style.mainBtns}>
            <button className={style.btnTable}>Book A Table</button>
            <button className={style.btnMenu}>Explore Menu</button>
          </div>
        </section>

        <div className={style.colorBlockmenu}>
          <section className={style.blockmenu}>
            <div className={style.blockmenuTitle}>Browse Our Menu </div>

            <div className={style.blockmenuItemsWrap}>

              <div className={style.blockmenuItems}>
                <div className={style.imgBreakfast}></div>
                <div className={style.blockmenuText}>
                  <h1>Breakfast</h1>
                  <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                </div>
                <button className={style.btnBlockenu}>Explore Menu</button>
              </div>

              <div className={style.blockmenuItems}>
                <div className={style.imgMainDishes}></div>
                <div className={style.blockmenuText}>
                  <h1>Main Dishes</h1>
                  <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                </div>
                <button className={style.btnBlockenu}>Explore Menu</button>
              </div>

              <div className={style.blockmenuItems}>
                <div className={style.imgDrinks}></div>
                <div className={style.blockmenuText}>
                  <h1>Drinks</h1>
                  <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                </div>
                <button className={style.btnBlockenu}>Explore Menu</button>
              </div>

              <div className={style.blockmenuItems}>
                <div className={style.imgDesserts}></div>
                <div className={style.blockmenuText}>
                  <h1>Desserts</h1>
                  <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                </div>
                <button className={style.btnBlockenu}>Explore Menu</button>
              </div>

            </div>
          </section>
        </div>


        <section className={style.services}>

          <div className={style.servicesTitle}>We also offer unique services for your events </div>

          <div className={style.servicesItemsWrap}>

            <div className={style.servicesItems}>
              <div className={style.imgCaterings}></div>
              <div className={style.servicesText}>
                <h1>Caterings</h1>
                <p>In the new era of technology we look in the future with certainty for life.</p>
              </div>
            </div>

            <div className={style.servicesItems}>
              <div className={style.imgBirthdays}></div>
              <div className={style.servicesText}>
                <h1>Birthdays</h1>
                <p>In the new era of technology we look in the future with certainty for life.</p>
              </div>
            </div>

            <div className={style.servicesItems}>
              <div className={style.imgWeddings}></div>
              <div className={style.servicesText}>
                <h1>Weddings</h1>
                <p>In the new era of technology we look in the future with certainty for life.</p>
              </div>
            </div>

            <div className={style.servicesItems}>
              <div className={style.imgEvents}></div>
              <div className={style.servicesText}>
                <h1>Events</h1>
                <p>In the new era of technology we look in the future with certainty for life.</p>
              </div>
            </div>

          </div>

        </section>
      </main>
    </div>
  )
}
