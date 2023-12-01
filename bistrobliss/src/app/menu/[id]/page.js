'use client'
import { useParams } from 'next/navigation';
// import style from './menu.module.css';
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
    <>
      <div><Image src={data?.img} /></div>
      <h1>{data?.title}</h1>
      <h2>{data?.description}</h2>
      <p>Total:{data?.price}</p>
    </>
  )
}
