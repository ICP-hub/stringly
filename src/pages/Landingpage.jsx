const Landingpage = () => {
    return (
      <div className="px-4 md:px-0">
        {/* Hero Section */}
        <div className="relative sm:w-full md:w-full">
          <img className="w-full h-auto" src="/heroimg.png" alt="Hero image" />
          <div className="absolute text-white left-[5%] sm:left-[10%] md:left-[20%] top-[30%] w-[90%] max-w-[560px] bg-opacity-50">
            <p className="text-[32px] sm:text-[48px] md:text-[64px] leading-tight">Stringly String your Vibe</p>
            <p className="text-[16px] sm:text-[20px] mt-2">
              Discover Stringly, the premium dating and networking app that blends luxury with cutting-edge technology. Experience unmatched privacy and security while forming meaningful connections.
            </p>
          </div>
        </div>
  
        {/* Heading Section */}
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-center w-full md:w-[768px] font-extrabold text-[24px] sm:text-[36px] leading-tight">
            Discover Our Unique Features
          </h1>
          <p className="text-center w-full md:w-[768px] mt-2">
            Experience unmatched privacy and secure connections today.
          </p>
        </div>
  
        {/* Image Gallery Section */}
        <div className="flex justify-center gap-[20px] sm:gap-[32px] md:gap-[44px] mt-12 flex-wrap">
          <div className="w-full sm:w-[408px] h-[378px] rounded-[16px] bg-cover bg-center" style={{ backgroundImage: `url('/re.png')` }} />
          <div className="w-full sm:w-[408px] h-[378px] rounded-[16px] bg-cover bg-center" style={{ backgroundImage: `url('/er.png')` }} />
          <div className="w-full sm:w-[408px] h-[378px] rounded-[16px] bg-cover bg-center" style={{ backgroundImage: `url('/polo.png')` }} />
        </div>
  
        {/* Connecting Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold leading-tight">Connecting You With Purpose</h2>
          <p className="mt-2 text-gray-600 leading-normal">
            A unique blend of dating and networking experiences.
          </p>
        </div>
  
        {/* Inserted Image */}
        <div className="flex justify-center mt-8">
          <img 
            src="/prof.png" 
            alt="Profile" 
            className="w-full max-w-[1308px] h-auto rounded-[12px]" 
          />
        </div>
  
        {/* Two Images Side by Side Below Inserted Image */}
        <div className="flex justify-center mt-8 gap-4 flex-wrap">
          <img 
            src="/hug.png" 
            alt="Hug Image" 
            className="w-full sm:w-[440px] h-[340px] rounded-tl-[12px]" 
          />
          <img 
            src="/kiss.png" 
            alt="Kiss Image" 
            className="w-full sm:w-[836px] h-[340px] rounded-tr-[12px]" 
          />
        </div>
  
        {/* Updated Section with Your Specifications */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-12">
          {/* Text Section */}
          <div className="flex flex-col" style={{
            width: '100%',
            maxWidth: '556px',
            gap: '16px',
            paddingLeft: '7%',
            paddingTop: '10px',
          }}>
            <h2 style={{
              fontFamily: 'SF Pro Display',
              fontSize: '32px',
              sm: '36px',
              md: '48px',
              fontWeight: 800,
              lineHeight: '58px',
              color: '#000000'
            }}>
              Experience Unmatched<br />Privacy and Elegance
            </h2>
            <p className="text-[18px] mt-4 leading-normal" style={{
              fontFamily: 'SF Pro Display',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '22px',
              textAlign: 'left',
              color: '#000000',
              width: '100%',
            }}>
              At Stringly, we prioritize your privacy while providing a luxurious experience. Our platform is designed to ensure that every connection you make is both secure and sophisticated.
            </p>
            <div className="flex justify-between mt-6 items-start" style={{ width: '566px', height: '64px', gap: '8px' }}>
  <div className="flex flex-col items-start">
    <div className="flex items-center">
      <img src="./final.png" alt="privacy icon" className="mr-2" />
    
    </div>
    <p className="text-sm">Your privacy is our top priority.</p>
  </div>

  <div className="flex flex-col items-start">
    <div className="flex items-center">
      <img src="./fra.png" alt="connection icon" className="mr-2" />
     
    </div>
    <p className="text-sm">Connect with like-minded individuals securely.</p>
  </div>
</div>



            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="border border-black text-black px-4 py-2 rounded">Learn More</button>
              <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
            </div>
          </div>
  
          {/* Image Section */}
          <div className="mt-8 md:mt-0">
            <img 
              src="/splash.png" 
              alt="Splash Image" 
              className="w-full max-w-[750px] h-auto rounded-l-[10px]" 
            />
          </div>
        </div>
  
        {/* Section with Button and Image Gallery */}
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-center w-full md:w-[768px] font-bold text-[24px] sm:text-[36px] leading-tight">
            Short Heading goes here
          </h1>
          <p className="text-center w-full md:w-[768px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
  
          {/* Adjusted gap between button and image gallery */}
          <div 
            className="flex flex-col items-center mt-2"
            style={{
              width: '100%',
              maxWidth: '1312px',
              padding: '642px 0 0 0',
              gap: '90px',
            }}
          >
            {/* Centered View All button */}
            <button className="bg-white text-black border border-black px-4 py-2 rounded">
              View All
            </button>
          </div>
  
          {/* Image Gallery Section */}
          <div 
            className="flex flex-col items-center mt-28"
            style={{
              width: '100%', 
              maxWidth: '600px',
              gap: '12px',
            }}
          >
            <h1 className="text-center w-full md:w-[600px] font-bold text-[24px] sm:text-[36px] leading-tight">
              Image Gallery
            </h1>
            <p className="text-center w-full md:w-[600px] mt-2">
              Explore our gallery to experience more.
            </p>
          </div>
          
          <div 
            className="flex justify-center mt-10" 
            style={{
              width: '100%', 
              maxWidth: '900px',
              height: '500px',  
              gap: '0px',
              borderRadius: '31.96px 0px 0px 0px',
            }}
          >
            <img 
              src="./Gallery.png" 
              alt="Gallery" 
              style={{
                width: '100%', // Ensures the image is responsive
                height: '100%',
                borderRadius: '31.96px 0px 0px 0px',
              }}
            />
          </div>
  
          {/* New Indicator Section */}
          <div className="flex justify-center mt-8" style={{
            width: '100%',
            maxWidth: '1306.36px',
            height: '159.8px',  
            padding: '63.92px 0px 0px 0px',
          }}>
            <img src="./Indicators.png" alt="Indicator" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Landingpage;
  