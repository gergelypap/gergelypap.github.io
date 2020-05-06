import { parseISO } from 'date-fns'
import utilStyles from '../styles/utils.module.css'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatted = new Intl.DateTimeFormat('en-US', options).format(date);
  return <time className={utilStyles.lightText} dateTime={dateString}>{formatted}</time>
}
