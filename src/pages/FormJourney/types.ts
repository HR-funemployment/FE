import { State } from 'xstate';

export interface FormContext {
  currentIdx: number;
}

export type FormEvent = { type: 'NEXT' } | { type: 'PREV' } | { type: 'SAVE' };

export interface FormStateSchema {
  states: {
    host_overview: object;
    step1_about: object;
    step1_structure: object;
    step1_privacy: object;
    step1_location: object;
    step1_floorplan: object;
    step2_standout: object;
    step2_amenities: object;
    step2_photos: object;
    step2_title: object;
    step2_description: object;
    step3_finish: object;
    step3_visibility: object;
    step3_price: object;
    step3_legal: object;
    step3_review: object;
    step3_publish: object;
  };
}

export interface FormJourneyProps {
  state: State<FormContext, FormEvent, FormStateSchema>;
}
