import style from './menu.module.css';
import Image from 'next/image';
import storage from '../../storage/storage';
import Link from 'next/link';

export default function Menu() {
    return (
        <div className={style.menuWrap}>
            <div className={style.title}>
                <h1>Our Menu</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>
            <div className={style.container}>
                {storage.map(elem => <Link href={`/menu/${elem.id}`}> <div className={style.item}>
                    <div><Image src={elem.img} /></div>
                    <div className={style.containerText}>
                        <h1>{elem.price}</h1>
                        <h2>{elem.title}</h2>
                        <p>{elem.description}</p>
                    </div>
                </div></Link>)}
            </div>
        </div>
    )
}