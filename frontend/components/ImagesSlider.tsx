import React, { useState } from "react";
import { IImages } from "../types";
import { Arrow } from "./icons";

interface Props {
  images: IImages;
  alt: string;
}

const ImagesSlider = ({ images, alt }: Props) => {
  const [previewIdx, setPreviewIdx] = useState(0);
  const imgsCount = images.data.length;

  const nextImg = () => {
    if (previewIdx === imgsCount - 1) {
      setPreviewIdx(0);
    } else {
      setPreviewIdx((current) => current + 1);
    }
  };

  const prevImg = () => {
    if (previewIdx === 0) {
      setPreviewIdx(imgsCount - 1);
    } else {
      setPreviewIdx((current) => current - 1);
    }
  };

  return (
    <div className="flex items-center gap-2 mt-4 overflow-hidden">
      {imgsCount > 1 && <NextPrev action={prevImg} rotate="rotate-90" />}

      <div className={`flex flex-col items-center gap-2 mx-auto ${imgsCount > 1 ? "basis-5/6" : "basis-full"}`}>
        <div className="rounded-lg w-full flex-1">
          <img
            className="w-full aspect-square rounded-lg"
            src={`/images${images.data[previewIdx].attributes.url}`}
            alt={`${alt} image`}
          />
        </div>

        {imgsCount >  1 && <div className="flex items-center gap-4 overflow-x-auto pb-2">
          {images.data.map((img, idx) => (
            <img
              key={img.attributes.url}
              className={`w-16 aspect-square rounded-md cursor-pointer border-2 border-solid ${previewIdx === idx ? "border-black" : "border-transparent"}`}
              onClick={() => setPreviewIdx(idx)}
              src={`/images${img.attributes.url.replace(
                "/uploads/",
                "/uploads/thumbnail_"
              )}`}
              alt={`${alt} image`}
            />
          ))}
        </div>}
      </div>

      {imgsCount > 1 && <NextPrev action={nextImg} rotate="rotate-[-90deg]" />}
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
  <div className="basis-1/12 cursor-pointer border-2 border-transparent border-solid hover:border-black active:bg-fff active:bg-opacity-70 transition-colors rounded-md" onClick={action}>
    <Arrow className={`w-full h-full pointer-events-none ${rotate}`} />
  </div>
);

export default ImagesSlider;
