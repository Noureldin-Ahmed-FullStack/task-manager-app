import React from 'react'
import AddNote from './AddNote'
import { UserButton } from '@clerk/clerk-react'

export default function Tasks() {
    return (
        <div className='w-100'>
          <UserButton afterSignOutUrl="/sign-in" />
            <AddNote />

        </div>
    )
}
