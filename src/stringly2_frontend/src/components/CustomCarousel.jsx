import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const CustomCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div
      style={{
        marginBottom: '40px', // Space between carousel and footer or other content
        position: 'relative',
        transform: 'translateX(20px)', // Slight shift to the right
        scale: '0.95', // Reduce the overall size slightly
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column', // Arrange items vertically
        width: '1306px', // Set a fixed width
      }}
    >
      {/* Carousel Section */}
      <Carousel
        style={{
          width: '100%', // Carousel takes full width of parent container
        }}
        selectedItem={selectedIndex} // Sync the selected slide with the custom indicators
        infiniteLoop
        autoPlay
        centerMode // Enable centering
        centerSlidePercentage={80} // 80% width for centered slide
        interval={1800} // Slide interval
        transitionTime={500} // Transition duration
        stopOnHover={false} // Keep auto-playing
        showArrows={true} // Show navigation arrows
        showStatus={false} // Hide slide count
        showIndicators={false} // Ensure default indicators are hidden
        onChange={(index) => setSelectedIndex(index)} // Sync selected index
      >
        {/* Slide 1 */}
        <div
          className="jojo flex justify-center"
          style={{
            width: '100%', // 100% width ensures the slides take full width of container
            height: '619.1px',
            display: 'flex', // Flexbox for centering content
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            backgroundColor: 'black', // Black background for slide
            borderRadius: '31.96px',
            padding: '20px', // Add padding to prevent overlap
          }}
        >
          <img
            className="slider"
            src="./Gallery.png"
            alt="Gallery"
            style={{
              width: '100%', // Responsive image width
              height: '100%',
              borderRadius: '31.96px',
              objectFit: 'cover', // Ensure image covers the container
            }}
          />
        </div>

        {/* Slide 2 */}
        <div
          className="flex justify-center"
          style={{
            width: '100%',
            height: '619.1px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black', // Black background for slide
            borderRadius: '31.96px',
            padding: '20px',
          }}
        >
          <img
            src="./Gallery.png"
            alt="Gallery 2"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '31.96px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Slide 3 */}
        <div
          className="flex justify-center"
          style={{
            width: '100%',
            height: '619.1px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black', // Black background for slide
            borderRadius: '31.96px',
            padding: '20px',
          }}
        >
          <img
            src="./Gallery.png"
            alt="Gallery 3"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '31.96px',
              objectFit: 'cover',
            }}
          />
        </div>
      </Carousel>

      {/* Custom Indicator Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px', // Space between carousel and indicators
        }}
      >
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            style={{
              display: 'inline-block',
              cursor: 'pointer',
              margin: '0 10px',
              opacity: selectedIndex === index ? 1 : 0.5, // Adjust opacity for the active indicator
              transition: 'opacity 0.3s',
              width: '31.96px', // Width of the circular indicator
              height: '31.96px', // Height of the circular indicator
              backgroundColor: selectedIndex === index ? 'black' : 'gray', // Change color for selected/non-selected state
              borderRadius: '50%', // Make the indicator circular
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
