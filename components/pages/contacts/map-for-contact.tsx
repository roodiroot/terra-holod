"use client";

import { YMaps, Map, ZoomControl, Placemark } from "@pbe/react-yandex-maps";
const MapForContact = () => {
  return (
    <div className="h-full shadow-lg relative overflow-hidden mt-8 aspect-square lg:mt-0 lg:aspect-auto bg-gray-100 lg:col-span-2 rounded-[40px]">
      <YMaps
        query={{
          lang: "ru_RU",
        }}
      >
        <div className="absolute inset-0">
          <Map
            className="w-full h-full"
            defaultState={{
              center: [54.208233, 45.179294],
              zoom: 15,
            }}
          >
            <ZoomControl options={{ position: { top: 10, left: 5 } }} />
            <Placemark geometry={[54.208233, 45.179294]} />
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default MapForContact;
