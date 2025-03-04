import { Helmet} from "react-helmet-async";
import React from 'react'
import { useState } from "react"
import banner from './banner.jpg'
import BG1 from './BG1.png'
import BG2 from './BG2.png'
import BG3 from './BG3.png'
import wave1 from './waveWhite2.svg'
import wave4 from './wave4.svg'
import arrow_left from './Previous.png'
import arrow_right from './Next.png'
import animalData from './animalData.json'


export default function Adoption() {
  //下拉選單
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);

// 篩選條件
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedGender, setSelectedGender] = useState("全部");

  // 處理選擇類別
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCategoryOpen(false); // 關閉選單
  };


  // 處理選擇性別
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    setGenderOpen(false); // 關閉選單
  };

  // **篩選動物數據**
  const filteredData = animalData.filter(animal => {
    return (selectedCategory === "全部" || animal.category === selectedCategory) &&
           (selectedGender === "全部" || animal.gender === selectedGender);
  });


  const itemsPerPage = 9; // 每頁顯示 9 張卡片
  const [currentPage, setCurrentPage] = useState(1);

    // 總頁數
    const totalPages = Math.ceil(animalData.length / itemsPerPage);

    // 計算當前頁面需要顯示的資料
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = animalData.slice(startIndex, endIndex);

  return (
    <>
      <Helmet>
        <title>線上認養列表</title>
        <meta name="description" content="快來包養我" />
      </Helmet>

      <div className="relative h-[496px] mt-[-80px]">
        <img className="w-full h-full object-cover " src={banner} alt="" />
        <img className="absolute bottom-0" src={wave1} alt="" />
        <div className="container">
          <h2 className="absolute top-1/2 text-[80px] font-bold text-white">線上認養</h2>
        </div>
      </div>

      <div className="relative">
        <img className="absolute -z-10" src={BG1} alt="" />
        <img className="absolute bottom-[-320px] -z-10" src={BG3} alt="" />
        <img className="absolute top-1/2 -translate-y-1/2 right-0 -z-10" src={BG2} alt="" />
        <img className="absolute bottom-0" src={wave4} alt="" />


       
        {/* 篩選選單 */}
        
        <section className="container pt-[40px] pb-[50px]">
          <div className="w-[918px] flex justify-between mx-auto mb-[60px]">
             {/* **下拉選單** */}
            <div className="flex items-center">
              <p className="font-bold text-fs-2 text-primary-1">類別：
              </p>
              <div className="relative">
              <button 
              onClick={() => setCategoryOpen(!categoryOpen)}
             className="text-primary-2 border-2 border-primary-2 rounded-3xl text-fs-3 py-6 px-10 text-center inline-flex items-center w-[320px] font-bold justify-between hover:bg-primary-2 hover:text-white" type="button">
                <span>{selectedCategory} </span>
                <span className="border border-primary-2  rounded-full items-center justify-center p-2.5">
                  <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </span>
              </button>

              {categoryOpen && (
            
            <ul className="absolute z-30 mt-2 bg-white text-primary-2 rounded-3xl text-fs-3 text-center w-[320px] font-bold">
              {["全部", "狗狗", "貓咪"].map((option) => (
                <li key={option}>
                  <button
                    className="block w-full px-4 py-2 hover:bg-gray-200 text-left"
                    onClick={() => {
                      setSelectedCategory(option);
                      setCategoryOpen(false); // 選擇後關閉選單
                    }}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
              </div>
            </div>
            <div className="flex items-center">
              <p className="font-bold text-fs-2 text-primary-1">姓別：
              </p>
              <div className="relative">
              <button 
               onClick={() => setGenderOpen(!genderOpen)}
               className="text-primary-2 border-2 border-primary-2 rounded-3xl text-fs-3 py-6 px-10 text-center inline-flex items-center w-[320px] font-bold justify-between hover:bg-primary-2 hover:text-white" type="button">
                <span>{selectedGender} </span>
                <span className="border border-primary-2  rounded-full items-center justify-center p-2.5">
                  <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </span>
              </button>

              {genderOpen && (
                   <ul className="absolute z-30 mt-2 bg-white text-primary-2 rounded-3xl text-fs-3 text-center w-[320px] font-bold">
              {["全部", "弟弟", "妹妹"].map((option) => (
                <li key={option}>
                  <button
                    className="block w-full px-4 py-2 hover:bg-gray-200 text-left"
                    onClick={() => {
                      setSelectedGender(option);
                      setGenderOpen(false); // 選擇後關閉選單
                    }}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
                )}
              </div>
            </div>
          </div>

          <div className="container grid grid-cols-12 gap-6">
            {currentData.map((animal, index) => (
              <div key={index} className="hover:border-primary-5 hover:border-4 hover:cursor-pointer  col-span-4 max-w-sm rounded-[20px] overflow-hidden shadow-lg h-[523px] bg-white">
                <div className="relative">
                  <img className="w-full h-[280px] " src={animal.image} alt={`Image of ${animal.name}`} />
                  <div className="absolute inset-0 bg-[#27337B99] bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <button className="rounded-[24px] bg-white text-primary-2 text-[32px] px-10 py-6 font-bold">
                    點擊查看
                  </button>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{animal.name}</div>
                  <p className="text-gray-700 text-base">{animal.gender}．{animal.age}歲．{animal.breed}</p>
                </div>
                <div className="px-6">
                  {animal.tags.map((tag, idx) => (
                    <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`#${tag}`}</span>
                  ))}
                </div>
                <div className="flex px-6">
                  <div className="w-full bg-gray-300 h-4 rounded-full">
                    <div className="bg-green-500 h-4 rounded-full" 
                    style={{width: `${animal.sponsorship_progress}%`}}></div>
                  </div>
                  <p >{animal.sponsorship_progress}%</p>
                </div>
                <div className="flex justify-between px-6">
                  <p>貧困</p>
                  <p>小康</p>
                  <p>富足</p>
                </div>
                <div className="flex justify-between px-6 pt-2">
                  <p>NTD {animal.sponsorship.amount}</p>
                  <p>{animal.sponsorship.sponsors}人</p>
                </div>
              </div>
            ))}
          </div>
          {/* **分頁按鈕** */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          className={`px-4 py-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200 hover:rounded-full"}`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <img src={arrow_left} alt="Previous Page" />
        </button>

        {/* 顯示頁碼按鈕 */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`px-4 py-2 border rounded-full ${currentPage === page ? "bg-primary-2 text-white" : "hover:bg-gray-200"}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          className={`px-4 py-2 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200 hover:rounded-full"}`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <img src={arrow_right} alt="Next Page" />
        </button>
      </div>
        </section>
      </div>

      
    
    </>
  );
}