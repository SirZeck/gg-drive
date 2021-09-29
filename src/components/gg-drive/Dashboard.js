import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import Navbar from './Navbar'

export default function Dashboard() {
    return <>
        <Navbar />
        <Container fluid>
            <AddFolderButton />
        </Container>
    </>
}
