import { BsHouseDoor, BsDoorOpen, BsPeople, BsFlower1, BsPencil } from 'react-icons/bs';
import { SlDiamond, SlCalender } from 'react-icons/Sl';
import { GiFireplace, GiGreekTemple } from 'react-icons/Gi';
import { AiOutlinePicture, AiOutlineGift } from 'react-icons/ai';
import { RiKnifeBloodLine } from 'react-icons/Ri';

const structureOptions = [
  { name: 'House', icon: '' },
  { name: 'Apartment', icon: '' },
  { name: 'Barn', icon: '' },
  { name: 'Bed & Breakfast', icon: '' },
  { name: 'Boat', icon: '' },
  { name: 'Cabin', icon: '' },
  { name: 'Camper/RV', icon: '' },
  { name: 'Casa particular', icon: '' },
  { name: 'Castle', icon: '' },
  { name: 'Cave', icon: '' },
  { name: 'Container', icon: '' },
  { name: 'Cycladic home', icon: '' },
  { name: 'Dammuso', icon: '' },
  { name: 'Dome', icon: '' },
  { name: 'Earth home', icon: '' },
  { name: 'Farm', icon: '' },
  { name: 'Guesthouse', icon: '' },
  { name: 'Hotel', icon: '' },
  { name: 'Houseboat', icon: '' },
  { name: 'Kezhan', icon: '' },
  { name: 'Minsu', icon: '' },
  { name: 'Riad', icon: '' },
  { name: 'Ryokan', icon: '' },
  { name: 'Shepherd’s Hut', icon: '' },
  { name: 'Tent', icon: '' },
  { name: 'Tiny home', icon: '' },
  { name: 'Tower', icon: '' },
  { name: 'Treehouse', icon: '' },
  { name: 'Trullo', icon: '' },
  { name: 'Windmill', icon: '' },
  { name: 'Yurt', icon: '' },
];

const privacyOptions = [
  {
    header: 'An entire place',
    description: 'Guests have the whole place to themselves.',
    icon: BsHouseDoor,
  },
  {
    header: 'A private room',
    description: 'Guests sleep in a private room but some areas may be shared with you or others',
    icon: BsDoorOpen,
  },
  {
    header: 'An shared room',
    description: 'Guests sleep in a room or common area that may be shared with you or others',
    icon: BsPeople,
  },
];

const occupancyOptions = [
  { name: 'Me', icon: 0 },
  { name: 'My family', icon: 0 },
  { name: 'Other guests', icon: 0 },
  { name: 'Roommates', icon: 0 },
];

const amenityOptions = [
  { name: 'Wifi', icon: '' },
  { name: 'TV', icon: '' },
  { name: 'Kitchen', icon: '' },
  { name: 'Washer', icon: '' },
  { name: 'Free parking on premises', icon: '' },
  { name: 'Paid parking on premises', icon: '' },
  { name: 'Air conditioning', icon: '' },
  { name: 'Dedicated workspace', icon: '' },
];

const standoutOptions = [
  { name: 'Pool', icon: '' },
  { name: 'Hot tub', icon: '' },
  { name: 'Patio', icon: '' },
  { name: 'BBQ grill', icon: '' },
  { name: 'Outdoor dining area', icon: '' },
  { name: 'Fire pit', icon: '' },
  { name: 'Pool table', icon: '' },
  { name: 'Indoor fireplace', icon: '' },
  { name: 'Piano', icon: '' },
  { name: 'Exercise Equipment', icon: '' },
  { name: 'Lake access', icon: '' },
  { name: 'Beach access', icon: '' },
  { name: 'Ski-in/Ski-out', icon: '' },
  { name: 'Outdoor shower', icon: '' },
];

const safetyOptions = [
  { name: 'Smoke alarm', icon: '' },
  { name: 'First aid kit', icon: '' },
  { name: 'Fire extinguisher', icon: '' },
  { name: 'Carbon monoxide alarm', icon: '' },
];

const highlightOptions = [
  { name: 'Rare', icon: SlDiamond },
  { name: 'Rustic', icon: GiFireplace },
  { name: 'In nature', icon: BsFlower1 },
  { name: 'Memorable', icon: AiOutlinePicture },
  { name: 'Romantic', icon: AiOutlineGift },
  { name: 'Historic', icon: GiGreekTemple },
];

const securityOptions = [
  { key: 'cameras', value: 'Security camera(s)' },
  { key: 'weapons', value: 'Weapons' },
  { key: 'animals', value: 'Dangerous animals' },
];

const nextSteps = [
  {
    header: 'Set up your calender',
    description:
      'Choose which dates are available. Guests can start booking 24 hours after you publish',
    icon: SlCalender,
  },
  {
    header: 'Adjust your settings',
    description:
      'Set house rules, select a cancellation policy, choose how guests can book, and more',
    icon: BsPencil,
  },
  {
    header: 'Prepare for your first guest',
    description: 'Find tips in our Resource center and access customer support',
    icon: RiKnifeBloodLine,
  },
];

export {
  structureOptions,
  privacyOptions,
  occupancyOptions,
  amenityOptions,
  standoutOptions,
  safetyOptions,
  highlightOptions,
  securityOptions,
  nextSteps,
};
