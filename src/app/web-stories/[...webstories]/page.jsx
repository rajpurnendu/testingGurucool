// import bird from "../../../../public/assets/web-stories-assets/bird.jpg";
// import dog from "../../../../public/assets/web-stories-assets/dog.jpg";
// import cover from "../../../../public/assets/web-stories-assets/cover.jpg";
// import rabbit from "../../../../public/assets/web-stories-assets/rabbit.jpg";
"use client";
import Image from "next/image";
import { getAllWebstoriesq, getSingleStory } from "@/lib/data";
// import { Suspense, useEffect, useState } from "react";
import { Suspense, useEffect, useState } from "react";
import { GET_SINGLE_WEB_STORY } from "@/lib/apilinks";
import Script from "next/script";

const WebStoryPage = ({ params }) => {
  const [webStory, setWebStory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { webstories } = params;
  const decodedString = decodeURIComponent(webstories);
  // const webStory = await getAllWebstoriesq(decodedString);
  // console.log(webStory);

  //   const data = getSingleStory(decodedString);
  // console.log(data);
  useEffect(() => {
    // Set overflow to hidden with !important when the component mounts or when decodedString changes
    document.body.style.setProperty("overflow", "hidden", "important");

    const getSingleStory = async () => {
      try {
        const response = await fetch(GET_SINGLE_WEB_STORY(decodedString), {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (!data?.webStory?.webStorySlides) {
          throw new Error("Missing webStorySlides in response data");
        }
        setWebStory(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getSingleStory();

    // Reset overflow when the component unmounts
    // return () => {
    //   document.body.style.overflow = "";
    // };

    return () => {
      document.body.style.setProperty("overflow", "scroll", "important");
      // document.documentElement.style.setProperty("overflow", "scroll", "important");
      // Logic to remove specific script tags
      const scriptURLs = [
        "https://cdn.ampproject.org/v0.js",
        "https://cdn.ampproject.org/v0/amp-video-0.1.js",
        "https://cdn.ampproject.org/v0/amp-story-1.0.js",
      ];

      scriptURLs.forEach((url) => {
        const script = document.querySelector(`script[src="${url}"]`);
        if (script) {
          script.remove();
        }
      });
    };
  }, [decodedString]);

  console.log("Web stories>>>>>>>>>>>>>", webStory);

  // console.log(webStory);
  // const webStories = [
  //   {
  //     id: "page1",
  //     title: "First Page Web Story",
  //     img: cover,
  //   },
  //   {
  //     id: "page2",
  //     title: "Second Page Web Story",
  //     img: dog,
  //   },
  //   {
  //     id: "page3",
  //     title: "Third Page Web Story",
  //     img: bird,
  //   },
  //   {
  //     id: "page4",
  //     title: "Fourth Page Web Story",
  //     img: rabbit,
  //   },
  // ];
  // console.log(webStory);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    // <Suspense fallback={<h1>Loading...</h1>}>
    <div>
      <amp-story
        standalone
        title="Joy of Pets"
        publisher="Gurucool"
        // publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
        // poster-portrait-src={webStories[0].img}
      >
        {webStory &&
          webStory?.webStory?.webStorySlides.map((curr, index) => {
            // console.log(curr?.backgroundImages?.url);
            return (
              <amp-story-page key={index} id={index}>
                <amp-story-grid-layer template="fill">
                  <amp-img
                    src={curr?.backgroundImages?.url}
                    width="720"
                    height="1280"
                    // layout="responsive"
                    alt={"asaasa"}
                  ></amp-img>
                </amp-story-grid-layer>
                
              </amp-story-page>
            );
          })}

        {/* Image with link */}
        {/* <amp-story-page id="dogs" style={{ background: "white" }}>
          <amp-story-grid-layer template="fill"> */}
            {/* <amp-img
              src={"https://images.unsplash.com/photo-1704957234554-686d9e700e21?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              width="360px"
              height="650px"
              layout="responsive"
              alt="aaaaaaaaaaaa"
            ></amp-img> */}
          {/* </amp-story-grid-layer>
        </amp-story-page> */}
        {/* <amp-story-page id="dogs">
          <amp-story-grid-layer template="fill">
            <amp-img
              src={dog.src}
              width="360px"
              height="650px"
              layout="responsive"
              alt="aaaaaaaaaaaa"
            ></amp-img>
          </amp-story-grid-layer>
        </amp-story-page> */}
      </amp-story>
      <Script async src="https://cdn.ampproject.org/v0.js"></Script>
      <Script
        async
        custom-element="amp-video"
        src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
      ></Script>
      <Script
        async
        custom-element="amp-story"
        src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
      ></Script>
    </div>
    // </Suspense>
  );
};

export default WebStoryPage;
