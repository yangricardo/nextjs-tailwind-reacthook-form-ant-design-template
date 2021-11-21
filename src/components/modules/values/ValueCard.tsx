import { ValueDTO } from '@/backend/modules/value/ValueDTO';
import Link from 'next/link';

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
      text-gray-800 hover:text-blue-700
      bg-white
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
  <div className="flex flex-col space-y-2 my-2">
    {values?.map(value => (
      <Link
        key={value.id}
        href={`/implementation-references/sample-values-api/${value.id}`}
        passHref
      >
        <a>
          <ValueCard {...value} />
        </a>
      </Link>
    ))}
  </div>
);
