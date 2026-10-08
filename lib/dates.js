// ISO dates are displayed in UTC so visitors never see the previous day.
export function formatDate(value) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(value + 'T00:00:00Z'));
}
