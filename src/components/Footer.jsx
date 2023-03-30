import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-around items-center">
      <div className="w-[80%] h-fit">
        <p
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-t-light-grey text-center text-sm"
        >
          This is <span className="underline underline-offset-2">not</span> the official Tesla website. The information provided here
          is for educational and informational purposes only. I am not
          affiliated with Tesla Motors, Inc. in any way. Any reliance on the
          information provided on this website is at your own risk. I make no
          representation or warranty regarding the accuracy, completeness,
          reliability, suitability, or availability of the information provided.
          I shall not be liable for any loss or damage arising from the use of
          this website.
        </p>
      </div>
      <div className="w-[80%] h-fit flex justify-center flex-col items-center">
        <span
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="text-t-light-grey text-center text-md"
        >
          Website made by{" "}
          <span style={{ fontStyle: "italic", fontFamily:'Montserrat, sans-serif'}}
          className='underline underline-offset-2 text-white'
          >Secrieru Valeriu</span>
        </span>
        <Link className="bg-t-white rounded-md p-2 flex justify-around items-center w-[110px] mt-4" to={'https://github.com/valeriusec'} target='_blank'>
          <i style={{color: '#333333', fontSize: '26px'}} className="fa-brands fa-github"></i>
          <span style={{fontFamily: 'Montserrat, sans-serif', fontWeight: '500'}} className="text-t-very-dark-grey text-lg"> Github</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
