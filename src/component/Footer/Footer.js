import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="my-5">
            <div className="text-center text-lg-start text-white" style={{ backgroundColor: "blue" }}>
                {/* social media */}
                <div className="d-flex justify-content-between p-4" style={{ backgroundColor: "black" }}>
                    <div class="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <AiOutlineFacebook AiOutlineFacebook className='me-4'>  </AiOutlineFacebook>
                        <FiTwitter className='me-4'> </FiTwitter>
                        <AiOutlineInstagram AiOutlineInstagram className='me-4'>  </AiOutlineInstagram>
                        <AiOutlineLinkedin AiOutlineFacebook className='me-4'>  </AiOutlineLinkedin>
                    </div>
                </div>
                <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
         >
      © 2020 Copyright:
      <a class="text-white"  style={{borderStyle: "none"}} href="http://localhost:3000/#home"
         >NexusBD.com</a
        >
    </div>
            </div>
        </div>
    );
};

export default Footer;