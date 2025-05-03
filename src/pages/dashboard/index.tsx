import React, { } from 'react';
import { TbCheckbox, TbLicense, TbList } from 'react-icons/tb';
import { LastAplications } from '../../components';

const Dashboard: React.FC = (): React.JSX.Element => {

  return (
    <div className="p-4">
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-5 grid grid-cols-3 gap-6">
          <div className="card col-span-3 bg-blue-600/20 h-48"></div>
          <div className="d-f gap-3 card rounded-3xl h-18 text-lg font-semibold"><div className="p-3 rounded-full bg-blue-600/10 text-blue-500"><TbLicense size={24} /></div> Arizalar</div>
          <div className="d-f gap-3 card rounded-3xl h-18 text-lg font-semibold"><div className="p-3 rounded-full bg-blue-600/10 text-blue-500"><TbCheckbox size={24} /></div> Arizani tekshirish</div>
          <div className="d-f gap-3 card rounded-3xl h-18 text-lg font-semibold"><div className="p-3 rounded-full bg-blue-600/10 text-blue-500"><TbList size={24} /></div> tenderlar</div>
        </div>
        <div className="col-span-2 card">

        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 h-120 mt-6">
        <div className="card">
          <h6 className='text-slate-400 font-medium mb-3' >Ariza beruvchi malumotlari</h6>
          <LastAplications />
        </div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Dashboard;