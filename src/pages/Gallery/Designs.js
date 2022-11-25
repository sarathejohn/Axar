import React from "react";
import Images from "../../assets/img";
import Hero from "../../components/common/Hero";
import ThickLine from "../../components/common/lines/ThickLine";
import SubTitle from "../../components/common/SubTitle";
import HouseVideos from "./galleryComponents/HouseVideos";

function Designs() {
  return (
    <div>
      <Hero
        homeImage={Images.hero4}
        image={Images.videoMain}
        title={"Designs"}
        subTitle={"Designs"}
        description1={
          "There are four key features of inclusion which can be used to set expectations and evaluate inclusive practice in schools and early learning and childcare settings. These are present, participating, achieving and supported."
        }
        description2={
          "Contractors often need to make quick decisions or come up with creative solutions. Having a diverse group of individuals can bring up different perspectives that may lead to faster resolutions. This innovation can help employers outperform other companies."
        }
      />
      <div>
        <div className="mx-4 my-14 lg:mx-28 lg:my-14 ">
          <div className="flex flex-col gap-6">
            <SubTitle text={"Design Gallery"} />
            <ThickLine />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
              <HouseVideos />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designs;
