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
     
     {/* Lazy girls Bff */}
     
     <div className='main-lazy-img'> 
     <img className='lazy-img' src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_HeaderStrip_LazyGirl'sBFFstextmobile.jpg" alt="" />
     </div>
     <div className='box-lazy-img'>
      <div>
        <img className='lazy-grid-img' 
        src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_ContentP-Story_CreamyConcealers.jpg" alt="" />
        
      </div>
     
      <div>
      <img className='lazy-grid-img'
       src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_ContentP-Story_MagicalMascaras.jpg" alt="" />
      </div>
     
      <div>
      <img className='lazy-grid-img' src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_ContentP-Story_TrendingTints.jpg" alt="" />
      </div>
     
    </div>
    
   {/* lazyy girl bff */}

   {/* --------- */}

   {/* your favourite brand */}

    <div className='main-lazy-img'> 
     <img className='lazy-img' src="https://logan.nnnow.com/content/dam/nnnow-project/22-march-2022/Loyalty_Strip_Desk.jpg" alt="" />
     </div>
    
     <div className='main-lazy-img'> 
     <img className='lazy-img' src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_4_DESK.jpg" alt="" />
     </div>

     <div className='box-black-img'>
      <div className='black-box' >
      <img className='black-img' src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/scdsk.jpeg" alt="" />
      </div>
      <div  className='black-box'>
      <img className='black-img' src="https://logan.nnnow.com/content/dam/nnnow-project/11-oct-2021-/12OCT21-TILE-MUFE(1).jpg" alt="" />
      </div>
      <div  className='black-box'>
      <img className='black-img' src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/bendsk.jpg" alt="" />
      </div>
      <div  className='black-box'>
      <img className='black-img' src="https://logan.nnnow.com/content/dam/nnnow-project/05-jan-2022/TF_Logo(1).jpg" alt="" />
      </div>
      <div  className='black-box'>
      <img className='black-img' src="https://logan.nnnow.com/content/dam/nnnow-project/03-jan-2022/se/Lancome_Logo(1).jpeg" alt="" />
      </div>
      <div  className='black-box'>
      <img className='black-img' src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/HDdesk.jpg" alt="" />
      </div>
      </div>
      {/* your favourite brand */}

      {/* ----------- */}

     {/* New block */}
      <div className='main-lazy-img1'> 
     <img className='lazy-img' src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_5_DESK.jpg" alt="" />

     </div>

     <div className='box-lazy-img1'>
      <div>
        <img className='lazy-grid-img1' 
     src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_BigByDefinitionMascara.jpg" alt="" />
        
      </div>
     
      <div>
      <img className='lazy-grid-img1'
       src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_OutrageousPlumpLipgloss.jpg" alt="" />
      </div>
     
      <div>
      <img className='lazy-grid-img1'
       src="https://logan.nnnow.com/content/dam/nnnow-project/14-june-2022/se/MUFE_NOTB_Ultrasettingpowderlaunch.jpg" alt="" />
      </div>
      
      <div>
        <img className='lazy-grid-img1' 
        src="https://logan.nnnow.com/content/dam/nnnow-project/24-aug-2022/ABH_NOTB_NouveauPalette1.jpg" alt="" />
        
      </div>
     
      <div>
      <img className='lazy-grid-img1'
       src="https://logan.nnnow.com/content/dam/nnnow-project/18-aug-2022/Guerlain_NOTB_Sunkissedpowder2.jpg" alt="" />
      </div>
     
      <div>
      <img className='lazy-grid-img1' 
      src="https://logan.nnnow.com/content/dam/nnnow-project/24-aug-2022/EsteeLauder_NOTB.jpg" alt="" />
      </div>
     
    
    </div>
    
{/* New block */}

{/* ------------ */}

{/* sephoria img */}

<div className='main-lazy-img'> 
     <img className='lazy-img' src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_7_DESK.jpg" alt="" />
 </div>
 <div className='box-lazy-img'>
      <div>
        <img className='lazy-grid-img' 
        src="https://logan.nnnow.com/content/dam/nnnow-project/23-march-2022/se-blog/Sephora_MakingaLook_BlogCoverTileOption02.jpg" alt="" />
        <span className='brand-name1'>
        MAKING A LOOK
       </span>
      </div>
     
      <div>
      <img className='lazy-grid-img'
       src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG3.jpg" alt="" />
       <span className='brand-name1'>
       7 MASKS
       </span>
      </div>
     
      <div>
      <img className='lazy-grid-img' src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG4.jpg" alt="" />
      <span className='brand-name1'>
      LONG LASTING MAKEUP?
    </span>
      </div>
      </div>
{/* sephoria img */}

    </div>

  );
}

export default CarouselFadeExample;