import { useState } from 'react';
import './Navbar.css';

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

const dropdownByLink = {
  HOME: ['Main Homepage', 'Home v2', 'Landing Page', 'How it works'],
  'ALL PRODUCTS': ['Products Grid', 'Products List', 'Product Details', 'Top Sellers'],
  WORDPRESS: ['Themes', 'Plugins', 'Support', 'Documentation'],
  FEATURES: ['Author Profile', 'Dashboard', 'Messaging', 'Shopping Cart'],
};

const navLinks = ['HOME', 'ALL PRODUCTS', 'WORDPRESS', 'FEATURES', 'PAGES'];

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  return (
    <div className="nav-wrapper" onMouseLeave={() => setActiveLink('')}>
      <nav className="navbar">
        <div className="navbar__inner">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li
                className={activeLink === link ? 'is-active' : ''}
                key={link}
                onMouseEnter={() => setActiveLink(link)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="content-wrap">
        {activeLink && activeLink !== 'PAGES' && (
          <section aria-label={`${activeLink} dropdown`} className="dropdown-card dropdown-card--simple">
            <ul>
              {dropdownByLink[activeLink].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {activeLink === 'PAGES' && (
          <section className="dropdown-card mega-menu" aria-label="Pages dropdown preview">
            <div className="mega-menu__group mega-menu__group--wide">
              <h2>MartPlace Pages</h2>
              <div className="mega-menu__list-grid">
                {martPlacePagesColumn.map((column) => (
                  <ul key={column[0]}>
                    {column.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div className="mega-menu__group">
              <h2>Dashboard</h2>
              <ul>
                {dashboardPages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mega-menu__group mega-menu__group--wide">
              <h2>Others Pages</h2>
              <div className="mega-menu__list-grid">
                {othersPages.map((column) => (
                  <ul key={column[0]}>
                    {column.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Navbar;
