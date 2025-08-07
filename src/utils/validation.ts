// Form validation utilities

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export const validateField = (value: string, rules: ValidationRule): ValidationResult => {
  const errors: string[] = [];

  if (rules.required && (!value || value.trim().length === 0)) {
    errors.push('Ce champ est requis');
  }

  if (value && rules.minLength && value.length < rules.minLength) {
    errors.push(`Minimum ${rules.minLength} caractères requis`);
  }

  if (value && rules.maxLength && value.length > rules.maxLength) {
    errors.push(`Maximum ${rules.maxLength} caractères autorisés`);
  }

  if (value && rules.pattern && !rules.pattern.test(value)) {
    errors.push('Format invalide');
  }

  if (value && rules.custom && !rules.custom(value)) {
    errors.push('Valeur invalide');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateEmail = (email: string): ValidationResult => {
  return validateField(email, {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  });
};

export const validatePhone = (phone: string): ValidationResult => {
  return validateField(phone, {
    pattern: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
  });
};

export const validateName = (name: string): ValidationResult => {
  return validateField(name, {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-ZÀ-ÿ\s'-]+$/
  });
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
};