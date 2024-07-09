import * as LocalAuthentication from 'expo-local-authentication'

class AuthenticationService {
  isDeviceSupported = async () => {
    return (
      (await LocalAuthentication.hasHardwareAsync()) &&
      (await LocalAuthentication.isEnrolledAsync())
    )
  }

  authenticate = async () => {
    if (!(await this.isDeviceSupported())) {
      return false
    }

    const authenticationResult = await LocalAuthentication.authenticateAsync()
    return authenticationResult.success
  }
}

export const authenticationService = new AuthenticationService()
