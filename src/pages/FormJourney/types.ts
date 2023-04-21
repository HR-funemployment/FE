import { State } from 'xstate';

interface FormContext {
  structure_type?: string;
  room_type?: string;
  property_type?: string;
  street_address?: string;
  apt?: string;
  city?: string;
  state_province_territory?: string;
  postal_code?: string;
  full_address?: string;
  neighborhood_overview?: string;
  neighbourhood?: string;
  neighbourhood_cleansed?: string;
  latitude: number | null;
  longitude: number | null;
  bedrooms?: number | null;
  beds?: number | null;
  accommodates?: number | null;
  bathrooms?: number | null;
  lock_available?: boolean | null;
  other_guests?: string;
  bathrooms_text?: string;
  private_bathrooms?: number | null;
  dedicated_bathrooms?: number | null;
  shared_bathrooms?: number | null;
  amenities?: string[];
  standout_amenities?: string[];
  safety_items?: string[];
  picture_url?: string;
  property_photos?: string[];
  name: string;
  highlights?: string[];
  description: string;
  allows_any_guests?: boolean | null;
  price?: number | null;
  offering_discounts?: boolean | null;
  security_cameras?: boolean | null;
  weapons?: boolean | null;
  dangerous_animals?: boolean | null;
}

export interface MachineContext {
  privacy_type: string;
  form_data: FormContext;
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
  state: State<MachineContext, FormEvent, FormStateSchema>;
}
