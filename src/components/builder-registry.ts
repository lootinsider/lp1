import type { RegisteredComponent } from '@builder.io/sdk-qwik';
import Celebrate from './celebrate/celebrate';

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Celebrate,
    name: 'Celebrate',
  },
];
