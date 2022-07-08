import React from 'react'

export default function Forms({ children,onSubmit }) {
    return (
        <form style={{ border: '1px solid red' }}
            onSubmit={ onSubmit}>
            {children}
        </form>
    )
}
