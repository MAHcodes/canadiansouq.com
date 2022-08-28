import React, { useState } from "react";
import { IImages } from "../types";
import { Arrow } from "./icons";

interface Props {
  images: IImages;
  alt: string;
}

const ImagesSlider = ({ images, alt }: Props) => {
  const [previewIdx, setPreviewIdx] = useState(0);

  const nextImg = () => {
    if (previewIdx === images.data.length - 1) {
      setPreviewIdx(0);
    } else {
      setPreviewIdx((current) => current + 1);
    }
  };

  const prevImg = () => {
    if (previewIdx === 0) {
      setPreviewIdx(images.data.length - 1);
    } else {
      setPreviewIdx((current) => current - 1);
    }
  };

  return (
    <div className="flex items-stretch gap-2 mt-4 overflow-hidden">
      <NextPrev action={prevImg} rotate="rotate-90" />

      <div className="basis-5/6 flex flex-col items-center gap-2">
        <div className="rounded-lg w-full flex-1">
          <img
            className="w-full aspect-square rounded-lg"
            src={`/images${images.data[previewIdx].attributes.url}`}
            alt={`${alt} image`}
          />
        </div>

        <div className="flex items-center gap-4 overflow-x-auto">
          {images.data.map((img, idx) => (
            <img
              className="w-16 aspect-square rounded-md cursor-pointer"
              onClick={() => setPreviewIdx(idx)}
              src={`/images${img.attributes.url.replace(
                "/uploads/",
                "/uploads/thumbnail_"
              )}`}
              alt={`${alt} image`}
            />
          ))}
        </div>
      </div>

      <NextPrev action={nextImg} rotate="rotate-[-90deg]" />
    </div>
  );
};

const NextPrev = ({
  action,
  rotate,
}: {
  action: () => void;
  rotate: string;
}) => (
  <div className="basis-1/12 cursor-pointer hover:bg-black active:bg-black active:bg-opacity-10 hover:bg-opacity-10 transition-colors rounded-md" onClick={action}>
    <Arrow className={`w-full h-full pointer-events-none ${rotate}`} />
  </div>
);

export default ImagesSlider;
