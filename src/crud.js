// Initialize Feathers app
const fapp = require('./services/feathers')

const messageService = fapp.service('patients')

export default {
    namespace: 'auth',
    state: {
        usersList: [],
        authenticated: false,
        currentUser: 'anonymous guest',
        messagesList: [],
        currentMessage: ''
    },
    subscriptions: {
        appSubscriber({dispatch, history}) {
            fapp.authenticate({
                type: 'local',
                'email': 'admin@admin.com',
                'password': 'admin'
            })
                .then((res) => {
                    dispatch({ type: 'authenticate', payload: true })
                    dispatch({ type: 'setUser', payload: fapp.get('user') })

                    messageService.find().then(data => {
                        dispatch({ type: 'concatMessages', payload: data })
                    })

                    messageService.on('created', message => {
                        dispatch({ type: 'concatMessages', payload: [message] })
                    })
                })

                // On errors we just redirect back to the login page
                .catch(error => {
                    if (error.code === 401) window.location.href = '/login.html'
                })
        }
    },
    effects: {
        *logOut({ payload }, { put, call, select }) {
            fapp.logout()
                .then(() => {
                    // yield put({ type: 'setUser', payload: 'anonymous guest' })
                    // yield put({ type: 'authenticate', payload: data.value })
                    // yield put('location:setLocation', { location: href })
                    window.location.href = '/login.html'
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    reducers: {
        concatUsers: (state, {payload}) => ({
            ...state, usersList: state.usersList.concat(payload)
        }),
        concatMessages: (state, {payload}) => ({
            ...state, messagesList: state.messagesList.concat(payload)
        }),
        updateCurentMessage: (state, {payload}) => ({
            ...state, currentMessage: payload
        }),
        authenticate: (state, {payload}) => ({ ...state, authenticated: payload }),
        setUser: (state, {payload}) => ({ ...state, currentUser: payload })
    }
}