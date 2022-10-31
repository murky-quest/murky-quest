import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/suggestions">Suggestions</Link>
    </>
  );
};

export default Home;
