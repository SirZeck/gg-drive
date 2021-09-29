import React from 'react'
import { Container } from 'react-bootstrap'
import { useFolder } from '../hooks/useFolder'
import AddFolderButton from './AddFolderButton'
import Navbar from './Navbar'
import Folder from './Folder'
import FolderBreadcrumbs from './FolderBreadcrumbs'
import { useParams, useLocation } from 'react-router-dom'


export default function Dashboard() {
    const { folderId } = useParams()
    const { state = {} } = useLocation()
    const { folder, childFolders } = useFolder(folderId, state.folder)
    
    return (
    <>
        <Navbar />
        <Container fluid>
            <div className="d-flex align-items-center">
                <FolderBreadcrumbs currentFolder={ folder } />
                <AddFolderButton currentFolder={ folder } />
            </div>
            {childFolders.length > 0 && (
                <div className="d-flex flex-wrap">
                    {childFolders.map(childFolder => (
                        <div 
                        key={childFolder.id} 
                        style={{ maxWidth: '150px' }}
                        className="p-2"
                        >
                            <Folder folder={childFolder} />
                        </div>    
                    ))}
                </div>
            )}
        </Container>
    </>
    )
}
