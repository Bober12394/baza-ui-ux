import { useState } from 'react';
import './Navbar.css';

const levelZeroCategories = [
  'Global Layout',
  'Navigation',
  'Header / Hero',
  'Content Structure',
  'Cards & Surfaces',
  'Data Display',
  'Charts & Visualization',
  'Forms & Inputs',
  'Actions & Buttons',
  'Feedback & Status',
  'Modals & Overlays',
  'User / Account',
  'Filters & Controls',
  'Footer',
  'Media',
  'Dashboard Components',
  'E-commerce Components',
  'System States',
  'Personalization',
  'Accessibility',
  'Integrations',
];

const dropdownItems = {
  'Global Layout': ['Container', 'Grid', 'Sections', 'Spacing'],
  Navigation: ['Top Navbar', 'Sidebar', 'Tabs', 'Breadcrumbs'],
  'Header / Hero': ['Hero Banner', 'Page Header', 'Intro CTA', 'Cover Media'],
  'Content Structure': ['Split Layout', 'Content Blocks', 'Article', 'Timeline'],
  'Cards & Surfaces': ['Card Grid', 'Feature Card', 'Panels', 'Tiles'],
  'Data Display': ['Table', 'List', 'Stats', 'Badges'],
  'Charts & Visualization': ['Line Chart', 'Bar Chart', 'Donut', 'Heatmap'],
  'Forms & Inputs': ['Text Input', 'Select', 'Checkbox', 'Date Picker'],
  'Actions & Buttons': ['Primary Button', 'Icon Button', 'Button Group', 'Floating Action'],
  'Feedback & Status': ['Toast', 'Progress', 'Alert', 'Empty State'],
  'Modals & Overlays': ['Modal', 'Drawer', 'Popover', 'Tooltip'],
  'User / Account': ['Profile', 'User Menu', 'Security', 'Preferences'],
  'Filters & Controls': ['Search Filters', 'Sort', 'Range', 'Segmented Control'],
  Footer: ['Simple Footer', 'Extended Footer', 'Legal Links', 'Social Links'],
  Media: ['Image Gallery', 'Video Block', 'Avatar', 'Carousel'],
  'Dashboard Components': ['KPI Blocks', 'Widget Area', 'Activity Feed', 'Shortcuts'],
  'E-commerce Components': ['Product Card', 'Cart Summary', 'Checkout Steps', 'Price Tag'],
  'System States': ['Loading', 'Skeleton', 'Error State', 'Offline State'],
  Personalization: ['Theme Switcher', 'Saved Views', 'Bookmarks', 'Recommendations'],
  Accessibility: ['Focus States', 'Keyboard Nav', 'Contrast', 'Screen Reader Labels'],
  Integrations: ['API Widgets', 'Webhooks', 'Embeds', 'External Data'],
};

function Navbar() {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <div className="nav-wrapper" onMouseLeave={() => setActiveCategory('')}>
      <nav className="navbar">
        <div className="navbar__inner">
          <ul className="navbar__links">
            {levelZeroCategories.map((category) => (
              <li
                className={activeCategory === category ? 'is-active' : ''}
                key={category}
                onMouseEnter={() => setActiveCategory(category)}
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
            <ul>
              {dropdownItems[activeCategory].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </main>
      )}
    </div>
  );
}

export default Navbar;
