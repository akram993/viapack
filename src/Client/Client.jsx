import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './client.css';
import Client1 from '../assets/home_wallet_client_1.png';
import Client2 from '../assets/home_wallet_client_2.png';
import Client3 from '../assets/home_wallet_client_3.png';
import Client4 from '../assets/home_wallet_client_4.png';
import Client5 from '../assets/home_wallet_client_5.png';
import Client6 from '../assets/home_wallet_client_6.png';

const clients = [
  {
    logo: "Client 1",
    img: Client1,
    url: "https://example.com/client1"
  },
  {
    logo: "Client 2",
    img: Client2,
    url: "https://example.com/client2"
  },
  {
    logo: "Client 3",
    img: Client3,
    url: "https://example.com/client3"
  },
  {
    logo: "Client 4",
    img: Client4,
    url: "https://example.com/client4"
  },
  {
    logo: "Client 5",
    img: Client5,
    url: "https://example.com/client5"
  },
  {
    logo: "Client 6",
    img: Client6,
    url: "https://example.com/client6"
  }
];

const Client = () => {
  return (
    <div className="bg-white py-12 relative">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0ea298]">
            Clients & Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in our achievements and the trust our clients place in us.
            Here's a glimpse of our journey in numbers.
          </p>
        </div>
        <div className="relative">
          <Swiper
            spaceBetween={40}
            slidesPerView={5}
            breakpoints={{
              768: {
                slidesPerView: 3
              },
              1024: {
                slidesPerView: 5
              }
            }}
            className="client-slider"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <a href={client.url} target="_blank" rel="noopener noreferrer">
                  <div className="border-b-2 transition-colors client-image">
                    <img src={client.img} alt={client.logo} className="h-16 mx-auto mb-4" />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Client;