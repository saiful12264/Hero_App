import React from "react";
import Banner from "../Compoent/Banner";
import Trust from "../Compoent/Trust";

import Treding from "../Compoent/Treding";
import useApp from "../Hook/useApp";
import GlowingCubeLoader from "../Compoent/GlowingCubeLoader";

const Home = () => {
  const { app, error, loading } = useApp();
  return (
    <div>
      {loading ? (
        <GlowingCubeLoader></GlowingCubeLoader>
      ) : (
        <div>
          <Banner></Banner>
          <Trust></Trust>
          <Treding app={app}></Treding>
        </div>
      )}
    </div>
  );
};

export default Home;
