import { NextPage } from 'next';
import { Radio, Input } from 'antd';
import { useState } from 'react';
const AntDesignPage: NextPage = () => {
  const [currentInputValue, setCurrentInputValue] = useState<string>('');
  return (
    <div className="w-full flex flex-col space-y-4 justify-center items-center">
      <div className="w-40">
        <Input onChange={e => setCurrentInputValue(e.target.value)} />
      </div>

      <Radio.Group
        onChange={e => setCurrentInputValue(e.target.value)}
        defaultValue="a"
      >
        <Radio.Button value="Hangzhou">Hangzhou</Radio.Button>
        <Radio.Button value="Shanghai">Shanghai</Radio.Button>
        <Radio.Button value="Beijing">Beijing</Radio.Button>
        <Radio.Button value="Chengdu">Chengdu</Radio.Button>
      </Radio.Group>
      <h1 className="text-xl font-mono">{currentInputValue}</h1>
    </div>
  );
};

export default AntDesignPage;
