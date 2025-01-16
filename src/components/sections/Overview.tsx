
import AppStoreIcon from '/src/assets/icons/appstore_small.svg';
import googlePlaySvg from '/src/assets/icons/playstore_small.svg';

const Overview = () => {
  return (
    <div className='font-sans mt-8'>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className='text-3xl font-bold'>The Uber for Scholarships</h1>
        <p className='text-center'>A platform connecting the world with financially struggling students <br />
          in Government Primary Schools of Bangladesh</p>
        <div className="flex gap-4 items-center">
          <img src={AppStoreIcon} alt="App Store" />
          <img src={googlePlaySvg} alt="Google Play" />
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default Overview