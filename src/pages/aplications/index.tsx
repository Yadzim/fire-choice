import React, { } from 'react';
import { Table, TableProps, Tag } from 'antd';
import { aplications } from '../../data';

const AplicationList: React.FC = (): React.JSX.Element => {

  const columns: TableProps<any>['columns'] = [
    {
      title: 'Nomi',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'STIR',
      dataIndex: 'stir',
      key: 'age',
    },
    {
      title: 'Sanasi',
      dataIndex: 'date',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: () => AplicationStatus(),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <div>
          <a>Arizani ko'rish</a>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="card mb-4 py-3">Kelib Tushgan Arizalar</div>
      <div className="card py-4">
        <Table columns={columns} dataSource={aplications} />
      </div>
    </div>
  );
};

export default AplicationList;

function AplicationStatus(status?: number) {
  const s = status || Math.floor(Math.random() * 4);
  switch (s) {
    case 0:
      return <Tag color="green">Tasdiqlangan</Tag>;
    case 1:
      return <Tag color="red">Tasdiqlanmagan</Tag>;
    case 2:
      return <Tag color="blue">Kutilayotgan</Tag>;
    default:
      return <Tag color="orange">Tekshirilmoqda</Tag>;
  }
}