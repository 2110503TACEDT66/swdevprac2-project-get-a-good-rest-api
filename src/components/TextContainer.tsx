import React from 'react'
import TextContent from '@/components/TextContent'
import TextHeader from '@/components/TextHeader'

const TextContainer = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <TextHeader>
        <h2>
            Our Service
        </h2>
        </TextHeader>
      <TextContent>
        <p>
           พวกเราคือ ธุรกิจอาบ อบ นวด ที่ให้บริการด้านการดูแลสุขภาพ และความงาม โดยมีทีมงานที่มีประสบการณ์และคุณภาพ พร้อมให้บริการท่านอย่างเป็นมืออาชีพ เพราะว่าพวกเราเชื่อว่าการดูแลสุขภาพ และความงาม คือสิ่งสำคัญที่ทุกคนควรใส่ใจ
        </p>
      </TextContent>
    </div>
  )
}

export default TextContainer