'use client'
import { useParams } from 'next/navigation';
import style from './id.module.css';
import { useEffect, useState } from 'react';
import storage from '../../../storage/storage'
import Image from 'next/image';

export default function Id() {
  const { id } = useParams();
  const [data, setData] = useState({})

  useEffect(() => {
    const result = storage.filter(elem => elem.id == id)
    setData(result[0])
  }, [id])

  return (
    <div className={style.wrapper}>
      <div className={style.wrapperItem}>
        
          <Image className={style.imgItem} src={data?.img} />
      
        <div className={style.textItem}>
          <h1>{data?.title}</h1>
          <h2>{data?.description}</h2>
          <p>Total:{data?.price}</p>
        </div>
      </div>
    </div>
  )
}
