
import { FaBarsStaggered, FaDownload, FaLaptop, FaLaptopCode, FaMobile } from 'react-icons/fa6'
import './App.css'
import { MdOutlineFileDownload } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { useEffect, useRef, useState } from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { TbSeo } from 'react-icons/tb'
import { IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom';
function App() {

  let useIsVisible = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
      }
      );

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);

    return isIntersecting;
  }

  let [openBarTab, setOpenBarTab] = useState(false)
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);
  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);
  const ref6 = useRef();
  const isVisible6 = useIsVisible(ref6);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if(openBarTab){
      setOpenBarTab(false)
    }
  };



  //

  return (
    <div className='bg-[rgb(12,21,29)]  w-[100vw] overflow-y-scroll scrollbar-hide h-screen'>
      <div className=''>
        <div className=' bg-[rgb(12,21,29)] bg-opacity-95 fixed top-0 z-20 w-[100vw] flex lg:justify-center '>
          <header ref={ref1} className={` w-[100%] px-2 lg:w-[1170px]  grid grid-cols-[25%_auto] py-2 justify-between  duration-700 items-center text-white ${isVisible1 ? "translate-y-0 opacity-100" : "translate-y-[-10vh] opacity-0"}`}>
            <div className='flex gap-5 items-center '>
              <img src="/images/kuldeepLogo.png" className='w-[30px] h-[30px]  lg:w-[50px] lg:h-[50px]  rounded-[50%] animate-rotate ' alt="" />
              <p className='text-[14px] md:text-[17px] lg:text-2xl animate-wiggle'> hey! I'm Kuldeep </p>
            </div>
            <div className='relative lg:pt-2'>
              <div className='hidden lg:block'>
                <ul className='lg:flex lg:gap-6 text-green-300 lg:items-center'>
                  <li className='hover:border-b-[3px] border-red-800' >
                    <button onClick={() => scrollToSection('home-section')}>Home</button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('about-section')} className='hover:border-b-[3px] border-red-800' >About</button>
                  </li>
                  {/* <li className='hover:border-b-[3px] border-red-800' >Portfolio</li> */}

                  <li className='hover:border-b-[3px] border-red-800' >
                    <button onClick={() => scrollToSection('contact-section')}>Contact </button></li>
                  <button onClick={() => window.location.href = '/resume.pdf'} className='border-[1px] hover:bg-red-600 hover:text-white duration-300 hover:scale-110 border-green-300 py-1 px-2 flex gap-2 items-center rounded-[5px]'>Resume <MdOutlineFileDownload /></button>
                </ul>
              </div>
              <div className='lg:hidden'>
                {openBarTab ?
                  <RxCross2 onClick={() => setOpenBarTab(false)} className='text-red-600 text-2xl' />
                  :
                  <FaBarsStaggered onClick={() => setOpenBarTab(true)} />

                }

              </div>

            </div>


            <div className={` flex  border-b-[2px] border-white z-30 duration-500 left-0  ${openBarTab ? " translate-y-0  " : " translate-y-[-1000px] h-0 "} p-3`}>

              <ul className=' text-white flex flex-col gap-3 ' >
                <li>
                  <button onClick={() => scrollToSection('home-section')}>Home</button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about-section')}>About</button>
                </li>
                {/* <li>
                  <button onClick={() => scrollToSection('contact-section')}>Portfolio</button>
                </li> */}
                <li>
                  <button onClick={() => scrollToSection('contact-section')}>Contact</button>
                </li>
                <button onClick={() => window.location.href = '/resume.pdf'} className='border-[1px] border-white py-1 px-2 flex gap-2 items-center rounded-[5px] w-[100px]'>Resume <MdOutlineFileDownload /></button>
              </ul>
            </div>

          </header>
        </div>

        <main className='max-w-[1170px] mx-auto  p-2 md:p-3'>
          <section id='home-section' className='grid mb-10 items-center pt-[100px] text-white md:mb-[100px] lg:mb-[200px] md:grid-cols-2  lg:grid-cols-[40%_auto] '>
            <div ref={ref2} className={`relative duration-1000 order-2 md:order-1 ${isVisible2 ? "translate-x-0 opacity-100" : "translate-x-[-30vw] opacity-0"}`}>
              <div className='md:absolute top-[-200px] md:top-[-150px] z-10 left-[25%] '>
                <p className='text-md uppercase font-bold text-green-500 '>Kuldeep Poonia</p>
                <h1 className='lg:text-[70px] font-bold leading-tight mb-10'>Professional Web Developer</h1>
                <p className='border-b-[2px] border-white pb-5'>Looking Towards Every Opportunity Where I Get The Chance To Be Creative And Design A Site That Leaves A Lasting Impression</p>

                <button onClick={() => scrollToSection('about-section')} className='bg-green-300 py-2 px-3 mt-7 text-black rounded-[7px] text-[18px] flex items-center gap-2'>Take a Look   <IoIosArrowRoundDown className='text-[23px]' /></button>

              </div>
            </div>
            <div className={`duration-1000 order-1 mb-4 md:mb-0 md:order-2`}>
              <img src="https://www.pcworld.com/wp-content/uploads/2025/04/pcw08_Asus-Gaming-PC.jpg?quality=50&strip=all" alt="" className='w-[100%] h-[100%] shadow-2xl shadow-blue-600' />
            </div>
          </section>

          <section id='about-section' className='grid items-center pt-[80px] lg:pt-[100px]  text-white md:grid-cols-2  lg:gap-8 mb-[100px]'>
            <div ref={ref3} className={`flex duration-1000 mb-10 md:mb-0 justify-center items-center h-[400px] ${isVisible3 ? "translate-x-0 opacity-100" : "translate-x-[-40vw] opacity-0"}`}>
              <img src="/images/selfImage.jpeg" className='w-[280px] md:w-[320px] lg:w-[450px] h-[300px] lg:h-[500px] shadow-lg shadow-green-200' alt="" />
            </div>
            <div className={`duration-1000 ${isVisible4 ? "translate-y-0 opacity-100" : "translate-y-[30vh] md:translate-y-[40vh] opacity-0"}`} ref={ref4} >
              <p className='text-md uppercase font-bold text-green-500 mb-4 '>about me</p>

              <h2 className='pb-3 lg:pb-6 md:text-[20px] lg:text-[25px] font-bold capitalize'>here's a little bit about myself</h2>
              <p className='pb-3 lg:pb-6'>In everything that I do, I make sure to put in hard work and perseverance into all aspects of my life. While also at the same time using tools that come from a diverse cultural background through traveling and learning multiple languages to create something clients love.</p>
              <div className='flex flex-col md:flex-row gap-7 items-center pb-3 my-4 md:my-0'>
                <FaLaptopCode className='text-[45px] text-green-500' />
                <div className='text-center md:text-start'>
                  <h2 className='font-bold md:text-[20px] lg:text-[25px]'>Web Design</h2>
                  <p className='lg:py-3'> Experience collaborating with clients to design multi-page websites with a variety of different animations.</p>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-7 items-center pb-3 my-4 md:my-0'>
                <FaMobile className='text-[35px] text-green-500' />
                <div className='text-center md:text-start'>
                  <h2 className='font-bold md:text-[20px] lg:text-[25px]'>Mobile Responsiveness</h2>
                  <p className='lg:py-3'> Experience collaborating with clients to create websites that adjust to both tablet and mobile.</p>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-7 items-center pb-3 my-4 md:my-0'>
                <TbSeo className='text-[75px] text-green-500' />
                <div className='text-center md:text-start'>
                  <h2 className='font-bold md:text-[20px] lg:text-[25px]'>SEO Optimisation</h2>
                  <p className='lg:py-3'>Helping search engines understand your content, and helping users find your site and make a decision about whether they should visit your site through a search engine.</p>
                </div>
              </div>
            </div>
          </section>

          {/* <section id='portfolio-section ' className='text-white pt-3 border-t-2 border-white md:border-none'>
            <h2 className='text-green-500 font-bold text-center py-4 text-[18px]'>PORTFOLIO</h2>
            <p className='font-bold md:text-[20px] lg:text-[25px] text-center py-2'>Check Out My Latest Projects</p>
            <h3 className='text-green-500 font-bold text-center py-4 mt-4'>Web design projects</h3>
          </section> */}

          <section id='contact-section' className='mb-6 pt-[80px] lg:pt-[100px] text-white  border-t-2 border-white md:border-none'>
            <h2 className='text-green-500 font-bold text-center py-4 text-[18px]'>CONTACT ME</h2>
            <p className='font-bold md:text-[20px] lg:text-[25px] text-center py-2 mb-7'>Feel Free To Reach Out</p>

            <div className='grid md:grid-cols-2 gap-6'>
              <div className='bg-[rgb(21,29,40)] border-b-2 border-green-500 p-2 md:p-6 rounded-lg flex justify-center items-center overflow-hidden'>
                <div ref={ref5} className={`duration-1000 ${isVisible5 ? "translate-x-0 opacity-100" : "translate-x-[-20vw] opacity-0"}`}>
                  <div className='text-green-500 font-bold py-3 border-b-2 border-green-500 md:text-[25px]'>Contact Information</div>
                  <p className='leading-9 md:text-[18px] pt-3 pb-5'>If this website created a wonderful experience for you and left a lasting impression I would love to hear from you !</p>
                  <div className='py-3'>
                    <span className='flex gap3 mb-3 items-center gap-3 hover:text-green-500 duration-300'>
                      <FaMobile />
                      <a href="tel:+918397039304" className=''> +91 8397039304</a>
                    </span>

                    <span className='flex gap3 items-center gap-3 hover:text-green-500 duration-300'>
                      <IoMail />
                      <a href="mailto:kuldeeppoonia464@gmail.com" className=''> kuldeeppoonia464@gmail.com</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className='bg-[rgb(21,29,40)] border-b-2 border-green-500 p-2 md:p-6 rounded-lg flex justify-center items-center overflow-hidden'>
                <div ref={ref6} className={`duration-1000 ${isVisible6 ? "translate-x-0 opacity-100" : "translate-x-[20vw] opacity-0"}`}>
                  <div className='text-green-500 text-center font-bold py-3 border-b-2 border-green-500 md:text-[25px]'>Resume</div>
                  <p className='leading-9 md:text-[18px] text-center pt-3 pb-5'>And if you like what you see, feel free to check out my resume for more information in the link below !</p>
                  <div className='flex justify-center items-center'>
                    <button onClick={() => window.location.href = '/resume.pdf'} className='flex hover:text-black hover:bg-green-500 font-bold duration-300 gap-3 items-center text-green-500 border-2 border-green-500 py-1 px-2 rounded-md'>DOWNLOAD HERE <FaDownload /> </button>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </main>

        <footer className='mt-10 text-white border-2 border-green-500 py-[20px] md:py-[30px] lg:py-[50px] px-3'>
          <div className='max-w-[1170px] mx-auto py-[20px] md:py-[30px] lg:py-[50px]  border-b-2 border-green-500 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className=''>
              <h1 className='text-[20px] mb-3 md:text-[25px] lg:text-[30px] lg:w-[50px] shadow-lg shadow-green-500'>☣☯𝙆𝙐𝙇𝘿𝙀𝙀𝙋☯☣</h1>
              <p className='text-green-500 leading-9 mb-4 w-[280px]'>THANK YOU FOR VISITING MY WEBSITE.HOPE TO SEE YOU AGAIN SOON !   </p>
            </div>

            <div>
              <h2 className='text-green-500 text-[17px] lg:text-[20px] mb-4 md:mb-6'>Resources</h2>
              <ul>
                <li className='hover:text-green-500 duration-300 cursor-pointer my-2'>
                  <button onClick={() => scrollToSection('home-section')}>Home</button>
                </li>
                <li className='hover:text-green-500 duration-300 cursor-pointer my-2'>
                  <button onClick={() => scrollToSection('about-section')}>About</button>
                </li>
                {/* <li className='hover:text-green-500 duration-300 cursor-pointer my-2'>
                  <button onClick={() => scrollToSection('home-section')}>Portfolio</button>
                </li> */}
                <li className='hover:text-green-500 duration-300 cursor-pointer my-2'>
                  <button onClick={() => scrollToSection('contact-section')}>Contact</button>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='text-green-500 text-[17px] lg:text-[20px] mb-4 md:mb-6'>Contact Information</h2>
              <div className='flex flex-col'>
                <a href='tel:+918397039304' className='hover:text-green-500 duration-300 cursor-pointer my-2'>+91 8397039304</a>
                <a href='mailto:kuldeeppoonia464@gmail.com' className='hover:text-green-500 duration-300 cursor-pointer my-2'>kuldeeppoonia464@gmail.com</a>
              </div>


            </div>
          </div>
          <p className='text-center py-2'>© Copyright KULDEEP 2025</p>
        </footer>

      </div>
    </div>
  )
}

export default App
