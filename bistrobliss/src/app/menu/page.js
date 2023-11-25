import style from './menu.module.css';
import Image from 'next/image';
import img1 from './assets/img1.svg';
import img2 from './assets/img2.svg';
import img3 from './assets/img3.svg';
import img4 from './assets/img4.svg';
import img5 from './assets/img5.svg';
import img6 from './assets/img6.svg';
import img7 from './assets/img7.svg';
import img8 from './assets/img8.svg';

export default function Menu() {
    const array = [{ id: 1, title: 'Fried Eggs', description: 'Made with eggs, lettuce, salt, oil and other ingredients.', price: '$ 9.99', img: img1 },
    { id: 2, title: 'Hawaiian Pizza', description: 'Made with eggs, lettuce, salt, oil and other ingredients.', price: '$ 15.99', img: img2 },
    { id: 3, title: 'Martinez Cocktail', description: 'Made with eggs, lettuce, salt, oil and other ingredients.', price: '$ 7.25', img: img3 },
    { id: 4, title: 'Butterscotch Cake', description: 'Made with eggs, lettuce, salt, oil and other ingredients.', price: '$ 20.99', img: img4 },
    { id: 5, title: 'Mint Lemonade', description: 'Made with eggs, lettuce, salt, oil and other ingredients.', price: '$ 5.89', img: img5 },
    { id: 6, title: 'Chocolate Icecream', description: 'Made with eggs, lettuce, salt, oil and other ingredients.', price: '$ 18.05', img: img6 },
    { id: 7, title: 'Cheese Burger', description: 'Made with eggs, lettuce, salt, oil and other ingredients.', price: '$ 12.55', img: img7 },
    { id: 8, title: 'Classic Waffles', description: 'Made with eggs, lettuce, salt, oil and other ingredients.', price: '$ 12.99', img: img8 }
    ]
    return (
        <div className={style.menuWrap}>
            <div className={style.title}>
                <h1>Our Menu</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>
            <div className={style.container}>
                {array.map(elem => <div className={style.item}>
                    <div><Image src={elem.img} /></div>
                    <div className={style.containerText}>
                        <h1>{elem.price}</h1>
                        <h2>{elem.title}</h2>
                        <p>{elem.description}</p>
                    </div>
                </div>)}
            </div>
        </div>
    )
}