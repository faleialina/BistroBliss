
import style from './page.module.css'

export default function HomePage() {
  return (
    <main className={style.main}>
      <section className={style.imgmain}>
        <div className={style.mainText}>
          <h1>Best food for your taste</h1>
          <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
        </div>
        <div className={style.mainBtn}>
          <button>Book A Table</button>
          <button>Explore Menu</button>
        </div>
      </section>

      <section className={style.blockmenu}></section>
      
      <section className={style.services}></section>
    </main>
  )
}
