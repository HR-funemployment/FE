import {
  HostingInfo,
  HostOverview,
  ManageListings,
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
import { RouteType } from './routes';

const formRoutes: RouteType[] = [
  // Admin pages
  {
    path: '/hosting',
    type: 'hosting',
    title: 'host-admin',
    component: HostingInfo,
  },

  // Joruney start
  // Shows current drafts
  {
    path: '/become-a-host',
    type: 'hosting',
    title: 'become-host',
    component: ManageListings,
  },

  // Intro
  // Creates a new draft upon starting the journey
  {
    path: '/become-a-host/overview',
    type: 'hosting',
    title: 'host-overview',
    component: HostOverview,
  },

  // Step 1
  {
    path: '/become-a-host/:draftId/about-your-place',
    type: 'hosting',
    title: 'step1-about',
    component: S1BecomeAHost,
  },
  {
    path: '/become-a-host/:draftId/structure',
    type: 'hosting',
    title: 'step1-structure',
    component: S2Structure,
  },
  {
    path: '/become-a-host/:draftId/privacy-type',
    type: 'hosting',
    title: 'step1-privacy',
    component: S3Privacy,
  },
  {
    path: '/become-a-host/:draftId/location',
    type: 'hosting',
    title: 'step1-location',
    component: S4Location,
  },
  {
    path: '/become-a-host/:draftId/floor-plan',
    type: 'hosting',
    title: 'step1-floorplan',
    component: S5FloorPlan,
  },

  // Step 2

  {
    path: '/become-a-host/:draftId/stand-out',
    type: 'hosting',
    title: 'step2-standout',
    component: S1StandOut,
  },
  {
    path: '/become-a-host/:draftId/amenities',
    type: 'hosting',
    title: 'step2-amenities',
    component: S2Amenities,
  },
  {
    path: '/become-a-host/:draftId/photos',
    type: 'hosting',
    title: 'step2-privacy',
    component: S3Photos,
  },
  {
    path: '/become-a-host/:draftId/title',
    type: 'hosting',
    title: 'step2-title',
    component: S4Title,
  },
  {
    path: '/become-a-host/:draftId/description',
    type: 'hosting',
    title: 'step2-description',
    component: S5Description,
  },
  // Step 3

  {
    path: '/become-a-host/:draftId/finish-setup',
    type: 'hosting',
    title: 'step3-finish',
    component: S1FinishSetup,
  },
  {
    path: '/become-a-host/:draftId/visibility',
    type: 'hosting',
    title: 'step3-visibility',
    component: S2Visibility,
  },
  {
    path: '/become-a-host/:draftId/price',
    type: 'hosting',
    title: 'step3-price',
    component: S3Price,
  },
  {
    path: '/become-a-host/:draftId/legal',
    type: 'hosting',
    title: 'step3-legal',
    component: S4Legal,
  },
  {
    path: '/become-a-host/:draftId/receipt',
    type: 'hosting',
    title: 'step3-review',
    component: S5Review,
  },

  // Final
  {
    path: '/become-a-host/:draftId/publish-celebration',
    type: 'hosting',
    title: 'step3-publish',
    component: S6Publish,
  },
];

export default formRoutes;
