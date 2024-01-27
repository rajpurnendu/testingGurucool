// import bird from "../../../../public/assets/web-stories-assets/bird.jpg";
// import dog from "../../../../public/assets/web-stories-assets/dog.jpg";
// import cover from "../../../../public/assets/web-stories-assets/cover.jpg";
// import rabbit from "../../../../public/assets/web-stories-assets/rabbit.jpg";
import Image from "next/image";
import { getAllWebstoriesq, getSingleStory } from "@/lib/data";
// import { Suspense, useEffect, useState } from "react";
import { GET_SINGLE_WEB_STORY } from "@/lib/apilinks";


const WebStoryPage = async ({ params }) => {
  // const [webStory, setWebStory] = useState();

  const { webstories } = params;
  const decodedString = decodeURIComponent(webstories);
  const webStory = await getAllWebstoriesq(decodedString);
  console.log(webStory);

  //   const data = getSingleStory(decodedString);
  // console.log(data);
  // useEffect(() => {
  //   const getSingleStory = async (query) => {
  //     // const requestOptions = {
  //     //   method: 'GET',
  //     //   headers: {
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     // };

  //     try {
  //       // console.log("Start");
  //       // console.log(query);
  //       const response = await fetch(GET_SINGLE_WEB_STORY(query));
  //       if (response.ok) {
  //         const data = await response.json();
  //         setWebStory(data?.webStory?.webStorySlides);
  //         console.log(".....|",data);
  //       } else {
  //         throw new Error(
  //           `Error fetching data: ${response.status} ${response.statusText}`
  //         );
  //       }
  //     } catch (error) {
  //       throw new Error(`Failed to fetch Single blog data: ${error}`);
  //     }
  //   };

  //   // console.log("............");

  //   getSingleStory(decodedString);
  // }, [decodedString]);
  // console.log("Web stories",webStory);

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

  return (
    <div>
      <amp-story
        standalone
        title="Joy of Pets"
        publisher="Gurucool"
        // publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
        // poster-portrait-src={webStories[0].img}
      >
        {webStory &&
          webStory?.map((curr, index) => {
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
                <amp-story-grid-layer template="vertical">
                  <h1 className="text-[2.875em] text-white font-bold leading-normal">
                    {"asdffg"}
                  </h1>
                </amp-story-grid-layer>
              </amp-story-page>
            );
          })}

        {/* Image with link */}
        <amp-story-page id="dogs" style={{ background: "white" }}>
          <amp-story-grid-layer template="fill">
            {/* <amp-img
              src={"https://images.unsplash.com/photo-1704957234554-686d9e700e21?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              width="360px"
              height="650px"
              layout="responsive"
              alt="aaaaaaaaaaaa"
            ></amp-img> */}
          </amp-story-grid-layer>
        </amp-story-page>
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
    </div>
  );
};

export default WebStoryPage;
