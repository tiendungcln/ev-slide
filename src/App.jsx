import React, { useEffect, useState } from 'react'
import Background from './components/Background/Background'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  //Khai báo data để lấy dữ liệu qua Hero
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ]
  //3 nút bấm để chuyển đổi hình
  const [heroCount, setHeroCount] = useState(2);
  //video chạy hoặc dừng
  const [playStatus, setPlayStatus] = useState(false);
  //mỗi 3s sẽ tự chuyển hình ảnh 1-3-2-1
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
    }, 3000)
  }, [])

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </>

  )
}

export default App