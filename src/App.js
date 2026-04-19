import './App.css';
import Navbar from './components/Navbar';

const martPlacePagesColumn = [
  [
    'Home Page One',
    'Home Page Two',
    'Home Page Three',
    'Products Grid',
    'Products List',
    'Category Grid Sidebar',
    'Category List Sidebar',
    'Search Product',
    'Single Product V-1',
    'Single Product V-2',
    'Single Product V-3',
  ],
  [
    'Single Items Comments',
    'Single Items Reviews',
    'Single Items Support',
    'Single Items FAQs',
    'Favorites Items',
    'Author Profile',
    'Author Items',
    'Customer Reviews',
    'Followers',
    'Following',
    'Product View Variations',
  ],
];

const dashboardPages = [
  'Dashboard',
  'Account Settings',
  'Author Purchases',
  'Items Rating',
  'Add Credits',
  'Statements',
  'Invoice',
  'Upload Item',
  'Edit Items',
  'Withdrawals',
  'Add Payment Method',
];

const othersPages = [
  [
    'Notifications',
    'Message Inbox',
    'Message Compose',
    'Shopping Cart',
    'Checkout',
    'Login',
    'Register',
    'Recovery Password',
    'Support Forum',
    'Forum Details',
    'How It Works',
  ],
  [
    'About Us',
    'Pricing Plan',
    'Testimonials',
    'FAQs',
    'FAQs Details',
    'Affiliates',
    'Terms & Conditions',
    'Blog V-1',
    'Blog V-2',
    'Blog Details',
    'Contact Us',
    'Menu & Footer Variation',
  ],
];

function App() {
  return (
    <div className="page-shell">
      <Navbar />
    </div>
  );
}

export default App;
