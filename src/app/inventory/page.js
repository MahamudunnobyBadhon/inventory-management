import Topbar from '../../components/Header/Topbar';
import FilterBar from '../../components/Header/FilterBar';
import Table from '../../components/InventoryTable/Table';

export default function InventoryPage() {
  const items = [
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Topbar />
      <FilterBar />
      <div style={{ padding: '0', flex: 1, overflowY: 'auto' }}>
        <Table items={items} />
      </div>
    </div>
  );
}
