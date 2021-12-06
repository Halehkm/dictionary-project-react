import axios from "axios";
import { useEffect, useState } from "react";
export default function Photos(props) {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const apiKey = "563492ad6f917000010000010c294ee88ea9435f8bfc5c3924c62687";
    const apiUrl = `https://api.pexels.com/v1/search?query=${props.submitedKeyWord}&per_page=6`;
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handlePictures);
  }, [props.submitedKeyWord]);

  function handlePictures(response) {
    setPhotos(response.data.photos);
    setLoading(false);
  }

  if (loading) {
    return <p>Searching for pretty pictures...</p>;
  }

  return (
    <div className="Photos row">
      {photos.map(function (photo, index) {
        return (
          <div key={index} className="col-4">
            <img
              src={photo.src.landscape}
              alt="{props.submitedKeyWord}"
              className="img-fluid"
            />
          </div>
        );
      })}
    </div>
  );
}
