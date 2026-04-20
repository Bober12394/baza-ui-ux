export const navigationTree = {
  'Global Layout': ['Page Layout', 'Container', 'Grid System', 'Spacing System', 'Responsive Breakpoints'],
  Navigation: ['Navbar', 'Sidebar', 'Mega Menu', 'Dropdown Navigation', 'Breadcrumb', 'Tabs Navigation', 'Pagination', 'Stepper Navigation'],
  'Header / Hero': ['Page Header', 'Hero Section', 'Hero Banner', 'Page Title', 'Subtitle', 'Call To Action Header'],
  'Content Structure': ['Section', 'Content Block', 'Container Block', 'Divider', 'Spacer', 'Columns', 'Grid Layout'],
  'Cards & Surfaces': ['Card', 'Card Group', 'Statistic Card', 'Feature Card', 'Profile Card', 'Pricing Card', 'Dashboard Widget'],
  'Data Display': ['Table', 'Data Grid', 'List', 'List Item', 'Timeline', 'Activity Feed', 'Stats Panel'],
  'Charts & Visualization': ['Line Chart', 'Bar Chart', 'Pie Chart', 'Donut Chart', 'Area Chart', 'Heatmap', 'Gauge Chart', 'Sparkline'],
  'Forms & Inputs': ['Form', 'Input Field', 'Textarea', 'Select Dropdown', 'Multi Select', 'Checkbox', 'Radio Button', 'Toggle Switch', 'Date Picker', 'File Upload', 'Autocomplete Input', 'Form Group'],
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


export const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\//g, ' ')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

export const getThirdLevelItems = (subsection) => [
  `${subsection} Overview`,
  subsection === 'Primary Button' ? 'Ex1' : `${subsection} Examples`,
  `${subsection} API`,
];

export const buildSubsectionPath = (category, subsection) => `/${slugify(category)}/${slugify(subsection)}`;

export const buildThirdLevelPath = (category, subsection, thirdLevel) =>
  `/${slugify(category)}/${slugify(subsection)}/${slugify(thirdLevel)}`;

export const findRouteMatch = (pathname) => {
  if (pathname === '/') {
    return { isHome: true };
  }

  const [categorySlug, subsectionSlug, thirdSlug, ...rest] = pathname.split('/').filter(Boolean);
  if (rest.length || !categorySlug || !subsectionSlug) {
    return null;
  }

  for (const [category, subsections] of Object.entries(navigationTree)) {
    if (slugify(category) !== categorySlug) {
      continue;
    }

    const foundSubsection = subsections.find((item) => slugify(item) === subsectionSlug);
    if (!foundSubsection) {
      return null;
    }

    if (!thirdSlug) {
      return { category, subsection: foundSubsection, thirdLevel: '' };
    }

    const possibleThirdLevels = getThirdLevelItems(foundSubsection).map((item) => ({ value: item, slug: slugify(item) }));
    const foundThirdLevel = possibleThirdLevels.find((item) => item.slug === thirdSlug);

    if (!foundThirdLevel) {
      return null;
    }

    return { category, subsection: foundSubsection, thirdLevel: foundThirdLevel.value };
  }

  return null;
};
