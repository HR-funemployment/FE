import { FormJourneyProps } from './types';

import {
  ManageDrafts,
  HostOverview,
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
} from '.';

export default function FormJourney({ state }: FormJourneyProps) {
  // TODO: Need condition -> existing drafts -> ManageDrafts
  // Start xstate journey through ManageDrafts

  return (
    <div>
      {state.value === 'host_overview' && <HostOverview />}
      {state.value === 'step1_about' && <S1BecomeAHost />}
      {state.value === 'step1_structure' && <S2Structure />}
      {state.value === 'step1_privacy' && <S3Privacy />}
      {state.value === 'step1_location' && <S4Location />}
      {state.value === 'step1_floorplan' && <S5FloorPlan />}
      {state.value === 'step2_standout' && <S1StandOut />}
      {state.value === 'step2_amenities' && <S2Amenities />}
      {state.value === 'step2_photos' && <S3Photos />}
      {state.value === 'step2_title' && <S4Title />}
      {state.value === 'step2_description' && <S5Description />}
      {state.value === 'step3_finish' && <S1FinishSetup />}
      {state.value === 'step3_visibility' && <S2Visibility />}
      {state.value === 'step3_price' && <S3Price />}
      {state.value === 'step3_legal' && <S4Legal />}
      {state.value === 'step3_review' && <S5Review />}
      {state.value === 'step3_publish' && <S6Publish />}
    </div>
  );
}
