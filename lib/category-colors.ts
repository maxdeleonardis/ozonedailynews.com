// Category to color mapping based on Five Elements & Sector Rotation
// RED (Fire) = Growth & Energy: Business, Technology
// BLUE (Water) = Information & Flow: News
// GREEN (Wood) = Innovation & Growth: Education
// BROWN (Earth) = Foundation & Investigation: Crime
// GOLD (Metal) = Entertainment & Exterior Value: Investigation

export const categoryColorMap: Record<string, { bg: string; text: string }> = {
  'Technology': {
    bg: 'bg-red-600',
    text: 'text-white'
  },
  'Business': {
    bg: 'bg-red-600',
    text: 'text-white'
  },
  'Education': {
    bg: 'bg-green-600',
    text: 'text-white'
  },
  'News': {
    bg: 'bg-blue-600',
    text: 'text-white'
  },
  'Crime': {
    bg: 'bg-amber-800',
    text: 'text-white'
  },
  'Investigation': {
    bg: 'bg-amber-600',
    text: 'text-white'
  },
  'Politics': {
    bg: 'bg-red-600',
    text: 'text-white'
  }
};

export function getCategoryColor(category: string) {
  return categoryColorMap[category] || { bg: 'bg-gray-600', text: 'text-white' };
}
