import { useMemo, useState } from 'react';
import './Navbar.css';

const navigationTree = {
  'Global Layout': ['Page Layout', 'Container', 'Grid System', 'Spacing System', 'Responsive Breakpoints'],
  Navigation: [
    'Navbar',
    'Sidebar',
    'Mega Menu',
    'Dropdown Navigation',
    'Breadcrumb',
    'Tabs Navigation',
    'Pagination',
    'Stepper Navigation',
  ],
  'Header / Hero': ['Page Header', 'Hero Section', 'Hero Banner', 'Page Title', 'Subtitle', 'Call To Action Header'],
  'Content Structure': ['Section', 'Content Block', 'Container Block', 'Divider', 'Spacer', 'Columns', 'Grid Layout'],
  'Cards & Surfaces': ['Card', 'Card Group', 'Statistic Card', 'Feature Card', 'Profile Card', 'Pricing Card', 'Dashboard Widget'],
  'Data Display': ['Table', 'Data Grid', 'List', 'List Item', 'Timeline', 'Activity Feed', 'Stats Panel'],
  'Charts & Visualization': ['Line Chart', 'Bar Chart', 'Pie Chart', 'Donut Chart', 'Area Chart', 'Heatmap', 'Gauge Chart', 'Sparkline'],
  'Forms & Inputs': [
    'Form',
    'Input Field',
    'Textarea',
    'Select Dropdown',
    'Multi Select',
    'Checkbox',
    'Radio Button',
    'Toggle Switch',
    'Date Picker',
    'File Upload',
    'Autocomplete Input',
    'Form Group',
  ],
  'Actions & Buttons': ['Primary Button', 'Secondary Button', 'Icon Button', 'Floating Action Button', 'Button Group', 'Link Button'],
  'Feedback & Status': ['Alert', 'Notification', 'Toast', 'Snackbar', 'Badge', 'Tag', 'Progress Bar', 'Loader', 'Skeleton Loader'],
  'Modals & Overlays': ['Modal', 'Dialog', 'Drawer', 'Slide Over', 'Popover', 'Tooltip', 'Context Menu'],
  'User / Account': ['Avatar', 'User Profile', 'User Menu', 'Account Switcher', 'Settings Panel'],
  'Filters & Controls': ['Filter Bar', 'Filter Sidebar', 'Search Bar', 'Sort Control', 'View Switcher', 'Date Range Filter'],
  Footer: ['Footer', 'Footer Links', 'Footer Navigation', 'Footer Info', 'Legal Links'],
  Media: ['Image', 'Video', 'Gallery', 'Carousel', 'Slider'],
  'Dashboard Specific': ['KPI Widget', 'Metrics Panel', 'Dashboard Grid', 'Analytics Panel', 'Report Section'],
  'E-commerce (Optional)': ['Product Card', 'Product Grid', 'Cart', 'Checkout', 'Pricing Table'],
  'System / States': ['Empty State', 'Error State', 'Loading State', 'Success State', 'Offline State'],
  Personalization: ['Theme Switcher', 'Layout Switcher', 'Density Control', 'Preferences Panel'],
  Accessibility: ['Skip Link', 'Focus Indicator', 'ARIA Labels', 'Keyboard Navigation'],
  'Integrations / External': ['Embed Widget', 'External Link', 'API Status', 'Integrations Panel'],
};

const levelZeroCategories = Object.keys(navigationTree);

function Navbar() {
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSubsection, setActiveSubsection] = useState('');

  const subsections = useMemo(() => navigationTree[activeCategory] ?? [], [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubsection(navigationTree[category][0] ?? '');
  };

  return (
    <div className="nav-wrapper">
      <nav className="navbar">
        <div className="navbar__inner">
          <ul className="navbar__links">
            {levelZeroCategories.map((category) => (
              <li
                className={activeCategory === category ? 'is-active' : ''}
                key={category}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {activeCategory && (
        <main className="content-wrap">
          <section aria-label={`${activeCategory} dropdown`} className="dropdown-card">
            <h2>{activeCategory}</h2>

            <ul className="subsection-list">
              {subsections.map((item) => (
                <li
                  className={activeSubsection === item ? 'is-active' : ''}
                  key={item}
                  onClick={() => setActiveSubsection(item)}
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="subsection-detail">
              <p className="subsection-detail__label">Poziom 2 (aktywna podsekcja)</p>
              <p className="subsection-detail__value">{activeSubsection}</p>
              <p className="subsection-detail__hint">Miejsce na poziom 3 hierarchii w kolejnym kroku.</p>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default Navbar;
