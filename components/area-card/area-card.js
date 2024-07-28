import { useState } from 'react'
import styles from './area-card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import taipei_img from '@/assets/taipei.jpg'
import taichung_img from '@/assets/taichung.jpg'
import tainan_img from '@/assets/tainan.jpg'
import hualien_img from '@/assets/hua.jpg'
import taitung_img from '@/assets/taitung.jpg'

export default function AreaCard() {
  return (
    <>
      <div className={styles.cardWrapper}>
        <div className={styles.topWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.topImage}
              src={taipei_img}
              width={624}
              height={320}
              alt="taipei"
            />
            <div className={styles.titleWrapper}>
              <h1>台北</h1>
              <p>Taipei</p>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.topImage}
              src={taichung_img}
              width={624}
              height={320}
              alt="taichung"
            />
            <div className={styles.titleWrapper}>
              <h1>台中</h1>
              <p>Taichung</p>
            </div>
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.topImage}
              src={tainan_img}
              width={405}
              height={320}
              alt="taipei"
            />
            <div className={styles.titleWrapper}>
              <h1>台南</h1>
              <p>Tainan</p>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.topImage}
              src={taitung_img}
              width={405}
              height={320}
              alt="taipei"
            />
            <div className={styles.titleWrapper}>
              <h1>台東</h1>
              <p>Taitung</p>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.topImage}
              src={hualien_img}
              width={405}
              height={320}
              alt="hualian"
            />
            <div className={styles.titleWrapper}>
              <h1>花蓮</h1>
              <p>Hualien</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
