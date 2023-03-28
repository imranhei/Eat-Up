import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import dhaka from '../../Images/Locations/dhaka.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default Location = () => {
    const places = [
        'Uttara', 'Airport', 'Khilkhet', 'Mirpur', 'Badda', 'Gulshan', 'Mohakhali', 'Agargaon', 'Old Dhaka', 'Jatrabari', 'ECB', 'Rampura', 'Banani', 'Tejgaon', 'Dhanmondi'
    ]
    return (
        <>
            <h1 className="text-black font-extrabold text-5xl text-center p-16">Select the place where you want to pick or delivery</h1>
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={25}
                slidesPerView={'auto'}
                navigation
                loop= {true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
            >
                {
                    places.map((place) => (
                        <SwiperSlide className="swiper-slide relative">
                            <div className="swiper-slide-image w-40 h-40">
                                <img src={dhaka} alt='{place}' className=" w-full h-full object-cover" />
                            </div>
                            <h1 className="absolute text-white font-extrabold text-3xl bottom-0">{place}</h1>
                        </SwiperSlide>
                    ))
                }
                <br />
                <br />
            </Swiper>
            <style jsx>{`  
                .swiper-slide-active, .swiper-slide-next, .swiper-slide{
                    width: fit-content;
                }   
            `}</style>
        </>
      );
}

/*import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import dhaka from '../../Images/Locations/dhaka.jpg';
SwiperCore.use([Navigation]);

export default function App() {
  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={'auto'}
      navigation
      className="swiper-container"
    >
      <SwiperSlide className="swiper-slide">
        <div className="swiper-slide-image">
          <img src={dhaka} alt='{place}' className=" w-full h-full object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="swiper-slide-image">
          <img src={dhaka} alt='{place}' className=" w-full h-full object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="swiper-slide-image">
          <img src={dhaka} alt='{place}' className=" w-full h-full object-cover" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="swiper-slide-image">
          <img src={dhaka} alt='{place}' className=" w-full h-full object-cover" />
        </div>
      </SwiperSlide>
      
    </Swiper>
    
    </>
  );
}
*/