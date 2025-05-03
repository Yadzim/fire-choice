import { Button, Tag } from 'antd';
import React, { } from 'react';
import { TbCircleCheck } from 'react-icons/tb';

const Checkaplication: React.FC = (): React.JSX.Element => {

  return (
    <div className="p-4">
      <div className="card py-3 mb-4">
        Arizalarni tekshirish
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="card">
          <h6 className='text-slate-400 font-medium' >Ariza beruvchi malumotlari</h6>
          {/* <div className="avatar relative pt-14">
            <img src={BGProfile} alt="" className='absolute top-0 h-36 w-full object-cover rounded-xl opacity-60 z-10' />
            <div className="relative w-max h-max rounded-full mx-auto z-20 bg-white p-2">
              <FaCircleUser size={150} className="relative text-gray-100 z-20 mx-auto" />
            </div>
          </div> */}

          <div className="text-center my-8">
            <h1 className="text-xl font-bold">EUROASIA INTERNATIONAL MARKETING</h1>
            <Tag color='blue'>MChJ</Tag>
          </div>
          <div className="flex flex-col gap-4 p-2 ">
            <div className="flex-between gap-2">
              <span className="font-semibold text-slate-400">Tashkilot nomi:</span>
              <span >EUROASIA INTERNATIONAL MARKETING</span>
            </div>
            <div className="flex-between gap-2">
              <span className="font-semibold text-slate-400">STIR:</span>
              <span >302913135</span>
            </div>
            <div className="flex-between gap-2">
              <span className="font-semibold text-slate-400">Tashkil topgan sana:</span>
              <span >02.08.2022</span>
            </div>
            <div className="flex-between gap-2">
              <span className="font-semibold text-slate-400">Yuridik manzili:</span>
              <span >Toshkent shahri, Chilonzor tumani, FURQAT KO`CHASI 191-UY</span>
            </div>
            <div className="flex-between gap-2">
              <span className="font-semibold text-slate-400">Telefon raqami:</span>
              <span >+998 (99) 999 99 99</span>
            </div>


          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="card">
            <h6 className='text-slate-400 font-medium'>Soliqdan qarzdorlikni tekshirish</h6>
            <br />
            <div className="">
              <div className="">
                <h2 className="text-lg font-semibold">EUROASIA INTERNATIONAL MARKETING <Tag>MChJ</Tag></h2>
                <div><span className='text-slate-400'>STIR:</span> <b>302913135</b></div>
              </div>
              <div className="mt-2">
                <Button ><TbCircleCheck size={18} /> Tekshirish</Button>
              </div>
            </div>
          </div>
          <div className="card">
            <h6 className='text-slate-400 font-medium'>Bankirotlikni tekshirish</h6>
            <br />
            <div className="">
              <div className="">
                <h2 className="text-lg font-semibold">EUROASIA INTERNATIONAL MARKETING <Tag>MChJ</Tag></h2>
                <div><span className='text-slate-400'>STIR:</span> <b>302913135</b></div>
              </div>
              <div className="mt-2">
                <Button ><TbCircleCheck size={18} /> Tekshirish</Button>
              </div>
            </div>
          </div>
          <div className="card">
            <h6 className='text-slate-400 font-medium'>hakamlar bilan qarindoshlik holati</h6>
            <br />
            <div className="">
              <div className="">
                <h2 className="text-lg font-semibold">EUROASIA INTERNATIONAL MARKETING <Tag>MChJ</Tag></h2>
                <div><span className='text-slate-400'>Korxona rahbari:</span> <b>Abdukarimov Bekzod Abdullayevich</b></div>
              </div>
              <div className="mt-2">
                <Button ><TbCircleCheck size={18} /> Tekshirish</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkaplication;