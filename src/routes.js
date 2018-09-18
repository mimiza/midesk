import Index from './components/Index.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import PasswordRecovery from './components/PasswordRecovery.vue'

export default [
    {
        path: '/',
        component: Index,
    },
    {
        path: '/sign-up',
        component: SignUp,
    },
    {
        path: '/sign-in',
        component: SignIn
    },
    {
        path: '/password-recovery',
        component: PasswordRecovery
    }
]