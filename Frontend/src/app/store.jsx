import {configureStore} from '@reduxjs/toolkit'

import userDetail from '../feautres/Userdetails'

const store=configureStore({
    reducer: {
      app:userDetail, //key:value(name-of-slice:reducerfun as value)
    },
})

export default store