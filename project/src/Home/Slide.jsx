import Carousel from 'react-bootstrap/Carousel';
import "./slide.css"
function CarouselFadeExample() {
  return (
    <div className='slide-box'>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src="https://logan.nnnow.com/content/dam/nnnow-project/30-june-2022/se/SC_Topbanner_ExclusivelyatSephoradesktop.jpg"
          alt="First slide"
        />
       </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src="https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/Benefit_Homepagebanner_Colordesktop.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src="https://logan.nnnow.com/content/dam/nnnow-project/17-aug-2022/ABH_Homepagebannerdesktop(1).jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Clarins_Topbannerdesktop.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src="https://logan.nnnow.com/content/dam/nnnow-project/09-aug-2022/se/Esteelauder_Homepagebannerdesktop.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src="https://logan.nnnow.com/content/dam/nnnow-project/15-july-2022/Hanzdefuko_Topbannerdesktop.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_HomepageBannerdesktop.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    

    
    {/*GRid BLAck images  */}
    
    <div className='box-black-img'>
      <div className='black-box' >
      <img className='black-img' src="https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q1.jpg" alt="" />
      </div>
      <div  className='black-box'>
      <img className='black-img' src="https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q2.jpg" alt="" />
      </div>
      <div  className='black-box'>
      <img className='black-img' src="https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q3.jpg" alt="" />
      </div>
      <div  className='black-box'>
      <img className='black-img' src="https://logan.nnnow.com/content/dam/nnnow-project/10-may-2021/25MAR21_SEPHORA_BP_DESK_Q4.jpg" alt="" />
      </div>
      <div  className='black-box'>
      <img className='black-img' src="https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q5.jpg" alt="" />
      </div>
      <div  className='black-box'>
      <img className='black-img' src="https://logan.nnnow.com/content/dam/nnnow-project/08-may-2021/7MAY21_SEPHORA_BP_Q6.jpg" alt="" />
      </div>
      </div>
    {/*GRid BLAck images  */}

    {/* -------------- */}

    {/* Brand of the week div */}
    <div className='Brand-box'>
    
    <h1 className='brandname'>
     Brand Of The Week
     </h1>
    <div className='box-brand-img'>
      <img className='brand-img' src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/ForestEssential_TopBanner_Brandoftheweekdesktop.jpg" alt="" />
    </div>
    <span className='brand-name'>

    </span>
    <div className='box-brand-img2'>
      <div>
        <img className='Brand-grid-img' 
        src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Bestsellers.jpg" alt="" />
        <span className='brand-name'>
      BESTSELLERS
      </span>
      </div>
      
      <div>
      <img className='Brand-grid-img'
       src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Bodycare.jpg" alt="" />
        <span className='brand-name'>
      BODYCARE
      </span>
      </div>
     
      <div>
      <img className='Brand-grid-img'
       src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Facial.jpg" alt="" />
        <span className='brand-name'>
      FACIAL
      </span>
      </div>
     
      <div>
      <img className='Brand-grid-img' src="https://logan.nnnow.com/content/dam/nnnow-project/16-aug-2022/se/Makeup.jpg" alt="" />
      <span className='brand-name'>
      MAKEUP
      </span>
      </div>
     
    </div>
    </div>
     {/* Brand of the week div */}

     {/* ----------- */}

    </div>

  );
}

export default CarouselFadeExample;