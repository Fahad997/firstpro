import React from 'react';
import logo from './images/leadvideos/logo.png';
import left from './images/leadvideos/left_arrow.png';
import right from './images/leadvideos/right_arrow.png';
import recordvideo from './images/leadvideos/recordvideo.mp4';
import personalizepic from './images/leadvideos/latestpic.png';
import car from './images/leadvideos/car1.jpg';
import holy_grail from './images/leadvideos/holy_grail.png';
import recordsales from './images/leadvideos/record_sales_video.mp4';
import downarrow from './images/leadvideos/downarrow.png';
import arrowmanual from './images/leadvideos/arrow_manual.png';
import autoarrow from './images/leadvideos/automation_arrow.png';
import flow from './images/leadvideos/flow.jpg';
import intro from './images/leadvideos/intro_arrow.png';
import found from './images/leadvideos/found_them.png';
import service from './images/leadvideos/service_works.png';
import roi from './images/leadvideos/roi_arrow.png';
import outro from './images/leadvideos/outro_arrow.png';
import proposal from './images/leadvideos/executive_proposal.jpg';
import linkedin from './images/leadvideos/linkedinvideo.mp4';
import { Link } from 'react-scroll';
import { motion } from "framer-motion"
import TypeAnimation from 'react-type-animation';

