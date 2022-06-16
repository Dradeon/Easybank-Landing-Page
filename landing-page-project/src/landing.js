import React from 'react'

const Landing = () => {
  
  const handleClick = () => {
    const button = document.getElementById('NavHamburger');
    const menu = document.getElementById('mobilemenu');
    if(button.getAttribute('src') === 'icon-hamburger.svg'){
      button.setAttribute('src',"icon-close.svg");
      menu.style.display = 'block';
    }
    else{
      button.setAttribute('src','icon-hamburger.svg');
      menu.style.display = 'none';
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className='relative bg-White z-40'>
        <div className='container mx-auto flex flex-row justify-between items-center p-4'>
          <img src="logo.svg" alt='icon'></img>
          <ul className='hidden md:flex flex-row self-stretch space-x-6 text-GrayishBlue'>
            <li>
              <div className='bg-gradient-to-r from-LimeGreen to-BrightCyan h-full'>
                <a href="#" className='flex bg-White pt-1 pb-3 self-center hover:pb-2.5'>Home</a>
              </div>
            </li>
            <li>
              <div className='bg-gradient-to-r from-LimeGreen to-BrightCyan h-full'>
                <a href="#" className='flex bg-White pt-1 pb-3 self-center hover:pb-2.5'>About</a>
              </div>
            </li>
            <li>
              <div className='bg-gradient-to-r from-LimeGreen to-BrightCyan h-full'>
                <a href="#" className='flex bg-White pt-1 pb-3 self-center hover:pb-2.5'>Contact</a>
              </div>
            </li>
            <li>
              <div className='bg-gradient-to-r from-LimeGreen to-BrightCyan h-full'>
                <a href="#" className='flex bg-White pt-1 pb-3 self-center hover:pb-2.5'>Blog</a>
              </div>
            </li>
            <li>
              <div className='bg-gradient-to-r from-LimeGreen to-BrightCyan h-full'>
                <a href="#" className='flex bg-White pt-1 pb-3 self-center hover:pb-2.5'>Career</a>
              </div>
            </li>
          </ul>
          <a href="#" className= 'hidden md:block bg-gradient-to-r from-LimeGreen to-BrightCyan text-White font-sans font-semibold px-6 py-2 rounded-full active:opacity-70'>Request Invite</a>
          <img src="icon-hamburger.svg" id='NavHamburger' onClick={handleClick} className='md:hidden'></img>
        </div>
        <div id='mobilemenu' className='absolute bg-gradient-to-b from-DarkBlue to-[rgba(45,49,77,0)] min-w-[100%] min-h-[100vh] top-[100%]  z-50'>
          <ul className='flex flex-col space-y-3 items-center py-8 bg-White max-w-[90%] my-8 mx-auto text-DarkBlue rounded-lg'>
              <li>
            
                  <a href="#" className='flex bg-White  self-center'>Home</a>
  
              </li>
              <li>
                
                  <a href="#" className='flex bg-White self-center '>About</a>
               
              </li>
              <li>
                
                  <a href="#" className='flex bg-White self-center '>Contact</a>
            
              </li>
              <li>
                
                  <a href="#" className='flex bg-White  self-center '>Blog</a>
                
              </li>
              <li>
                
                  <a href="#" className='flex bg-White self-center '>Career</a>
          
              </li>
            </ul>
        </div>
      </nav>
      {/* Hero Section */}
      <div className='relative container flex flex-col-reverse items-center px-4 pb-16  mx-auto md:flex-row ' >
        <div className='flex flex-col content-center gap-4 text-center -mt-12 sm:-mt-32 md:-m-0 md:text-left'>
          <h1 className='text-5xl text-DarkBlue font-light max-w-lg sm:text-6xl '>Next generation digital banking</h1>
          <p className='text-md text-GrayishBlue md:text-[22px]  max-w-lg'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and more.</p>
          <a href="#" className= 'bg-gradient-to-r from-LimeGreen to-BrightCyan text-White font-semibold px-6 py-2 rounded-full mt-10 max-w-100%  mx-auto md:mx-0 md:max-w-fit active:opacity-70'>Request Invite</a>
        </div>
        <div className='relative md:max-h-[32rem] xl:max-h-[42rem] '>
          <img src='image-mockups.png' alt='mockup' className='relative bottom-20  z-10 sm:bottom-52 md:-right-56 md:bottom-24'></img>
          <img src='bg-intro-desktop.svg' alt='Desktop Bg' className='hidden md:inline-block absolute z-0 md:min-w-[1280px] md:-right-[54rem] md:-top-[22rem] lg:-right-[44rem] xl:-right-[36rem] -right-[36rem] '></img>
          <img src='bg-intro-mobile.svg' alt='Mobile Bg' className='inline-block absolute z-0 min-w-[375px] -top-6 -right-4 sm:min-w-[640px] sm:-right-8 sm:-top-20 md:hidden'></img>
        </div>
      </div>
      {/* Features Section */}
      <div className=' relative z-2 bg-LightGrayishBlue py-16'>
        <div className='container mx-auto'>
          <div className='text-center self-start mx-4 md:text-left'>
            <h2 className='text-4xl text-DarkBlue font-light'>Why choose Easybank?</h2>
            <p className='text-lg font-light text-GrayishBlue mt-6 max-w-xl'>We leverage Open Banking to turn your bank account into your financial hub. Control your finanaces like never before.</p>
          </div>
          <div className='text-center flex flex-col place-content-center md:text-left md:flex-row'>
            <div className='flex flex-col items-center text-center px-6 mt-12 md:items-start'>
              <img src='icon-online.svg' className='mb-4'></img>
              <h3 className='text-2xl my-4 text-center md:text-left'>Online Banking</h3>
              <p className='text-md text-GrayishBlue text-center md:text-left'>Our modern web and mobile applications allow you to keep track of your finances wherever your are in the world</p>
            </div>
            <div className='flex flex-col items-center text-center px-6 mt-12 md:items-start'>
              <img src='icon-budgeting.svg' className='mb-4'></img>
              <h3 className='text-2xl my-4 text-center md:text-left'>Simple Budgeting</h3>
              <p className='text-md text-GrayishBlue text-center md:text-left'>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits</p>
            </div>
            <div className='flex flex-col items-center text-center px-6 mt-12 md:items-start'>
              <img src='icon-onboarding.svg' className='mb-4'></img>
              <h3 className='text-2xl my-4 text-center md:text-left'>Fast Onboarding</h3>
              <p className='text-md text-GrayishBlue text-center md:text-left'>We don't do branches. Open your account in minutes online and start taking control of your finances right away</p>
            </div>
            <div className='flex flex-col items-center text-center px-6 mt-12 md:items-start'>
              <img src='icon-api.svg' className='mb-4'></img>
              <h3 className='text-2xl my-4 text-center md:text-left'>Open API</h3>
              <p className='text-md text-GrayishBlue text-center md:text-left'>Manage your savings, investments, pension, and much more from one account. Track your money has never been easier</p>
            </div>
          </div>
        </div>
      </div>
      {/* Article Section */}
      <div className='mx-auto py-16 bg-VeryLightGray'>
        <div className='container mx-auto'>
          <h2 className='text-4xl font-sans font-light text-center mx-4 md:text-left'>Latest Articles</h2>
          <div className='flex flex-col place-content-center md:flex-row'>
            <div className='m-4'>
              <img src='image-currency.jpg'></img>
              <div className='p-6 bg-White'>
                <p className='text-xs text-GrayishBlue font-sans font-light'>By Claire Robinson</p>
                <h3 className='text-lg font-sans font-light'>Receive money in any currency with no fees</h3>
                <p className='text-sm text-GrayishBlue'>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
              </div>
            </div>
            <div className='m-4'>
              <img src='image-restaurant.jpg'></img>
              <div className='p-6 bg-White'>
                <p className='text-xs text-GrayishBlue font-sans font-light'>By Wilson Hutton</p>
                <h3 className='text-lg'>Treat yourself without worrying about money</h3>
                <p className='text-sm text-GrayishBlue'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
              </div>
            </div>
            <div className='m-4'>
              <img src='image-plane.jpg'></img>
              <div className='p-6 bg-White'>
                <p className='text-xs text-GrayishBlue font-sans font-light'>By Wilson Hutton</p>
                <h3 className='text-lg'>Take your Easybank card wherever you go</h3>
                <p className='text-sm text-GrayishBlue'>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
              </div>
            </div>
            <div className='m-4'>
              <img src='image-confetti.jpg'></img>
              <div className='p-6 bg-White'>
                <p className='text-xs text-GrayishBlue font-sans font-light'>By Claire Robinson</p>
                <h3 className='text-lg'>Our invite-only Beta accounts are now live!</h3>
                <p className='text-sm text-GrayishBlue'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className='relative bg-DarkBlue z-20'>
        <div className='container flex flex-col items-center gap-4 p-12 mx-auto text-center md:flex-row md:justify-between md:items-start'>
          <div className='flex flex-col items-center gap-8 md:gap-12 md:items-start'>
            <img src='logo2.svg' className='w-max'></img>
            <div className='flex flex-row gap-5'>
              <img src='icon-facebook.svg'></img>
              <img src='icon-youtube.svg'></img>
              <img src='icon-twitter.svg'></img>
              <img src='icon-pinterest.svg'></img>
              <img src='icon-instagram.svg'></img>
              <a href="https://github.com/Dradeon/Landing-Page-Project" rel="noopener" target={'_blank'}><img src='icon-github.png' width={'20px'} height={'20px'}></img></a>
            </div>
          </div>
          <div className='flex flex-col gap-3 text-White md:flex-row md:text-left md:gap-20'>
            <div className='flex flex-col gap-3 text-lg'>
              <a href='#'>About Us</a>
              <a href='#'>Contact</a>
              <a href='#'>Blog</a>
            </div>
            <div className='flex flex-col gap-3'>
              <a href='#'>Careers</a>
              <a href='#'>Support</a>
              <a href='#'>Privacy Policy</a>
            </div>
          </div>
          <div className='flex flex-col place-content-center gap-6 p-4 md:place-content-end'>
            <a href="#" className= 'block bg-gradient-to-r from-LimeGreen to-BrightCyan text-White font-sans font-semibold px-6 py-2 rounded-full active:opacity-70'>Request Invite</a>
            <p className='text-GrayishBlue'>© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Landing