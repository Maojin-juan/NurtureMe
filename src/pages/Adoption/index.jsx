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



        <section className="container pt-[40px] pb-[50px]">
          <div className="w-[918px] flex justify-between mx-auto mb-[60px]">
            <div className="flex items-center">
              <p className="font-bold text-fs-2 text-primary-1">類別：
              </p>
              <div>
              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-primary-2 border-2 border-primary-2 rounded-3xl text-fs-3 py-6 px-10 text-center inline-flex items-center w-[320px] font-bold justify-between hover:bg-primary-2 hover:text-white" type="button">
                <span>全部 </span>
                <span className="border border-primary-2  rounded-full items-center justify-center p-2.5">
                  <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </span>
              </button>

              <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                  </ul>
              </div>
              </div>
            </div>
            <div className="flex items-center">
              <p className="font-bold text-fs-2 text-primary-1">姓別：
              </p>
              <div>
              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-primary-2 border-2 border-primary-2 rounded-3xl text-fs-3 py-6 px-10 text-center inline-flex items-center w-[320px] font-bold justify-between hover:bg-primary-2 hover:text-white" type="button">
                <span>全部 </span>
                <span className="border border-primary-2  rounded-full items-center justify-center p-2.5">
                  <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </span>
              </button>

              <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                  </ul>
              </div>
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
          className={`px-4 py-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <img src={arrow_left} alt="" />
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
          className={`px-4 py-2 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <img src={arrow_right} alt="" />
        </button>
      </div>
        </section>
      </div>

      
    
    </>
  );
}