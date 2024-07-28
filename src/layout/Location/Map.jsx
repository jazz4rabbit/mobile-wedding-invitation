import data from '@/data.json';
// import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';
import { useScript } from "@uidotdev/usehooks";
import { useEffect } from 'react';

const Map = () => {
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  const { lat, lon } = data.mapInfo;
  const status = useScript(
    `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${ncpClientId}`,
    {
      removeOnUnmount: false,
    }
  );

  useEffect(() => {
    if (typeof window.$$ !== "undefined") {
      const id = document.id("moo");
      id.setStyle("background-color", "var(--green)");
    }

    if (window.naver !== undefined) {
    //     defaultCenter={new navermaps.LatLng(lat, lon)}
      var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(lat, lon),
        zoom: 16
      });

      var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lon),
        map: map
      });

    }


  }, [status]);

  const isReady = status === "ready";

  return (
    <>
      {status === "ready" && (
        // <div id='map' style={{
        //   width: '100%',
        //   height: '300px',
        // }}></div>
        <div id='map' className='w-full h-80'></div>
      )}
    </>
  );


  // const navermaps = useNavermaps();

  // return (
    // <MapDiv
    //   style={{
    //     width: '100%',
    //     height: '300px',
    //   }}>
    //   <NaverMap
    //     defaultCenter={new navermaps.LatLng(lat, lon)}
    //     defaultZoom={16}
    //     // zoomControl={true}
    //     // mapTypeId="normal"
    //     // draggable={false}
    //     // pinchZoom={false}
    //     // scrollWheel={false}
    //     keyboardShortcuts={false}>
    //     <Marker defaultPosition={new navermaps.LatLng(lat, lon)} />
    //   </NaverMap>
    // </MapDiv>
  // );
};

export default Map;
