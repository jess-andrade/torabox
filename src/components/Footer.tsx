import * as React from "react";
import Image from 'next/image';
import { motion } from "framer-motion"

//-- my imports 
import styles from '../styles/section.module.css'
import UsCard from './UsCard';

// -- MUI
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export default function Footer() {
  return (
    <>

      <section id="footer">


        {/* main container */}
        <div className="flex flex-col bg-[#181b17] min-w-full min-h-80 pt-10 justify-center ">


          {/* content */}
          <div className='flex flex-wrap flex-row items-center justify-around'>

            {/* ------------ title */}
            <div className="flex flex-row text-[#f1f5f9] font-bold text-5xl tracking-[.24em]">
              {" "}
              TORABOX <p className="text-[#fca04f]"> . </p>
            </div>

            {/* ------------ info */}
            <div className='flex flex-col gap-4 text-[#ebeae4]'>
              <p>Copyright © 2024 TORABOX - Todos os direitos reservados.</p>

              <div className='flex flex-row justify-around'>
                <p><EmailIcon color='primary' /> torabox98@gmail.com  </p>
                <p><FmdGoodIcon color='primary' /> Salvador-BA</p>
              </div>

            </div>

          </div>

        </div>
      </section >
    </>
  )
}