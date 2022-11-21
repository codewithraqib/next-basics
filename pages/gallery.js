import React, { useEffect, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import YouTube from "react-youtube";
import { callApi } from "../api/callApi";
import AppData from "../AppData";
import Layout from "../componets/Layout";

const Default = () => {
  const [tabs, setTabs] = useState([
    { id: 0, name: "Images", active: true },
    { id: 1, name: "Videos", active: false },
  ]);

  const [images, setImages] = useState([]);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    let images = [];
    let videos = [];
    callApi({
      url: AppData.BASE_URL + "api/v1/gallery",
      method: "GET",
      callback: (result) => {
        if (
          result &&
          result.data &&
          result.data.data &&
          result.data.data.length > 0
        ) {
          setImages(result.data.data);

          result.data.data.map((item) => {
            if (item.type === "image") {
              images.push({
                original: AppData.BASE_URL + "upload/gallery/" + item.image,
                thumbnail: AppData.BASE_URL + "upload/gallery/" + item.image,
                caption: item.title,
                desc: item.description,
                id: item.id,
              });
            } else {
              videos.push({
                url: item.video_url,
                caption: item.title,
                desc: item.description,
                id: item.id,
              });
            }
          });

          setImages(images);
          setVideos(videos);
        }
      },
    });
  }, []);

  const onTabClick = (tab) => {
    let newTabs = [];
    tabs.map((oldTab) => {
      if (oldTab.id == tab.id) {
        newTabs.push({ ...oldTab, active: true });
      } else newTabs.push({ ...oldTab, active: false });
    });

    setTabs(newTabs);
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <Layout>
      <div className="main-img-container content-wrapper gallery-container">
        <div className="gallery-tabs">
          {tabs.map((tab, key) => {
            return (
              <div
                key={key}
                className={tab.active ? "tab active" : "tab"}
                onClick={() => onTabClick(tab)}
              >
                {tab.name}
              </div>
            );
          })}
        </div>
        <div>
          {tabs[0].active ? (
            <div className="gallery-tabs">
              <ImageGallery
                lazyLoad={true}
                infinite={true}
                thumbnailPosition="bottom"
                items={images.sort((a, b) => b.id - a.id)}
                autoPlay
                showBullets
                showNav={false}
              />
              {/* {gallerImg.length && (
              <div className="">
                <PhotoAlbum layout="masonry" photos={gallerImg} />
              </div>
            )} */}
            </div>
          ) : (
            <div className="videos-container">
              {videos &&
                videos.length > 0 &&
                videos
                  .sort((a, b) => b.id - a.id)
                  .map((video, key) => {
                    return (
                      <div className="video" key={key}>
                        <YouTube
                          videoId={video.url && video.url.split("v=")[1]}
                          opts={opts}
                          onReady={onReady}
                        />
                      </div>
                    );
                  })}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Default;
