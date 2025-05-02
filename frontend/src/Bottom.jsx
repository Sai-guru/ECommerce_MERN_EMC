import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandMeta } from 'react-icons/tb';

const Bottom = () => {
  return (
    <footer className='bg-white border-t'>
      <div className='container mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8'>

        {/* About */}
        <div>
          <h3 className='text-xl font-semibold text-gray-800 mb-3'>About Vendico</h3>
          <p className='text-gray-600 text-sm leading-relaxed'>
            We bring fashion that speaks your vibe. Explore quality clothing that keeps you stylish and confident.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className='text-xl font-semibold text-gray-800 mb-3'>Customer Care</h3>
          <ul className='text-sm text-gray-600 space-y-2'>
            <li><span className='text-gray-800 font-medium'>Order Help:</span> Track & manage orders</li>
            <li><span className='text-gray-800 font-medium'>Returns:</span> Easy return policy</li>
            <li><span className='text-gray-800 font-medium'>Support:</span> FAQs & Chat</li>
            <li><span className='text-gray-800 font-medium'>Find Us:</span> Store Locator</li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className='text-xl font-semibold text-gray-800 mb-3'>Connect With Us</h3>
          <div className='flex space-x-4 mb-4 text-gray-600'>
            <a href='https://auth.meta.com/settings/vyi/' target='_blank' rel='noopener noreferrer' className='hover:text-gray-900 transition-colors'>
              <TbBrandMeta className='h-5 w-5' />
            </a>
            <a href='https://www.instagram.com/prigeesh._.2006?igsh=MWJhZHdtamluNXZzZw==' target='_blank' rel='noopener noreferrer' className='hover:text-gray-900 transition-colors'>
              <IoLogoInstagram className='h-5 w-5' />
            </a>
            <a href='https://x.com/GURUKRISH891757' target='_blank' rel='noopener noreferrer' className='hover:text-gray-900 transition-colors'>
              <RiTwitterXLine className='h-5 w-5' />
            </a>
          </div>
          <div className='text-sm text-gray-600 space-y-1'>
            <p className='flex items-center'><FiPhoneCall className='mr-2' /> +91 7550177315</p>
            <p className='flex items-center'><FiMail className='mr-2' /> support@Vendico.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className='bg-gray-50 py-4 border-t text-center'>
        <p className='text-xs text-gray-500'>&copy; 2025 Vendico. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Bottom;
