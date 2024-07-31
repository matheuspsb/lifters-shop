export const formatCardNumber = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "");
  let formattedValue = "";
  for (let i = 0; i < cleanedValue.length; i += 4) {
    formattedValue += cleanedValue.substring(i, i + 4) + " ";
  }
  return formattedValue.trim();
};

export const validateCardNumber = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "");
  if (cleanedValue.length < 15 || cleanedValue.length > 16) {
    return "Card number must be 15 or 16 digits";
  }
};

export const validateCardholderName = (value: string) => {
  if (value.trim().length < 3) {
    return "Cardholder name must be at least 3 characters";
  }
  const nameParts = value.trim().split(" ");
  if (nameParts.length < 2) {
    return "Cardholder name must include first and last name";
  }
};

export const validateCVV = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "");
  if (cleanedValue.length < 3 || cleanedValue.length > 4) {
    return "CVV number must be 3 or 4 digits"
  }
  return undefined;
}

export const formatCVV = (value: string) => {
  return value.replace(/\D/g, "");
};