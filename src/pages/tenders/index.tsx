import React, { } from 'react';
import { tenders } from '../../data';
import { DatePicker, Input, Select } from 'antd';

const Tenders: React.FC = (): React.JSX.Element => {

  return (
    <div className="p-4">

      <div className="card-">
        <h6 className='text-slate-500 font-semibold mb-3 text-xl'>Tenderlar ro'yxati</h6>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <div className="col-span-3 flex flex-col gap-4">
          {
            tenders.map((tender, index) => (
              <div className="bg-white rounded-xl shadow-md p-6 flex justify-between w-full max-w-5xl- mx-auto" key={index}>
                <div className="space-y-2 w-2/3">
                  <div className="text-sm font-semibold">№ {tender.id}</div>
                  <div>
                    <div className="text-sm text-gray-500">Tender nomi</div>
                    <p className="text-[15px] font-medium leading-5">{tender.name}</p>
                  </div>
                  <div className="text-sm text-gray-500">Hudud</div>
                  <p>{tender.address}</p>
                  <div className="text-sm text-gray-500">Buyurtmachi</div>
                  <p className="font-medium">{tender.user}</p>
                </div>

                <div className="w-1/3 pl-6 border-l border-gray-200 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                      {tender.tags}
                    </span>
                    {
                      tender.status === 'Faol' ?
                        <span className="text-xs font-semibold text-green-600">
                          {tender.status}
                        </span> :
                        <span className="text-xs font-semibold text-red-600">
                          {tender.status}
                        </span>
                    }
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Boshlang‘ich narx (QQS bilan)</div>
                    <p className="font-semibold text-lg">{tender.price}</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Lot boshlanish sanasi</div>
                    <p className="text-sm">{tender.date}</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Lot tugash sanasi</div>
                    <p className="text-sm">{tender.end_date}</p>
                  </div>
                  <div>
                    <span className="text-sm text-green-600">Qatnashuvchilar: <b>{tender.count}</b></span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="card">
          <h6 className='text-slate-500 font-semibold mb-3 text-lg'>Filterlash</h6>
          <div className="flex flex-col gap-8">
            <div className="">
              <label className="block text-sm font-medium text-gray-600 mb-1">Obyekt ID</label>
              <Input size='large' className='w-full' placeholder='123456789' />
            </div>
            <div className="">
              <label className="block text-sm font-medium text-gray-600 mb-1">Tender nomi</label>
              <Input size='large' className='w-full' placeholder='Tender nomini kiriting ...' />
            </div>
            <div className="">
              <label className="block text-sm font-medium text-gray-600 mb-1">tugash sanasi</label>
              <DatePicker size='large' className='w-full' />
            </div>
            <div className="">
              <label className="block text-sm font-medium text-gray-600 mb-1">Tenderlar soni</label>
              <Select size='large' defaultValue="10" className='w-full'>
                <Select.Option value="10">10</Select.Option>
                <Select.Option value="20">20</Select.Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tenders;