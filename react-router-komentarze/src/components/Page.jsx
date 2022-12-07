import PhotoForm from "./PhotoForm";
import { useSearchParams } from "react-router-dom";
import { useImageContext } from "../context/ImagesProvider";
import { Link } from "react-router-dom";

export default function Page() {
  const [params] = useSearchParams();

  let { images } = useImageContext();
  let currentIndex = Number(params.get('index'));
  let photoObj = images.find(img => img.index == currentIndex);

  return (
    <div className="main-view">
      <PhotoForm photoProps={ photoObj }/>
      <div className="arrows">
        { currentIndex != 0 ? 
          <Link to={`/images?index=${currentIndex-1}`}> 
            <div className="arrow"> &larr; </div> 
          </Link>
          : <div></div> }
        { currentIndex != images.length - 1 ? 
          <Link to={`/images?index=${currentIndex+1}`}> 
            <div className="arrow"> &rarr; </div> 
          </Link>
          : undefined }
      </div>
    </div>
  )
}