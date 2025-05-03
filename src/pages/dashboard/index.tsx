import React, { } from 'react';
import { TbCheckbox, TbLicense, TbList } from 'react-icons/tb';
import { LastAplications } from '../../components';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import fileSearchImage from "../../assets/file-search.svg"

const Dashboard: React.FC = (): React.JSX.Element => {

  return (
    <div className="p-4">
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-5 grid grid-cols-3 gap-6">
          <div className="card col-span-3 bg-blue-600/20 text-blue-700 h-48 flex flex-col j p-6">
            <h1 className='text-5xl font-bold mb-2'><span className='text-blue-600 text-5xl'>Fire Choice</span> tizimiga xush kelibsiz</h1>
            <p className='text-2xl text-slate-600 font-semibold' >“Ochiq, Ishonchli va Shaffof tender tizimi”</p>
          </div>
          <Link to={"/aplications"} className="d-f gap-3 card rounded-3xl h-18 text-lg font-semibold"><div className="p-3 rounded-full bg-blue-600/10 text-blue-500"><TbLicense size={24} /></div> Arizalar</Link>
          <Link to={"/check-aplications"} className="d-f gap-3 card rounded-3xl h-18 text-lg font-semibold"><div className="p-3 rounded-full bg-blue-600/10 text-blue-500"><TbCheckbox size={24} /></div> Arizani tekshirish</Link>
          <Link to={"/tenders"} className="d-f gap-3 card rounded-3xl h-18 text-lg font-semibold"><div className="p-3 rounded-full bg-blue-600/10 text-blue-500"><TbList size={24} /></div> tenderlar</Link>
        </div>
        <div className="col-span-2 card flex-center flex-col gap-4">
          <img src={fileSearchImage} alt="" className='w-36' />
          <h6 className='text-slate-500 font-semibold text-xl'>Arizalarni tekshirish</h6>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 h-120 mt-6">
        <div className="card">
          <div className="flex-between">
            <h6 className='text-slate-500 font-semibold mb-3 text-lg' >Oxirgi kelib tushgan arizalar</h6>
            <Link to="/aplications"><Button type='link'>Barcha arizalar</Button></Link>
          </div>
          <LastAplications />
        </div>
        <div className="card">
          <div className="flex-between">
            <h6 className='text-slate-500 font-semibold mb-3 text-lg' >Tenderlar</h6>
            <Link to="/aplications"><Button type='link'>Barcha tenderlar</Button></Link>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex justify-between w-full max-w-5xl mx-auto">
            <div className="space-y-2 w-2/3">
              <div className="text-sm font-semibold">№ 25411012161654</div>
              <div>
                <div className="text-sm text-gray-500">Tender nomi</div>
                <p className="text-[15px] font-medium leading-5">Уэбекистон Республикаси Махалла уюшмаси Нукус тумани булими Дийхан арна махалласининг биносини куриш</p>
              </div>
              <div className="text-sm text-gray-500">Hudud</div>
              <p>Tashkent</p>
              <div className="text-sm text-gray-500">Buyurtmachi</div>
              <p className="font-medium">MAHALLALAR UYUSHMASI NUKUS TUMANI BO‘LIMI</p>
              <div className="text-sm text-gray-500">Obyekt sohasi</div>
            </div>

            <div className="w-1/3 pl-6 border-l border-gray-200 space-y-2">
              <div className="flex justify-between items-center">
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                  davlat budjeti
                </span>
                <span className="text-xs font-semibold text-green-600">Faol</span>
              </div>
              <div>
                <div className="text-sm text-gray-500">Boshlang‘ich narx (QQS bilan)</div>
                <p className="font-semibold text-lg">648 149 930 UZS</p>
              </div>
              <div>
                <div className="text-sm text-gray-500">Lot boshlanish sanasi</div>
                <p className="text-sm"> 02-05-2025</p>
              </div>
              <div>
                <div className="text-sm text-gray-500">Lot tugash sanasi</div>
                <p className="text-sm">09-05-2025</p>
              </div>
              <div>
                <span className="text-sm text-green-600">Reyting (5/10)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;