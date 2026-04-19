import './App.css';

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
      <nav className="navbar">
        <div className="navbar__inner">
          <ul className="navbar__links">
            <li>HOME</li>
            <li>ALL PRODUCTS</li>
            <li>WORDPRESS</li>
            <li>FEATURES</li>
            <li className="is-active">PAGES</li>
          </ul>
          <form className="navbar__search" onSubmit={(event) => event.preventDefault()}>
            <input aria-label="Search product" placeholder="Search product here..." type="search" />
            <button aria-label="Search" type="submit">
              <span>⌕</span>
            </button>
          </form>
        </div>
      </nav>

      <main className="content-wrap">
        <section className="mega-menu" aria-label="Pages dropdown preview">
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
      </main>
    </div>
  );
}

export default App;
