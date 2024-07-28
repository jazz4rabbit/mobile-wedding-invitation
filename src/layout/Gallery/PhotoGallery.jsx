import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import './style.css'
import images from '@/layout/Gallery/Images';

const PhotoGallery = () => {
  const smallItemStyles = {
    cursor: 'pointer',
    objectFit: 'contain',
    // width: '100px',
    // height: '150px',
  };


  const options = {
    imageClickAction: 'next',
    tapAction: 'next',
    initialZoomLevel: 'fit',
    secondaryZoomLevel: 'fit',
    maxZoomLevel: 'fit',


    // arrowPrev: false,
    // arrowNext: false,
    // zoom: false,
    // close: false,
    // counter: false,
    // bgOpacity: 0.2,
    // padding: { top: 20, bottom: 40, left: 100, right: 100 },
    // imageClickAction: 'next'
    // doubleTapAction: false,
    wheelToZoom: false,
    pinchToClose: false,
    // zoomEl: false,
    // maxSpreadZoom: 1,
  }

  return (
    <Gallery options={options}>
      <div
        style={{
          display: 'grid',
          // gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: 2,
          gridAutoFlow: 'dense',
        }}>
        {images.map((image, index) => {
          return (
            <Item
              key={index}
              cropped
              original={image.source}
              thumbnail={image.source}
              width={image.width}
              height={image.height}
            >
              {({ ref, open }) => (
                <img
                  className='border-4 rounded-lg border-transparent'
                  style={{
                    cursor: 'pointer',
                    objectFit: 'contain',
                    // width: '100px',
                    // height: '150px',
                    // gridColumn: image.styles ? image.styles.gridColumn : undefined,
                    gridRow: image.styles ? undefined : '2 span',
                    // height: '100%',
                  }}
                  alt={image.alt}
                  src={image.source}
                  ref={ref}
                  onClick={open}
                />
              )}
            </Item>
          );
        })}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;