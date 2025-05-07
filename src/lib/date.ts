/**
 * Format a date string to a localized date format (e.g., "Jan 2024")
 * @param dateString - The date string to format
 * @returns Formatted date string or empty string if date is invalid
 */
export function formatDate(dateString: string | undefined | null): string {
  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return "";
  }
}

/**
 * Format a date range with support for "Present"
 * @param startDate - The start date string
 * @param endDate - The end date string
 * @param isPresent - Whether this is a current position
 * @returns Formatted date range string
 */
export function formatDateRange(
  startDate: string | undefined | null,
  endDate: string | undefined | null,
  isPresent: boolean
): string {
  const start = formatDate(startDate);
  const end = isPresent ? "Present" : formatDate(endDate);

  return `${start} - ${end}`;
} 