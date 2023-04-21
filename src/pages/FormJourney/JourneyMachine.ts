import { Machine } from 'xstate';
import { MachineContext, FormEvent } from './types';

// 1. Need to set guard on every step
// 2. Actions on every state to update idx + formData

const journeyMachine = Machine<MachineContext, FormEvent>({
  id: 'journeyMachine',
  initial: 'host_overview',
  context: {
    privacy_type: '',
    form_data: {
      structure_type: '',
      room_type: '',
      property_type: '',
      street_address: '',
      apt: '',
      city: '',
      state_province_territory: '',
      postal_code: '',
      full_address: '',
      neighborhood_overview: '',
      neighbourhood: '',
      neighbourhood_cleansed: '',
      latitude: null,
      longitude: null,
      bedrooms: null,
      beds: null,
      accommodates: null,
      bathrooms: null,
      lock_available: null,
      other_guests: '',
      bathrooms_text: '',
      private_bathrooms: null,
      dedicated_bathrooms: null,
      shared_bathrooms: null,
      amenities: [],
      standout_amenities: [],
      safety_items: [],
      picture_url: '',
      property_photos: [],
      name: '',
      highlights: [],
      description: '',
      allows_any_guests: null,
      price: null,
      offering_discounts: null,
      security_cameras: null,
      weapons: null,
      dangerous_animals: null,
    },
  },
  states: {
    host_overview: {
      on: {
        NEXT: {
          target: 'step1_about',
          // need to create a draft here
          // actions: ['createListingDraft'],
        },
      },
    },
    // Step 1
    step1_about: {
      on: {
        PREV: 'host_overview',
        NEXT: 'step1_structure',
      },
    },
    step1_structure: {
      on: {
        PREV: 'step1_about',
        NEXT: 'step1_privacy',
      },
    },
    step1_privacy: {
      on: {
        PREV: 'step1_structure',
        NEXT: 'step1_location',
      },
    },
    step1_location: {
      on: {
        PREV: 'step1_privacy',
        NEXT: 'step1_floorplan',
      },
    },
    step1_floorplan: {
      on: {
        PREV: 'step1_location',
        NEXT: 'step2_standout',
      },
    },
    // only for private rooms
    step1_bathrooms: {
      on: {
        PREV: 'step1_floorplan',
        NEXT: 'step1_occupancy',
      },
    },
    step1_occupancy: {
      on: {
        PREV: 'step1_bathrooms',
        NEXT: 'step2_standout',
      },
    },

    // Step 2
    step2_standout: {
      on: {
        PREV: 'step1_floorplan',
        NEXT: 'step2_amenities',
      },
    },
    step2_amenities: {
      on: {
        PREV: 'step2_standout',
        NEXT: 'step2_photos',
      },
    },
    step2_photos: {
      on: {
        PREV: 'step2_amenities',
        NEXT: 'step2_title',
      },
    },
    step2_title: {
      on: {
        PREV: 'step2_photos',
        NEXT: 'step2_description',
      },
    },
    step2_description: {
      initial: 'highlights',
      // There are two parts to description
      states: {
        highlights: {
          on: {
            PREV: '#journeyMachine.step2_title',
            NEXT: 'description',
          },
        },
        description: {
          on: {
            PREV: 'highlights',
            NEXT: '#journeyMachine.step3_finish',
          },
        },
      },
    },
    // Step 3
    step3_finish: {
      on: {
        PREV: 'step2_description',
        NEXT: 'step3_visibility',
      },
    },
    step3_visibility: {
      on: {
        PREV: 'step3_finish',
        NEXT: 'step3_price',
      },
    },
    step3_price: {
      on: {
        PREV: 'step3_visibility',
        NEXT: 'step3_legal',
      },
    },
    step3_legal: {
      on: {
        PREV: 'step3_price',
        NEXT: 'step3_review',
      },
    },
    step3_review: {
      on: {
        PREV: 'step3_legal',
        NEXT: 'step3_publish',
      },
    },
    step3_publish: {
      on: {
        PREV: 'step3_review',
        NEXT: {
          target: 'submission',
          actions: 'submitListing',
        },
      },
    },
    submission: {
      type: 'final',
    },
  },
});

export default journeyMachine;
