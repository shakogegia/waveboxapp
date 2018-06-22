import CoreACService from '../CoreACService'

class GoogleAnalyticsService extends CoreACService {
  /* **************************************************************************/
  // Class : Types
  /* **************************************************************************/

  static get type () { return CoreACService.SERVICE_TYPES.GOOGLE_ANALYTICS }

  /* **************************************************************************/
  // Properties: Support
  /* **************************************************************************/

  get supportsUnreadActivity () { return false }
  get supportsUnreadCount () { return false }
  get supportsTrayMessages () { return false }
  get supportsSyncedDiffNotifications () { return false }
  get supportsNativeNotifications () { return false }
  get supportsGuestNotifications () { return false }
  get supportsSyncWhenSleeping () { return false }
  get supportsWBGAPI () { return false }

  /* **************************************************************************/
  // Properties: Humanized
  /* **************************************************************************/

  get humanizedType () { return 'Google Analytics' }
  get humanizedTypeShort () { return 'Analytics' }
  get humanizedLogos () {
    return [
      'google/logo_analytics_32px.png',
      'google/logo_analytics_48px.png',
      'google/logo_analytics_64px.png',
      'google/logo_analytics_96px.png',
      'google/logo_analytics_128px.png'
    ]
  }

  /* **************************************************************************/
  // Properties: Behaviour
  /* **************************************************************************/

  get url () { return 'https://analytics.google.com' }
}

export default GoogleAnalyticsService