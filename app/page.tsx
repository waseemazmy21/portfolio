import Intro from '@/components/Intro';
import SectionDivider from '@/components/SectionDivider';
import About from '@/components/About';

const Home = () => {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
};

export default Home;
