import Banner from './Banner';
import College from './College/Colleges';
import Gallery from './Gallery';
import Research from './Research';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
           <Banner/>
           <div className='my-[190px]'>
           <College />
           <Gallery/>
           <Research/>
           <Reviews/>
           </div>
        </div>
    );
};

export default Home;