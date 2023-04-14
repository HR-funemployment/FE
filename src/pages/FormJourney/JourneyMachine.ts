import { Machine } from 'xstate';

interface FormContext {
  currentIdx: number;
}

type FormEvent = { type: 'NEXT' } | { type: 'PREV' } | { type: 'SAVE' };

const journeyMachine = Machine<FormContext, FormEvent>({
  id: 'journeyMachine',
  initial: 'overview',
  context: {
    currentIdx: 0,
  },
  states: {
    overview: {
      on: {
        NEXT: {
          target: 'step1_about',
          // need to create a draft here
          actions: ['createListingDraft'],
        },
      },
    },
    // Step 1
    step1_about: {
      on: {
        PREV: 'overview',
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
      on: {
        PREV: 'step2_title',
        NEXT: 'step3_finish',
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
  // actions: {
  //   createListingDraft: () => {},
  //   submitListing: () => {},
  // },
});

export default journeyMachine;
