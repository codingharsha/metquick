export const api = async (endpoint, options = {}) => {
  // TODO: Implement backend integration when API contract is finalized
  console.log(`API Call to: ${endpoint}`, options);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, token: 'mock-token', role: 'CUSTOMER' });
    }, 500);
  });
};
