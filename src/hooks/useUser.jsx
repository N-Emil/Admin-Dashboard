import { UserContext } from "../context/UserContext"
import { BaseContext } from "./BaseContext"

export default BaseContext(UserContext, 'useUser', 'UserProvider')