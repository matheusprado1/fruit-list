import { IFruit } from "../../App";
import FruitCard from "./FruitCard";

interface IFruitListProps {
  fruitList: IFruit[];
}

const FruitList = ({ fruitList }: IFruitListProps) => {
  return (
    <ul>
      {fruitList.map((fruit) => (
        <FruitCard
          key={fruit.id}
          fruit={fruit}
        />
      ))}
    </ul>
  )
}

export default FruitList;