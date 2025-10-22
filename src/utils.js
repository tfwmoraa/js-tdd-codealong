// src/utils.js

// This function calculates the current age based on the year of birth.
export function currentAgeForBirthYear(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