const LeadVideos = () => {
return (
<>

<header className='flex sm3:px-4 sm3:pt-6 sm3:pb-4 sm:pt-8 sm:pb-6 justify-between lg:px-12 lg:pb-8 lg:pt-10 shadow-lg lg:fixed lg:top-0 w-full bg-white z-10'>
<div>
<img src={logo} alt='leadvideologo' className='sm3:w-40 sm5:w-44 sm:w-48 lg:w-3/5' />
</div>

<div>
<Link activeClass='active' to='bookmeeting' smooth={true} duration={3000} className='capitalize bg-green-400 text-white sm3:p-2 sm3:text-xs sm:text-sm sm:p-3 lg:text-base lg:p-4 rounded font-bold hover:bg-green-500 cursor-pointer'>book meeting</Link>
</div>

</header>

<section className='sm3:mt-12 sm5:mt-16 lg:mt-56 sm3:text-left lg:text-center'>

<div className='sm3:pl-4 lg:px-8 sm3:leading-none lg:leading-normal'>
<h1 className='sm3:pr-6 sm3:text-3xl sm4:text-4xl sm48:text-5xl sm5:text-6xl lg:text-8xl font-black for-poppins-font'>Increase sales 2x using</h1>
<br />
<TypeAnimation cursor={true}
      sequence={['Personalized Videos', 2000,'']}
      wrapper="h1"
      className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent sm3:text-3xl sm4:text-4xl sm48:text-4xl sm5:text-5xl sm:text-6xl lg:text-8xl font-black'
      repeat={Infinity} />
<br />
<h1 className='sm3:text-3xl sm4:text-4xl sm48:text-5xl sm5:text-6xl lg:text-8xl font-black for-poppins-font'>at Scale!</h1>

</div>

<div className='sm3:pl-4 sm3:mt-8 lg:mt-16'>
<p className='for-poppins-font font-sans sm3:text-lg sm4:text-xl sm48:text-2xl sm5:text-3xl sm:text-4xl sm:py-2 sm3:py-1 lg:py-0 lg:text-3xl font-light'>Record only once.</p>
<p className='for-poppins-font font-sans sm3:text-lg sm4:text-xl sm48:text-2xl sm5:text-3xl sm:text-4xl lg:text-3xl font-light'><span className='font-bold'>Leadvideo's AI-tech</span> can personalize videos to a million people</p>
</div>

</section>

<section className='sm3:mt-16 lg:mt-20'>

<div className='flex justify-between sm3:px-4 lg:px-12'>
<motion.img initial='hidden' whileInView="visible" viewport={{once:true}} transition={{duration:1.2}} variants={{ visible: {rotate: 0}, hidden: {rotate: -45}}} src={left} alt='left arrow' className='sm3:w-32 lg:w-auto' />
<motion.img initial='hidden' whileInView="visible" viewport={{once:true}} transition={{duration:1.2}} variants={{ visible: {rotate: 0}, hidden: {rotate: 45}}} src={right} alt='right arrow' className='sm3:w-32 lg:w-auto' />
</div>

<div className='flex justify-center sm3:mt-2 lg:mt-4'>
<iframe src="https://player.vimeo.com/video/649444666?h=8f33f1c376" className='sm3:w-4/5 sm3:h-56 sm:w-full sm:h-80 sm:mt-2 lg:mt-2 lg:w-full lg:h-screen' frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title='khalid'></iframe>
</div>

<div className='text-center sm3:mt-8 sm:mt-16 lg:mt-28 for-poppins-font'>
<h1 className='sm3:text-lg sm4:text-xl sm48:text-2xl sm:text-3xl lg:text-4xl sm3:py-1 lg:py-2 font-light'>Simple <span className='font-bold'>TWO</span> step process!</h1>
<h1 className='sm3:text-4xl sm4:text-4xl sm48:text-5xl sm:text-6xl lg:text-8xl font-black'>How it works?</h1>
</div>

</section>

<section className='sm3:mt-20 sm:mt-24 lg:mt-28 lg:px-7 lg:flex lg:justify-between'>

<div className='record-div sm3:pl-4 lg:w-2/5 lg:px-12'>
<h2 className='sm3:text-2xl sm4:text-3xl sm5:text-4xl lg:text-4xl'>Step 1</h2>
<br />
<h2 className='font-black capitalize sm3:text-7xl sm4:text-8xl lg:text-8xl pt-2'>record</h2>
<br />
<h2 className='font-black capitalize sm3:text-7xl sm4:text-8xl lg:text-8xl'>only</h2>
<br />
<h2 className='font-black capitalize sm3:text-7xl sm4:text-8xl lg:text-8xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'>once.</h2>
<p className='sm3:text-2xl sm4:text-3xl sm5:text-4xl sm3:pt-4 sm3:pr-4 sm5:pr-8 sm:pr-28 lg:pt-4 lg:pr-24 lg:text-2xl font-light'>No need to record for each one of your customer.</p>
</div>

<div className='sm3:mt-8 sm3:px-6 lg:px-0 lg:mt-0 lg:w-3/5'>
<video src={recordvideo} width='960' height='400' className='recordvid' muted autoPlay loop />
</div>

</section>

<section className='sm3:mt-28 sm:mt-40 lg:mt-52 lg:px-7 lg:flex lg:justify-between'>

<div className='person-div sm3:pl-4 lg:w-1/2 lg:px-12'>
<h2 className='sm3:text-2xl sm4:text-4xl lg:text-4xl'>Step 2</h2>
<br />
<h2 className='font-black capitalize sm3:text-5xl sm4:text-6xl sm5:text-7xl lg:text-7xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'>personalize</h2>
<br />
<h2 className='font-black sm3:text-5xl sm4:text-6xl sm5:text-7xl lg:text-7xl'>to a million</h2>
<br />
<h2 className='font-black sm3:text-5xl sm4:text-6xl sm5:text-7xl lg:text-7xl'>people</h2>
<p className='sm3:text-xl sm4:text-2xl sm48:text-3xl sm5:text-4xl sm3:pt-6 sm5:mt-4 sm:pr-16 sm3:pr-8 lg:pt-12 lg:pr-0 lg:text-2xl font-light'>LeadVideos can personalize videos the way</p>
<p className='sm3:text-xl sm4:text-2xl sm48:text-3xl sm5:text-4xl sm3:pt-2 sm3:pr-2 lg:pt-2 lg:pr-0 lg:text-2xl font-light'>Mailchimp can personalize emails.</p>

</div>

<div className='sm3:mt-8 sm3:px-16 sm:mt-16 sm:px-20 lg:px-0 lg:mt-0 lg:w-1/2'>
<img src={personalizepic} alt='personalize pic' className='recordvid sm:w-full' />
</div>

</section>

<section className='sm3:mt-32 lg:mt-32 lg:flex lg:justify-center lg:gap-4'>

<div>
<img src={car} alt='car' className='sm3:px-8 lg:px-0' />
</div>

<div className='sm3:mt-12 lg:mt-0 for-poppins-font'>
<motion.img initial='hidden' whileInView="visible" viewport={{once:true}} transition={{duration:1.2}} variants={{ visible: {rotate: 0}, hidden: {rotate: -60}}} className='w-2/5 pl-4 lg:pl-0 lg:w-auto'  src={holy_grail} alt='holy gril' />
<h2 className='font-black sm3:text-5xl sm4:text-6xl sm48:text-7xl sm3:pl-4 lg:text-8xl lg:pl-16 pt-6'>Create</h2>
<h2 className='font-black sm3:text-5xl sm4:text-6xl sm48:text-7xl sm3:pl-4 lg:text-8xl lg:pl-16 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'>Personal</h2>
<h2 className='font-black sm3:text-5xl sm4:text-6xl sm48:text-7xl sm3:pl-4 lg:text-8xl lg:pl-16'>Connection</h2>
<TypeAnimation cursor={true}
      sequence={['with videos', 2000,'']}
      wrapper="h1"
      className='indie-flower-font sm3:text-5xl sm4:text-6xl sm48:text-7xl sm3:pl-4 sm3:pt-2 lg:text-8xl lg:pt-2 lg:pl-16'
      repeat={Infinity} />
<p className='sm3:pl-4 sm3:pt-8 sm3:text-lg sm4:text-xl sm48:text-2xl lg:pl-16 lg:pt-8 lg:text-2xl'>Cannot <span className='text-red-600 font-bold'>Stress</span> this enough. <span className=' text-violet-700 font-bold'>Period.</span></p>
</div>

</section>

<section className='sm3:text-left sm3:mt-28 lg:text-center lg:mt-24 for-poppins-font'>

<h1 className='font-black sm3:text-3xl sm4:text-4xl sm5:text-5xl sm3:pl-4 lg:pl-0 lg:text-6xl'>Sell Your Products Yourself</h1>
<TypeAnimation cursor={true}
      sequence={['human To human.', 2000,'']}
      wrapper="h1"
      className='sm3:pt-4 sm3:text-3xl sm4:text-4xl sm5:text-5xl sm3:pl-4 lg:pl-0 lg:text-7xl capitalize bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent font-black lg:pt-4'
      repeat={Infinity} />
<p className='sm3:pt-10 sm3:text-2xl sm4:text-3xl sm3:pl-4 lg:pl-0 sm3:pr-8 sm48:pr-10 sm5:pr-24 sm:pr-52 lg:pr-0 lg:text-3xl lg:pt-12 font-light'>No one likes to be sold to a <span className='font-bold'>cold hearted Bot.</span></p>
<p className='sm3:pt-2 sm3:text-2xl sm4:text-3xl sm3:pl-4 lg:pl-0 lg:text-3xl font-light lg:pt-4'>Take control yourself</p>

<div className='flex justify-center sm3:pt-8 px-6 lg:px-0 lg:pt-12 lg:w-full'>
<video src={recordsales} className='recordvid lg:w-4/5 border border-gray-200 shadow-xl rounded' autoPlay muted loop/>
</div>

</section>

<section className='sm3:mt-24 sm3:pl-4 lg:mt-28 text-left lg:pl-24 lg:pr-16'>

<h2 className='font-sans sm3:text-2xl sm5:text-3xl sm3:py-2 lg:text-5xl font-light lg:py-4'>But I have 1000s of Prospects</h2>
<h2 className='for-poppins-font sm3:text-4xl sm5:text-5xl sm3:pr-2 lg:pr-0 lg:text-6xl font-black tracking-wider leading-none'>How will I create video for every <span className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent font-black'>one of them ?</span></h2>

<h2 className='font-sans sm3:text-2xl sm5:text-3xl lg:text-5xl font-light py-4 mt-24'>This is where we come in,</h2>
<div className='grid lg:flex lg:gap-4'>
<h2 className='for-poppins-font sm3:text-4xl sm5:text-5xl lg:text-6xl font-black tracking-wider leading-none'>Simple Answer.</h2>
<motion.span animate={{scale:1.08}} transition={{duration: 0.89, yoyo: Infinity}}  className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text font-black sm3:text-4xl sm5:pl-4 sm5:text-5xl lg:text-6xl text-transparent'>Automation</motion.span>
</div>
</section>

<section className='sm3:mt-24 sm3:pl-4 lg:mt-36 text-left lg:pl-24'>
<h2 className='indie-flower-font sm3:text-2xl sm4:text-3xl sm5:text-4xl lg:text-4xl py-4'>don't settle for less</h2>

<div className='flex sm3:gap-2 lg:gap-5'>
<h2 className='for-poppins-font sm3:text-2xl sm4:text-3xl sm5:text-4xl lg:text-6xl font-black'>Most Used <span className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text font-black text-transparent'>Template</span></h2>
<motion.img initial='hidden' whileInView="visible" viewport={{once:true}} transition={{duration:1.2}} variants={{ visible: {rotate: 0}, hidden: {rotate: 45}}} src={downarrow} alt='downarrow' className='sm3:w-10 sm3:pt-4 sm4:pt-6 sm4:pr-3 sm5:w-12 lg:w-20 lg:pt-8' />
</div>

<div className='mt-8 flex'>
<img src={arrowmanual} alt='arrow manual' className='sm3:w-2/6 lg:w-auto' />
<img src={autoarrow} alt='automation arrow' className='sm3:w-3/5 lg:w-auto' />
</div>

</section>

<section className='sm3:mt-4 lg:mt-8 flex justify-center'>
<img src={flow} alt='flowimage' className='lg:transition-all lg:duration-200 lg:ease-in-out lg:hover:scale-105 sm3:w-11/12 lg:w-11/12' />
</section>

<section className='sm3:mt-4 lg:mt-8 grid grid-rows-1 grid-flow-col gap-5 lg:gap-4 pl-6 lg:pl-28'>
<img src={intro} alt='intro' className='sm3:w-4/5 lg:w-auto' />
<img src={found} alt='foundthem' />
<img src={service} alt='servicearrow' />
<img src={roi} alt='roiarrow' />
<img src={outro} alt='outro' className='sm3:w-4/5 lg:w-auto' />
</section>

<section className='sm3:mt-12 sm5:mt-16 lg:mt-28 lg:px-7 lg:flex lg:justify-between lg:gap-28'>

<div className='record-div sm3:pl-4 lg:w-2/5 lg:pl-12'>

<h2 className='font-black capitalize sm3:text-6xl sm4:text-7xl sm5:text-8xl sm3:pt-1 lg:text-8xl lg:pt-2'>lights.</h2>
<br />
<h2 className='font-black capitalize sm3:text-6xl sm4:text-7xl sm5:text-8xl sm3:pt-1 lg:text-8xl lg:pt-2'>camera.</h2>
<br />
<h2 className='font-black capitalize sm3:text-6xl sm4:text-7xl sm5:text-8xl lg:text-8xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'>sell.</h2>

<p className='sm3:text-xl sm4:text-2xl sm3:pt-4 lg:pt-6 lg:pr-12 lg:text-2xl font-light'>You focus on closing</p>
<p className='sm3:text-xl sm4:text-2xl lg:pt-2 lg:pr-12 lg:text-2xl font-light'>We handle the rest</p>
<p className='sm3:text-xl sm4:text-2xl lg:pt-2 lg:pr-12 lg:text-2xl font-light'><span className='text-red-700 font-bold'>Automation.</span> <span className='text-violet-700 font-bold'>Deliver.</span> <span className='text-green-700 font-bold'>CTA.</span></p>

</div>

<div className='sm3:mt-8 sm3:px-8 lg:px-0 lg:mt-0 lg:w-3/5'>
<img src={proposal} alt='proposal' className='recordvid' />
</div>

</section>

<section className='sm3:mt-20 sm5:mt-24 lg:mt-40 lg:px-7 lg:flex lg:justify-between lg:gap-28'>

<div className='record-div sm3:pl-4 lg:w-2/5 lg:pl-12'>

<h2 className='font-black capitalize sm3:pt-2 sm3:text-5xl sm4:text-6xl sm5:text-7xl lg:text-7xl lg:pt-2'>screen</h2>
<br />
<h2 className='font-black sm3:pt-2 sm3:text-5xl sm4:text-6xl sm5:text-7xl lg:text-7xl lg:pt-2'>Capture at</h2>
<br />
<h2 className='font-black capitalize sm3:pt-2 sm3:text-5xl sm4:text-6xl sm5:text-7xl lg:pt-0 lg:text-7xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'>scale!</h2>

<p className='sm3:text-lg sm4:text-xl sm5:text-2xl sm4:pr-2 sm48:pr-8 sm3:pt-6 lg:pt-6 lg:pr-2 lg:text-xl font-light'>Customer websites screen captured into the video automatically.</p>
<p className='sm3:text-lg sm4:text-xl sm5:text-2xl sm4:pr-2 sm3:pt-2 lg:pt-2 lg:pr-2 lg:text-xl font-light'>Show them you have done your <span className='text-red-600 font-bold'>homework.</span></p>

</div>

<div className='sm3:mt-8 sm3:px-8 lg:mt-0 lg:px-0 lg:w-3/5'>
<video src={linkedin} className='recordvid border border-gray-200 shadow-xl round' autoPlay muted loop/>
</div>

</section>

<section id='bookmeeting' className='for-poppins-font text-center mt-40'>
<h1 className='sm3:text-3xl sm48:text-4xl lg:text-5xl font-black'>Let's Meet</h1>

<div className='flex justify-center sm3:mt-8 lg:mt-4'>
<iframe className='letmet w-full' src='https://calendly.com/leadvideos/discovery?embed_domain=leadvideos.net&embed_type=Inline&hide_gdpr_banner=1' title='letsmeet' />
</div>

</section>

</>

)
}

export default LeadVideos