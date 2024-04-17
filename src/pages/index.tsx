import Home from '@/components/Home'
import About from '@/components/About'
// import Contact from '@/components/Contact'
// import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import Layout from '@/components/Layout'
import Services from '@/components/Services';
import About2 from '@/components/About2';
import Us from '@/components/Us';
import About3 from '@/components/About3'


export default function HomePage() {
  return (
    <Layout>
      <Home />
      <About3 />
      {/* <About />
      <About2 /> */}
      <Services />
      <Projects />
      <Us />
    </Layout>
  );
}
