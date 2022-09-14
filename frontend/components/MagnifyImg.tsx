import React from "react";

const MagnifyImg: React.FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = (props) => {
  const zoom = (e: any) => {
    let offsetX, offsetY;

    try {
      if (e.nativeEvent.offsetX) {
        offsetX = e.nativeEvent.offsetX;
      } else {
        offsetX = e.nativeEvent.touches[0].pageX;
      }

      if (e.nativeEvent.offsetY) {
        offsetY = e.nativeEvent.offsetY;
      } else {
        offsetY = e.nativeEvent.touches[0].pageY;
      }
    } catch (err) {
      console.error(err);
    }

    const x = (offsetX / e.currentTarget.offsetWidth) * 100;
    const y = (offsetY / e.currentTarget.offsetHeight) * 100;
    e.currentTarget.style.backgroundPosition = x + "% " + y + "%";

    // credit for carl on codepen.io: https://codepen.io/carl_was_here/pen/yZxMqV
  };

  return (
    <figure
      style={{ backgroundImage: `url(${props.src})` }}
      className="rounded-lg w-full flex-1 overflow-hidden cursor-zoom-in relative"
      onMouseMove={zoom}
      onTouchMove={zoom}
    >
      <img
        className={`transition-opacity block w-full hover:opacity-0 ${props.className}`}
        {...props}
      />
    </figure>
  );
};

export default MagnifyImg;
