export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
  // ... puedes agregar otros métodos que estés utilizando (put, delete, etc.)
};
