import React, { useState } from 'react'
import styles from './Faq.module.css'

const Faq = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (itemId) => {
    setHoveredItem(itemId);
  };

  const faqs = [
    {
      id: 1,
      question: 'Үйл ажиллагаа хэзээ зохион байгуулагдах вэ?',
      answer: '2023.10.02-с 2023.11.20-ны хооронд зохион байгуулагдана.'
    },
    {
      id: 2,
      question: 'Багт хэдэн гишүүн байх вэ?',
      answer: 'Баг тус бүр 2-4 гишүүнтэй байна.'
    },
    {
      id: 3,
      question: 'Үйл ажиллагаа хэзээ зохион байгуулагдах вэ?',
      answer: 'ХААН Банкны төв оффис буюу Хаан цамхагт болно'
    },
    {
      id: 4,
      question: 'Ямар хэлбэрээр зохион байгуулагдах вэ?',
      answer: 'Биет болон цахим хэлбэрээр зохион байгуулагдана.'
    },
    {
      id: 5,
      question: 'Нэмэлт мэдээлэл авах бол яаж холбогдох вэ?',
      answer: 'hackathon@khanbank.com хаягаар холбогдох боломжтой.'
    }
  ]

  return (
    <>
      <div className={styles.faq}>
        <div className={styles.header}>
          <h1>Faq</h1>
          <h3>Түгээмэл асуулт хариулт</h3>
        </div>
        <div className={styles.main}>
          <div className={styles.top}>
            {faqs.map((faq, index) => (
              <div 
                className={styles.box}
                style={{ 
                  backgroundColor: hoveredItem === index ? '#F05A28' : '',
                  color: hoveredItem === index ? '#fff' : '',
                }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                ?
              </div>
            ))}
          </div>
          <div className={styles.bottom}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.card} style={{ display: hoveredItem === index ? 'block' : 'none' }}>
                <h3>{faq.question}</h3>
                {faq.answer}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq