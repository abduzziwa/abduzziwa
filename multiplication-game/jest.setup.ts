// Add extended assertions from @testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock IntersectionObserver if you use it
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});

// Assign the mock to the window object
window.IntersectionObserver = mockIntersectionObserver;
