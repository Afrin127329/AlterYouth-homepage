
import AppStoreIcon from '/src/assets/icons/appstore_small.svg';
import googlePlaySvg from '/src/assets/icons/playstore_small.svg';
import appGraduation from '/src/assets/images/app_graduation.png';
import appScholarship from '/src/assets/images/app_scholarship.jpg';
import appSchool from '/src/assets/images/app_school.png';

const Overview = () => {
  return (
    <div className='font-sans mt-8 pb-10 text-gray-800 bg-gradient-to-t from-[#fafafa] via-transparent to-transparent'>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className='text-3xl font-bold'>The Uber for Scholarships</h1>
        <p className='text-center'>A platform connecting the world with financially struggling students <br />
          in Government Primary Schools of Bangladesh</p>
        <div className="flex gap-4 items-center">
          <img src={AppStoreIcon} alt="App Store" />
          <img src={googlePlaySvg} alt="Google Play" />
        </div>
      </div>
      <div className="flex-wrap gap-5 flex lg:flex-nowrap justify-center mt-10">
        <div className='flex flex-col items-center gap-4'>
          <img src={appScholarship} alt="App School" className='h-[350px]' />
          <div className='text-center'>
            <h2 className='my-3 text-xl font-bold'>Transfer directly</h2>
            <p className='w-[350px]'>Your scholarship is transferred directly to your student's family on their mobile bank account.</p>
          </div>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <img src={appSchool} alt="App School" className='h-[350px]' />
          <div className='text-center'>
            <h2 className='my-3 text-xl font-bold'>Get school reports</h2>
            <p className='w-[350px]'>View attendance data and report cards from your student's school, until completion of Class 5.</p>
          </div>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <img src={appGraduation} alt="App School" className='h-[350px]' />
          <div className='text-center'>
            <h2 className='my-3 text-xl font-bold'>Ensure a literate citizen</h2>
            <p className='w-[350px]'>Your scholarship continues until completion of class 5, when your student achieves literacy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview