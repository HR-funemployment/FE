import {
  ManageDrafts,
  FormJourney,
  S1BecomeAHost,
  S2Structure,
  S3Privacy,
  S4Location,
  S5FloorPlan,
  S1StandOut,
  S2Amenities,
  S3Photos,
  S4Title,
  S5Description,
  S1FinishSetup,
  S2Visibility,
  S3Price,
  S4Legal,
  S5Review,
  S6Publish,
} from '../pages/FormJourney';
import { RouteType } from './AppRouter';

const formRoutes: RouteType[] = [
  // Journey start
  // Shows current drafts and also acts as the state holder
  {
    path: '/become-a-host',
    type: 'create-listing',
    title: 'become_host',
    component: ManageDrafts,
  },

  // Intro
  // Creates a new draft upon starting the journey
  {
    path: '/become-a-host/overview',
    type: 'create-listing',
    title: 'host_overview',
    component: FormJourney,
  },

  // Step 1
  {
    path: '/become-a-host/:draftId/about-your-place',
    type: 'create-listing',
    title: 'step1_about',
    component: S1BecomeAHost,
  },
  {
    path: '/become-a-host/:draftId/structure',
    type: 'create-listing',
    title: 'step1_structure',
    component: S2Structure,
  },
  {
    path: '/become-a-host/:draftId/privacy-type',
    type: 'create-listing',
    title: 'step1_privacy',
    component: S3Privacy,
  },
  {
    path: '/become-a-host/:draftId/location',
    type: 'create-listing',
    title: 'step1_location',
    component: S4Location,
  },
  {
    path: '/become-a-host/:draftId/floor-plan',
    type: 'create-listing',
    title: 'step1_floorplan',
    component: S5FloorPlan,
  },

  // Step 2

  {
    path: '/become-a-host/:draftId/stand-out',
    type: 'create-listing',
    title: 'step2_standout',
    component: S1StandOut,
  },
  {
    path: '/become-a-host/:draftId/amenities',
    type: 'create-listing',
    title: 'step2_amenities',
    component: S2Amenities,
  },
  {
    path: '/become-a-host/:draftId/photos',
    type: 'create-listing',
    title: 'step2_photos',
    component: S3Photos,
  },
  {
    path: '/become-a-host/:draftId/title',
    type: 'create-listing',
    title: 'step2_title',
    component: S4Title,
  },
  {
    path: '/become-a-host/:draftId/description',
    type: 'create-listing',
    title: 'step2_description',
    component: S5Description,
  },
  // Step 3

  {
    path: '/become-a-host/:draftId/finish-setup',
    type: 'create-listing',
    title: 'step3_finish',
    component: S1FinishSetup,
  },
  {
    path: '/become-a-host/:draftId/visibility',
    type: 'create-listing',
    title: 'step3_visibility',
    component: S2Visibility,
  },
  {
    path: '/become-a-host/:draftId/price',
    type: 'create-listing',
    title: 'step3_price',
    component: S3Price,
  },
  {
    path: '/become-a-host/:draftId/legal',
    type: 'create-listing',
    title: 'step3_legal',
    component: S4Legal,
  },
  {
    path: '/become-a-host/:draftId/receipt',
    type: 'create-listing',
    title: 'step3_review',
    component: S5Review,
  },

  // Final
  {
    path: '/become-a-host/:draftId/publish-celebration',
    type: 'create-listing',
    title: 'step3_publish',
    component: S6Publish,
  },
];

export default formRoutes;
