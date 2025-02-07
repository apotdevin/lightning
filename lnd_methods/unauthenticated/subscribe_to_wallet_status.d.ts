import {
  UnauthenticatedLightningSubscription,
  EmptyObject,
} from '../../typescript';

/** The wallet has yet to be created */
export type SubscribeToWalletStatusAbsentEvent = EmptyObject;

/** The wallet is activated and ready for all requests */
export type SubscribeToWalletStatusActiveEvent = EmptyObject;

export type SubscribeToWalletStatusErrorEvent = Error;

/** The wallet is inactive because it is locked */
export type SubscribeToWalletStatusLockedEvent = EmptyObject;

/** The wallet is in the process of starting */
export type SubscribeToWalletStatusStartingEvent = EmptyObject;

/**
 * Subscribe to wallet status events
 *
 * This method is not supported on LND 0.12.1 and below
 */
export const subscribeToWalletStatus: UnauthenticatedLightningSubscription;
