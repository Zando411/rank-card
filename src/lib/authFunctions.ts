import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
};

type ErrorMessages = {
  [key: string]: string;
};

export function getUserAuthErrorMessage(errorMessage: string): string {
  // Extract the error code from the message (e.g., "auth/invalid-email").
  const errorCodeMatch = errorMessage.match(/\(([^)]+)\)/);
  const errorCode = errorCodeMatch ? errorCodeMatch[1] : "";

  const errorMessages: ErrorMessages = {
    "auth/claims-too-large":
      "The provided data is too large. Please try again with fewer details.",
    "auth/email-already-exists":
      "This email is already registered. Please use a different email or try logging in.",
    "auth/id-token-expired": "Your session has expired. Please log in again.",
    "auth/id-token-revoked": "Your session was revoked. Please log in again.",
    "auth/insufficient-permission":
      "You don't have permission to perform this action. Please contact support.",
    "auth/internal-error":
      "An unexpected error occurred. Please try again later.",
    "auth/invalid-argument":
      "An invalid input was provided. Please check your data.",
    "auth/invalid-email":
      "The email address is invalid. Please enter a valid email.",
    "auth/invalid-password":
      "The password must be at least six characters long.",
    "auth/weak-password": "The password should be at least 6 characters long.",
    "auth/missing-password": "Please enter a password to continue.",
    "auth/phone-number-already-exists":
      "This phone number is already registered. Use a different number or log in.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/user-not-found":
      "No user found with the provided details. Please check and try again.",
    "auth/operation-not-allowed":
      "This operation is not allowed. Please contact support.",
    "auth/unauthorized-continue-uri":
      "The URL is not authorized. Please contact support.",
    "auth/session-cookie-expired":
      "Your session has expired. Please log in again.",
    "auth/session-cookie-revoked":
      "Your session was revoked. Please log in again.",
    "auth/invalid-uid": "The user ID is invalid. Please contact support.",
    "auth/uid-already-exists":
      "This user ID is already in use. Please use a different ID.",
    "auth/invalid-provider-id":
      "The selected provider is not valid. Please contact support.",
    "auth/project-not-found":
      "The project could not be found. Please try again or contact support.",
  };

  // Return the user-friendly message or a generic fallback.
  return (
    errorMessages[errorCode] ||
    "An unexpected error occurred. Please try again."
  );
}
