import {create} from 'zustand'
import { authStore } from '../store/authStore'

export const useAuth = create(authStore);