import { CoffeeProperties } from '@/lib/utils/isCoffeeProperties';

import { CardHeader } from '../../CardHeader';
import { StatusTag } from '../../StatusTag';

type CoffeeCardProps = CoffeeProperties;

export function CoffeeCard(props: CoffeeCardProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <CardHeader type="Hobbies" label="Coffee" />

      <div className="p-5">
        <div className="flex gap-2">
          <StatusTag
            status={props.type}
            color={props.type === 'Espresso' ? 'indigo' : 'lime'}
          />
          <StatusTag status="Now brewing" color="orange" />
        </div>
        <h3 className="font-serif-variation mt-3 mb-5 font-serif text-4xl font-light md:text-5xl lg:text-6xl">
          {props.name}
        </h3>
        <p className="text-neutral-400">
          <span>{props.origin}</span> · <span>{props.roaster}</span>
        </p>
        <p className="text-neutral-700 line-clamp-1">{props.notes}</p>
      </div>
    </div>
  );
}
