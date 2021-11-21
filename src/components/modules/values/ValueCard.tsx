import { ValueDTO } from '@/backend/modules/value/ValueDTO';

export const ValueCard = ({ id, value }: ValueDTO) => {
  return (
    <div
      className="
      w-96 p-2 flex flex-col
      justify-center items-center content-center
      border-2 border-gray-300
      rounded-md
      hover:shadow-md hover:border-blue-200
      cursor-pointer
    "
    >
      <span>
        {id} - {value}
      </span>
    </div>
  );
};

interface IValueCardList {
  values?: ValueDTO[];
}

export const ValueCardList = ({ values }: IValueCardList) => (
  <>
    {values?.map(value => (
      <ValueCard key={value.id} {...value} />
    ))}
  </>
);
