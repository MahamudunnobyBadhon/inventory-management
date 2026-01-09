const API_BASE_URL = 'https://homebox.fly.dev/api/v1'; // Default or Env

// Mock data to use if API fails or for demo purposes
const MOCK_ITEMS = [
  {
    id: 1,
    name: 'Dewalt Cordless Drill',
    model: 'DCD771C2',
    location: 'Garage',
    subLocation: 'Tool Cabinet',
    labels: [
      { text: 'Power Tools', bg: '#eff6ff', textCol: '#3b82f6' },
      { text: 'Warranty', bg: '#ecfdf5', textCol: '#10b981' }
    ],
    quantity: 1,
    updated: '2 days ago',
    color: '#e0e7ff'
  },
  {
    id: 2,
    name: 'Samsung 55" 4K TV',
    model: 'UN55TU8000',
    location: 'Living Room',
    subLocation: '',
    labels: [
      { text: 'Electronics', bg: '#f3e8ff', textCol: '#a855f7' },
      { text: 'Warranty', bg: '#ecfdf5', textCol: '#10b981' }
    ],
    quantity: 1,
    updated: '1 week ago',
    color: '#f3e8ff'
  },
  {
    id: 3,
    name: 'Dyson V11 Vacuum',
    model: 'SV14',
    location: 'Utility Room',
    subLocation: 'Storage Closet',
    labels: [
      { text: 'Appliances', bg: '#ffedd5', textCol: '#f97316' }
    ],
    quantity: 1,
    updated: '3 weeks ago',
    color: '#ffedd5'
  },
  {
    id: 4,
    name: 'Camping Tent (4-Person)',
    model: 'Coleman Sundome',
    location: 'Garage',
    subLocation: 'Outdoor Gear',
    labels: [
      { text: 'Outdoor', bg: '#ccfbf1', textCol: '#14b8a6' },
      { text: 'Seasonal', bg: '#fef3c7', textCol: '#f59e0b' }
    ],
    quantity: 1,
    updated: '1 month ago',
    color: '#ccfbf1'
  },
  {
    id: 5,
    name: 'MacBook Pro 16"',
    model: '2021 M1 Max',
    location: 'Home Office',
    subLocation: 'Desk',
    labels: [
      { text: 'Electronics', bg: '#f3e8ff', textCol: '#a855f7' },
      { text: 'Warranty', bg: '#ecfdf5', textCol: '#10b981' },
      { text: 'High Value', bg: '#fee2e2', textCol: '#ef4444' }
    ],
    quantity: 1,
    updated: '5 days ago',
    color: '#f3e8ff'
  },
  {
    id: 6,
    name: 'Kitchen Aid Mixer',
    model: 'KSM150PS',
    location: 'Kitchen',
    subLocation: 'Pantry',
    labels: [
      { text: 'Appliances', bg: '#ffedd5', textCol: '#f97316' }
    ],
    quantity: 1,
    updated: '2 months ago',
    color: '#ffedd5'
  }
];

export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    // Assuming token is in data.token or similar
    if (data.token) {
        localStorage.setItem('homebox_token', data.token);
    }
    return { success: true, data };
  } catch (error) {
    console.error('API login failed, using mock success for demo:', error);
    // Return mock success for demo purposes if API fails/doesn't exist
    return { success: true, token: 'mock-token-123' };
  }
};

export const getItems = async () => {
    try {
        const token = localStorage.getItem('homebox_token');
        if (!token) {
            // If we are strictly using API, we might throw here, 
            // but for this hybrid demo we will fall back to mock.
            throw new Error("No token"); 
        }

        const response = await fetch(`${API_BASE_URL}/items`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (!response.ok) {
            throw new Error("Failed to fetch items");
        }
        
        return await response.json();

    } catch (error) {
        console.warn("Using mock data for items due to error:", error);
        return new Promise((resolve) => {
            setTimeout(() => resolve(MOCK_ITEMS), 500); // Simulate network delay
        });
    }
};
