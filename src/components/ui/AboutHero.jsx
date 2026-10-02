import fullpageModule from '@fullpage/react-fullpage';
const ReactFullpage = fullpageModule.default ?? fullpageModule;
import video2 from "../../assets/video2.mp4"
import video3 from "../../assets/video3.mp4"

const AboutHero = () => {
    

  <ReactFullpage
    //fullpage options
    licenseKey = {'gplv3-license'}
    scrollingSpeed = {1000} /* Options here */

    render={({ }) => {
      return (
        <ReactFullpage.Wrapper>
         <div className="section">
             <div className="bg-red-500 h-screen relative">
               <div className= "">
            <h1 className=" max-w-150 mx-10 text-white mb-3 font-medium text-4xl text-center"></h1>
            <button classname="px-5 py-3 bg-blue-500 rounded-full text-white">
                   Our Mission
            </button>
               </div>

               <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop src={video2} type="video/mp4">

               </video>   
              </div> 
           </div>



        </ReactFullpage.Wrapper>
      );
    }}
  />
;
}

export default AboutHero;