import type { NextPage } from 'next';
import _ from 'lodash';

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Lodash version: "{_.VERSION}"</p>
    </>
  );
};

export default Home;
