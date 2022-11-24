import React from 'react'
import Card from '../Card/Card'
import './CardsLibrary.css'

const CardsLibrary = () => {
  const backgroundsArr = ['https://img.freepik.com/premium-photo/christmas-greeting-card-happy-new-year-christmas-ornaments-red-background-merry-christmas-card-space-text_138888-1006.jpg',
  "https://torange.biz/photofxnew/137/HD/red-christmas-card-background-137566.jpg", "https://365psd.com/images/previews/6d1/christmas-card-background-vector-7-33748.jpg",
  "https://static2.bigstockphoto.com/8/2/3/large1500/328243201.jpg", "https://www.designswan.com/wp-content/uploads/2008/xmas/xmastrees_004.jpg",
"https://365psd.com/images/listing/974/christmas-card-2013-vector-2-33761.jpg", "https://toppng.com/uploads/preview/christmas-card-background-moldura-para-cartao-de-natal-115634218441j42dnboi3.png" ]

  return (
    <div className='cards-library'>
{backgroundsArr.map((background) => {
  return <Card background={background}/>
})}
    </div>
  )
}

export default CardsLibrary