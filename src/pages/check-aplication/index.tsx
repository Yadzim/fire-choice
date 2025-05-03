import { Button, Tag } from 'antd';
import React, { useState } from 'react';
import { TbAlertCircle, TbCircleCheck, TbCircleX } from 'react-icons/tb';
import soliqImg from '../../assets/soliq.png';
import relationImg from '../../assets/iib.png';
import failImg from '../../assets/mygov.png';

type Statustype = {
  loading: boolean
  status: number
}

const Checkaplication: React.FC = (): React.JSX.Element => {
  const [soliq, setSoliq] = useState<Statustype>({ loading: false, status: 0 });
  const [relation, setRelation] = useState<Statustype>({ loading: false, status: 0 });
  const [fail, setFail] = useState<Statustype>({ loading: false, status: 0 });

  function checkStatus(type: number) {
    switch (type) {
      case 1: {
        setSoliq(p => ({ ...p, loading: true }));
        break;
      }
      case 2: {
        setFail(p => ({ ...p, loading: true }));
        break;
      }
      case 3: {
        setRelation(p => ({ ...p, loading: true }));
        break;
      }
    }
    setTimeout(() => {
      const status = Math.floor(Math.random() * 2) + 1;
      switch (type) {
        case 1: {
          setSoliq(p => ({ ...p, loading: false, status }));
          break;
        }
        case 2: {
          setFail(p => ({ ...p, loading: false, status }));
          break;
        }
        case 3: {
          setRelation(p => ({ ...p, loading: false, status }));
          break;
        }
      }
    }, 2000);
  }

  return (
    <div className="p-4">
      <div className="card- py-3 mb-4">
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
            <h1 className="text-xl font-bold mb-2">EUROASIA INTERNATIONAL MARKETING</h1>
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
              <span className="font-semibold text-slate-400">Tashkilot rahbari:</span>
              <span >Abdukarimov Bekzod Abdullayevich</span>
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
                {
                  soliq.status ? Status(1, soliq.status)
                    : <Button onClick={() => checkStatus(1)} loading={soliq.loading} ><img src={soliqImg} alt="" className='h-6' /> Tekshirish</Button>
                }
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
                {
                  fail.status ? Status(2, fail.status)
                    : <Button onClick={() => checkStatus(2)} loading={fail.loading} ><img src={failImg} alt="" className='h-6' />  Tekshirish</Button>
                }
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
                {
                  relation.status ? Status(3, relation.status)
                    : <Button onClick={() => checkStatus(3)} loading={relation.loading} ><img src={relationImg} alt="" className='h-6' />  Tekshirish</Button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkaplication;

// TbAlertCircle
// TbCircleX

function Status(type: number, status: number) {
  switch (type) {
    case 1:
      switch (status) {
        case 1:
          return <div className='d-f gap-2 rounded-lg p-3 bg-green-600/10 text-green-500'>
            <TbCircleCheck size={24} />
            Qarzdorlik mavjud emas
          </div>;
        case 2:
          return <div className='d-f gap-2 rounded-lg p-3 bg-red-600/10 text-red-500'>
            <TbCircleX size={24} />
            Qarzdorlik mavjud
          </div>;
        default:
          return <div className='d-f gap-2 rounded-lg p-3 bg-green-600/10 text-green-500'>
            <TbCircleCheck size={24} />
            Qarzdorlik mavjud emas
          </div>;
      };
    case 2:
      switch (status) {
        case 1:
          return <div className='d-f gap-2 rounded-lg p-3 bg-green-600/10 text-green-500'>
            <TbCircleCheck size={24} />
            Tashkilot hozirda ishlamoqda
          </div>;
        case 2:
          return <div className='d-f gap-2 rounded-lg p-3 bg-red-600/10 text-red-500'>
            <TbCircleX size={24} />
            Bankrotlik elon qilingan
          </div>;
        case 3:
          return <div className='d-f gap-2 rounded-lg p-3 bg-yellow-500/10 text-yellow-500'>
            <TbAlertCircle size={24} />
            Yopilish arafasida
          </div>;
        default:
          return <div className='d-f gap-2 rounded-lg p-3 bg-green-600/10 text-green-500'>
            <TbCircleCheck size={24} />
            Tashkilot hozirda ishlamoqda
          </div>;
      };
    case 3:
      switch (status) {
        case 1:
          return <div className='d-f gap-2 rounded-lg p-3 bg-green-600/10 text-green-500'>
            <TbCircleCheck size={24} />
            Qarindoshlik mavjud emas
          </div>;
        case 2:
          return <div className='d-f gap-2 rounded-lg p-3 bg-red-600/10 text-red-500'>
            <TbCircleX size={24} />
            Qarindoshlik mavjud
          </div>;
        default:
          return <div className='d-f gap-2 rounded-lg p-3 bg-green-600/10 text-green-500'>
            <TbCircleCheck size={24} />
            Qarindoshlik mavjud emas
          </div>;
      };
    default:
      return <></>;
  }

}