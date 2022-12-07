import { createContext, useContext, useEffect, useState } from "react";

const ImageContext = createContext();
export const useImageContext = () => useContext(ImageContext);


export default function ImageProvider({ children }) {
  const imagesBase = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Datapoint2200img.jpg",
      title: "Datapoint 2200",
      desc: "Released in June 1970, the programmable terminal called the Datapoint 2200 is among the earliest known devices that bears significant resemblance to the modern personal computer, with a CRT screen, keyboard, programmability, and program storage.",
      rating: [],
      avg: (rating) => rating.length > 0 ? rating.reduce((rate, acc) => rate+acc) / rating.length : undefined,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/01/Altair_8800_Computer.jpg",
      title: "Altair 8800",
      desc: "Development of the single-chip microprocessor was the gateway to the popularization of cheap, easy to use, and truly personal computers. It was only a matter of time before one such design was able to hit a sweet spot in terms of pricing and performance, and that machine is generally considered to be the Altair 8800, from MITS, a small company that produced electronics kits for hobbyists. ",
      rating: [],
      avg: (rating) => rating.length > 0 ? rating.reduce((rate, acc) => rate+acc) / rating.length : undefined,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Apple-II.jpg/300px-Apple-II.jpg",
      title: "Apple II",
      desc: "Despite slow initial sales, the Apple II's lifetime was about eight years longer than other machines, and so accumulated the highest total sales. By 1985 2.1 million had sold and more than 4 million Apple II's were shipped by the end of its production in 1993.",
      rating: [],
      avg: (rating) => rating.length > 0 ? rating.reduce((rate, acc) => rate+acc) / rating.length : undefined,
    }
  ];
  
  let imagesIndexed = imagesBase
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
  .map((value, index) => {
    value["index"] = index;
    return value
  });
  
  let [images, setImages] = useState(imagesIndexed);
  let getImage = index => images.find(image => image.index == index);
  
  let addContextRate = (index, rate) => {
    setImages(images.map(img => {
      if (img.index == index) {
        img.rating = [...img.rating, rate];
      }
      return img
    }))
  }

  return (
    <ImageContext.Provider value={{ getImage, addContextRate, images }} >
      {children}
    </ImageContext.Provider>
  )
}