import fullpageModule from '@fullpage/react-fullpage';
const ReactFullpage = fullpageModule.default ?? fullpageModule;

const AboutHero = () => {
    

  <ReactFullpage
    //fullpage options
    licenseKey = {'gplv3-license'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="bg-red-500 h-screen">
            <p className="">Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="bg-blue-500 h-full">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
;
}

export default AboutHero;