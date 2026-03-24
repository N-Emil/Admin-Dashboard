import { AuthContext } from '../context/AuthContext'
import { BaseContext } from './BaseContext'

export default BaseContext(AuthContext, 'useAuth', 'AuthProvider')