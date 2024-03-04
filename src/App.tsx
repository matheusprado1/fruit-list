import { useEffect, useState } from 'react';
import { api } from './services/api';

import FruitList from './components/FruitList';

import { AxiosError } from 'axios';

import './App.css'

export interface IFruit {
  id: number;
  name: string;
  category: string;
  price: number;
}

function App() {

  const [fruitList, setFruitList] = useState<IFruit[]>([]);

  useEffect(() => {
    const getFruits = async () => {
      try {
        const response = await api.get<IFruit[]>("/fruits");
        setFruitList(response.data);
      } catch (error) {
        const currentError = error as AxiosError<string>
        console.log(currentError);
      }
    }
    getFruits();
  }, [])


  return (
    <>
      <FruitList
        fruitList={fruitList}
      />
    </>
  )
}

export default App
