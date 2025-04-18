'use client';
import styles from './Areas.module.css';
import Link from 'next/link';

const cardData = [
  {
    title: 'قالیشویی شرق تهران',
    text: 'پوشش دهی سراسری در تمامی مناطق شرق تهران',
    link: '/carpet-cleaning-east-tehran',
  },
  {
    title: 'قالیشویی غرب تهران',
    text: 'پوشش دهی سراسری در تمامی مناطق غرب تهران',
    link: '/carpet-cleaning-west-tehran',
  },
  {
    title: 'قالیشویی شمال تهران',
    text: 'پوشش دهی سراسری در تمامی مناطق شمال تهران',
    link: '/carpet-cleaning-north-tehran',
  },
  {
    title: 'قالیشویی جنوب تهران',
    text: 'پوشش دهی سراسری در تمامی مناطق جنوب تهران',
    link: '/carpet-cleaning-south-tehran',
  },
  {
    title: 'قالیشویی مرکز تهران',
    text: 'پوشش دهی سراسری در تمامی مناطق مرکز تهران',
    link: '/carpet-cleaning-center-tehran',
    center: true,
  },
];

export default function AreasClient() {
  return (
    <div className={styles.areasWrapper}>
      <div className={styles.imageBox}>
        <img src="/images/area.webp" alt="سرویس دهی تهران" />
      </div>

      <div className={styles.cardsGrid}>
        {cardData.map((card, index) => {
          const cardClass = `${styles.card} ${card.center ? styles.centerCard : ''}`;
          return (
            <Link href={card.link} key={index} className={cardClass}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
