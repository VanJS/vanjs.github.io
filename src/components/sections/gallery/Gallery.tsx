import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import event_photo_1 from "/gallery/01_event_photo.jpg";
import event_photo_2 from "/gallery/02_event_photo.jpg";
import event_photo_3 from "/gallery/03_event_photo.jpg";
import event_photo_4 from "/gallery/04_event_photo.jpg";
import event_photo_5 from "/gallery/05_event_photo.jpg";
import event_photo_6 from "/gallery/06_event_photo.jpg";    
import event_photo_7 from "/gallery/07_event_photo.jpg";

type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  gridArea?: string;
};

const photos: Photo[] = [
  {
    src: event_photo_1,
    width: 1200,
    height: 800,
    alt: "Community event with people engaging in discussion",
    gridArea: "span 2 / span 1",
  },
  {
    src: event_photo_2,
    width: 1200,
    height: 800,
    alt: "Technical presentation about Infra and GitHub Actions",
    gridArea: "span 1 / span 1",
  },
  {
    src: event_photo_3,
    width: 1600,
    height: 900,
    alt: "VanJS presentation session",
    gridArea: "span 1 / span 1",
  },
  {
    src: event_photo_4,
    width: 800,
    height: 600,
    alt: "Engaged audience at tech meetup",
    gridArea: "span 1 / span 1",
  },
  {
    src: event_photo_5,
    width: 800,
    height: 600,
    alt: "Small group discussion session",
    gridArea: "span 1 / span 1",
  },
  {
    src: event_photo_6,
    width: 1200,
    height: 800,
    alt: "Packed audience at tech conference",
    gridArea: "span 1 / span 2",
  },
  {
    src: event_photo_7,
    width: 1200,
    height: 800,
    alt: "Tech community gathering",
    gridArea: "span 1 / span 1",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="w-full bg-black px-10 py-8 mt-20">
      <div className="mx-auto md:w-[700px] lg:w-[910px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {photos.map((photo, idx) => (
          <div
            key={photo.src}
            className="relative rounded-lg overflow-hidden cursor-pointer group"
            style={{ 
              gridArea: window.innerWidth >= 768 ? photo.gridArea : undefined,
              height: "100%",
              width: "100%"
            }}
            onClick={() => setIndex(idx)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
