import { PiniaCustomProperties } from 'pinia';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    // Define your store properties here
    myStore: ReturnType<typeof dataStore>;
  }
}
