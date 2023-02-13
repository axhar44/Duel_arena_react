import { FaTwitter , FaYoutube , FaDiscord } from 'react-icons/fa' 

const Footer = () => {
  return (
    <div className=" flex items-center justify-between text-normal mt-[100px]">
    <div className="w-[80px] h-[19px] flex items-center justify-between">
      <FaTwitter className='text-[#9996BA]'/>
      <FaYoutube className='text-[#9996BA]'/>
      <FaDiscord className='text-[#9996BA]'/>
      </div>     
    <div className='text-[#9996BA] text-[12px]'>	&#169;2020-2022 RSBITs All Rights Reserved</div>     
    </div>
  )
}

export default Footer;