import { Property } from '../components/PropertyCarousel';
import { CarouselImgTwo, CarouselImgThree, CarouselImgOne } from '../../../../public/images/index';

interface UsePropertyListingsReturn {
  properties: Property[];
}

const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Urban Prime Plaza Premiere',
    badge: 'MOST CLICKED',
    images: [
      CarouselImgOne.src as string,
      CarouselImgOne.src as string,
      CarouselImgOne.src as string,
    ],
  },
  {
    id: '2',
    title: 'Urban Prime Plaza Premiere',
    badge: 'MOST WATCHLISTED',
    images: [
      CarouselImgTwo.src as string,
      CarouselImgTwo.src as string,
      CarouselImgTwo.src as string,
      CarouselImgTwo.src as string,
      CarouselImgTwo.src as string,
    ],
  },
  {
    id: '3',
    title: 'Urban Prime Plaza Premiere',
    badge: 'HOTTEST LISTING',
    images: [CarouselImgThree.src as string, CarouselImgThree.src as string, CarouselImgThree.src as string, CarouselImgThree.src as string, CarouselImgThree.src as string,],
  },
];

export const usePropertyListings = (): UsePropertyListingsReturn => {
  return {
    properties: mockProperties,
  };
};

