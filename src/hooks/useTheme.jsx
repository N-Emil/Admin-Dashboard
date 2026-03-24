import { ThemeContext } from '../context/ThemeContext'
import { BaseContext } from './BaseContext'

export default BaseContext(ThemeContext, 'useTheme', 'ThemeProvider')